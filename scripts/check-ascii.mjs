#!/usr/bin/env node
/**
 * Guard: Studio Nova is an English-only codebase.
 *
 * Fails if any scanned file contains CJK text (Han ideographs, Japanese kana or
 * CJK punctuation) in code, comments, strings, or in a file / directory name.
 *
 * Usage: npm run check:ascii
 *
 * The script keeps every character of its own source ASCII by writing the
 * reported glyphs as \uXXXX escapes, so it never flags itself.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "build", ".next", "coverage"]);
const SKIP_EXT = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico",
  ".woff", ".woff2", ".ttf", ".eot",
  ".mp3", ".mp4", ".pdf", ".zip",
]);
const CJK = /[\u3000-\u303F\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/;

const problems = [];

function checkName(name, label) {
  if (CJK.test(name)) problems.push(`${label} (name contains CJK text)`);
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    const rel = relative(ROOT, full).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      checkName(entry.name, rel);
      walk(full);
      continue;
    }

    if (!entry.isFile()) continue;

    const dot = entry.name.lastIndexOf(".");
    if (SKIP_EXT.has(dot === -1 ? "" : entry.name.slice(dot).toLowerCase())) continue;

    checkName(entry.name, rel);

    let text;
    try {
      text = readFileSync(full, "utf8");
    } catch {
      continue;
    }

    text.split(/\r?\n/).forEach((line, index) => {
      if (CJK.test(line)) problems.push(`${rel}:${index + 1}: ${line.trim()}`);
    });
  }
}

walk(ROOT);

if (problems.length > 0) {
  console.error(`\n\u2716  CJK text found in ${problems.length} place(s):\n`);
  for (const problem of problems) console.error(`   ${problem}`);
  console.error("\nStudio Nova is English-only - translate or remove the text above.\n");
  process.exit(1);
}

console.log("\u2714  No CJK text found.");
