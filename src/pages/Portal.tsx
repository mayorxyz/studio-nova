import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const sidebarItems = [
  { icon: '◈', label: 'Dashboard', active: true },
  { icon: '◇', label: 'Projects', active: false },
  { icon: '△', label: 'Invoices', active: false },
  { icon: '○', label: 'Messages', active: false },
  { icon: '□', label: 'Settings', active: false },
];

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
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  if (!loggedIn) {
    return (
      <section className="hero hero--center" style={{ minHeight: '80vh' }}>
        <div className="max-w-md w-full reveal">
          <div className="section__label justify-center">Client Portal</div>
          <h1 className="text-h2 mb-8">Sign <span className="text-[var(--safety)]">In</span></h1>
          
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
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
            </div>
            <div className="terminal__line text-[var(--term-amber)]">nova@portal:~$ auth --status</div>
            <div className="terminal__line text-[var(--term-green)]">→ Awaiting credentials...</div>
            <div className="terminal__line">
              <span className="terminal__prompt">$ </span>
              <span className="terminal__cursor" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <aside className={`bg-[var(--term-bg)] border-r-4 border-[var(--safety)] transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} hidden md:block`}>
        <div className="p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[var(--base)] text-xl mb-6 hover:text-[var(--safety)] transition-colors"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
          
          {sidebarOpen && (
            <div className="terminal p-3 mb-6">
              <div className="text-[var(--fs-micro)] text-[var(--term-green)]">
                <div>client@nova:~$</div>
                <div className="text-[var(--term-amber)]">→ Session active</div>
                <div>→ User: client@studio.com</div>
              </div>
            </div>
          )}

          <nav className="space-y-1">
            {sidebarItems.map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors ${
                  item.active
                    ? 'bg-[var(--safety)] text-[var(--ink)]'
                    : 'text-[var(--base)] hover:bg-[#1a1a1a]'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && <span className="font-mono text-sm">{item.label}</span>}
              </button>
            ))}
          </nav>

          {sidebarOpen && (
            <div className="mt-8 pt-4 border-t border-[#333]">
              <button
                onClick={() => setLoggedIn(false)}
                className="text-[var(--muted)] text-sm hover:text-[var(--safety)] transition-colors"
              >
                ← Sign Out
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-h2">Dashboard</h1>
              <p className="text-data text-[var(--muted)]">Welcome back, Client</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="header__status-dot" />
              <span className="text-micro text-[var(--muted)]">All systems operational</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Active Projects', value: '3', change: '+1' },
              { label: 'Pending Reviews', value: '2', change: '-1' },
              { label: 'Messages', value: '5', change: '+3' },
              { label: 'Invoices', value: '$12K', change: 'Paid' },
            ].map((stat, i) => (
              <div key={i} className="bento-card">
                <div className="text-micro text-[var(--muted)]">{stat.label}</div>
                <div className="text-h3 mt-1">{stat.value}</div>
                <div className="text-micro text-[var(--safety)]">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Active Projects */}
          <div className="bento-card mb-6">
            <h2 className="text-h3 mb-4">Active Projects</h2>
            <div className="space-y-4">
              {activeProjects.map((project, i) => (
                <div key={i} className="border-thin p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display font-semibold">{project.name}</h3>
                    <span className="tag tag--safety">{project.status}</span>
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
          </div>

          {/* Activity Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bento-card">
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
            </div>

            <div className="bento-card bento-card--dark">
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
