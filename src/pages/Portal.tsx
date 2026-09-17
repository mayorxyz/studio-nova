import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BentoCard, Tag, TerminalLog } from '../components/atomic';

const activeProjects = [
  { name: 'Neon Coffee Rebrand', status: 'In Progress', progress: 72, due: 'Feb 15' },
  { name: 'FinFlow Dashboard', status: 'Review', progress: 90, due: 'Feb 08' },
  { name: 'EcoThread Platform', status: 'In Progress', progress: 45, due: 'Mar 01' },
];

const recentActivity = [
  { action: 'Design files uploaded', project: 'Neon Coffee', time: '2h ago' },
  { action: 'Feedback received', project: 'FinFlow', time: '5h ago' },
  { action: 'Milestone completed', project: 'EcoThread', time: '1d ago' },
  { action: 'Invoice paid', project: 'Neon Coffee', time: '2d ago' },
  { action: 'New message', project: 'FinFlow', time: '3d ago' },
];

export default function Portal() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loggedIn]);

  // Login screen — rendered inside MinimalLayout-style centered view
  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-128px)]">
        <div className="max-w-md w-full reveal">
          <div className="section__label justify-center">Client Portal</div>
          <h1 className="text-h2 mb-8 text-center">Sign <span className="text-[var(--safety)]">In</span></h1>
          
          <form onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }} className="space-y-4">
            <div>
              <label className="text-micro text-[var(--muted)] mb-1 block">Email</label>
              <input
                type="email"
                defaultValue="client@studio.com"
                className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
              />
            </div>
            <div>
              <label className="text-micro text-[var(--muted)] mb-1 block">Password</label>
              <input
                type="password"
                defaultValue="password"
                className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
              />
            </div>
            <button type="submit" className="btn--primary btn--primary--safety w-full justify-center">
              Access Portal →
            </button>
          </form>

          <div className="terminal mt-8 text-left">
            <TerminalLog
              entries={[
                { type: 'warning', text: '→ Awaiting credentials...' },
                { type: 'output', text: '→ Portal locked' },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }

  // Dashboard content — rendered inside DashboardLayout
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-h2">Dashboard</h1>
          <p className="text-data text-[var(--muted)]">Welcome back, Client</p>
        </div>
        <button
          onClick={() => setLoggedIn(false)}
          className="text-micro text-[var(--muted)] hover:text-[var(--safety)] transition-colors"
        >
          ← Sign Out
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Projects', value: '3', change: '+1' },
          { label: 'Pending Reviews', value: '2', change: '-1' },
          { label: 'Messages', value: '5', change: '+3' },
          { label: 'Invoices', value: '$12K', change: 'Paid' },
        ].map((stat, i) => (
          <BentoCard key={i}>
            <div className="text-micro text-[var(--muted)]">{stat.label}</div>
            <div className="text-h3 mt-1">{stat.value}</div>
            <div className="text-micro text-[var(--safety)]">{stat.change}</div>
          </BentoCard>
        ))}
      </div>

      {/* Active Projects */}
      <BentoCard className="mb-6">
        <h2 className="text-h3 mb-4">Active Projects</h2>
        <div className="space-y-4">
          {activeProjects.map((project, i) => (
            <div key={i} className="border-thin p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-semibold">{project.name}</h3>
                <Tag variant="safety">{project.status}</Tag>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-[var(--surface)] border-thin">
                  <div
                    className="h-full bg-[var(--safety)]"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-micro text-[var(--muted)]">{project.progress}%</span>
                <span className="text-micro text-[var(--muted)]">Due: {project.due}</span>
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Activity Feed + Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BentoCard>
          <h2 className="text-h3 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span className="text-[var(--safety)] mt-0.5">◆</span>
                <div>
                  <div className="font-mono">{item.action}</div>
                  <div className="text-[var(--muted)] text-xs">{item.project} — {item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard variant="dark">
          <h2 className="text-h3 mb-4 text-[var(--base)]">Quick Actions</h2>
          <div className="space-y-2">
            <Link to="/contact" className="block px-4 py-3 border border-[#333] text-[var(--base)] hover:border-[var(--safety)] hover:text-[var(--safety)] transition-colors text-sm">
              → Upload Files
            </Link>
            <Link to="/contact" className="block px-4 py-3 border border-[#333] text-[var(--base)] hover:border-[var(--safety)] hover:text-[var(--safety)] transition-colors text-sm">
              → Send Feedback
            </Link>
            <Link to="/contact" className="block px-4 py-3 border border-[#333] text-[var(--base)] hover:border-[var(--safety)] hover:text-[var(--safety)] transition-colors text-sm">
              → View Invoices
            </Link>
            <Link to="/contact" className="block px-4 py-3 border border-[#333] text-[var(--base)] hover:border-[var(--safety)] hover:text-[var(--safety)] transition-colors text-sm">
              → Schedule Call
            </Link>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
