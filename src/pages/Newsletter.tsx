import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lightbulb, Gift, ArrowRight, Check, X } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const perks = [
    {
      num: '01',
      icon: Send,
      title: 'Weekly Dispatch',
      desc: 'Curated news and project drops, delivered every Friday.',
    },
    {
      num: '02',
      icon: Lightbulb,
      title: 'Tips & Insights',
      desc: 'Field-tested advice from our design and strategy team.',
    },
    {
      num: '03',
      icon: Gift,
      title: 'Subscribers Only',
      desc: 'Early access, free resources, and private offers.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--base)] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl"
      >
        {/* Top label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-[var(--safety)]" />
          <span
            className="text-[0.65rem] font-mono uppercase tracking-[0.24em] text-[var(--safety)]"
          >
            Newsletter / Subscribe
          </span>
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-start">
          {/* LEFT — Copy + Form */}
          <div>
            <h1 className="font-mono text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight mb-6">
              Stay in the<br />
              <span className="text-[var(--safety)]">loop.</span>
            </h1>

            <p className="font-mono text-[0.95rem] leading-relaxed text-[var(--muted)] max-w-md mb-10">
              A monthly signal from the studio. Case studies, process notes,
              and the occasional provocation — no noise, no fluff.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-[var(--safety)] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-[var(--safety)] flex-shrink-0">
                    <Check className="w-5 h-5 text-[var(--safety)]" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--safety)] mb-2">
                      Confirmed
                    </div>
                    <h2 className="font-mono text-xl font-bold mb-2">
                      You're on the list.
                    </h2>
                    <p className="font-mono text-sm text-[var(--muted)] mb-4">
                      Check your inbox for a confirmation. First dispatch arrives Friday.
                    </p>
                    <button
                      onClick={() => {
                        setSubscribed(false);
                        setEmail('');
                      }}
                      className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--base)] hover:text-[var(--safety)] transition-colors inline-flex items-center gap-2"
                    >
                      <X className="w-3 h-3" />
                      Use a different email
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-0 border border-[var(--base)]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="flex-1 px-5 py-4 bg-transparent font-mono text-sm tracking-wide placeholder:text-[var(--muted)] focus:outline-none focus:bg-[rgba(var(--base-rgb),0.04)] transition-colors"
                  />
                  <motion.button
                    whileHover={{ backgroundColor: 'var(--safety)', color: 'var(--ink)' }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-6 py-4 bg-[var(--base)] text-[var(--ink)] font-mono text-[0.75rem] font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-colors"
                  >
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                  No spam. Unsubscribe in one click.
                </p>
              </motion.form>
            )}
          </div>

          {/* RIGHT — Perks */}
          <div className="border-l border-[rgba(var(--base-rgb),0.12)] pl-8 md:pl-10">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--muted)] mb-8">
              What you receive
            </div>

            <div className="space-y-0">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={perk.num}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group border-t border-[rgba(var(--base-rgb),0.12)] last:border-b py-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="font-mono text-[0.7rem] tracking-[0.15em] text-[var(--safety)] pt-0.5">
                        {perk.num}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <Icon
                            className="w-4 h-4 text-[var(--safety)] group-hover:translate-x-0.5 transition-transform"
                            strokeWidth={2}
                          />
                          <h3 className="font-mono text-sm font-bold uppercase tracking-[0.08em]">
                            {perk.title}
                          </h3>
                        </div>
                        <p className="font-mono text-[0.8rem] text-[var(--muted)] leading-relaxed">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(var(--base-rgb),0.12)]">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                Join <span className="text-[var(--base)]">12,400+</span> readers
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="mt-16 pt-6 border-t border-[rgba(var(--base-rgb),0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">
            Studio Nova / Dispatch
          </div>
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">
            Issue № 047 — Coming soon
          </div>
        </div>
      </motion.div>
    </div>
  );
}