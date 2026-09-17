import { Link } from 'react-router-dom';
import { BentoCard, Tag } from '../components/atomic';

const projects = [
  {
    id: 'neon-coffee',
    name: 'Neon Coffee Rebrand',
    status: 'In Progress',
    progress: 72,
    due: 'Feb 15, 2024',
    category: 'Branding',
    description: 'Complete brand identity and packaging design for artisan coffee roaster.',
  },
  {
    id: 'fintech-app',
    name: 'FinFlow Dashboard',
    status: 'Review',
    progress: 90,
    due: 'Feb 08, 2024',
    category: 'UI/UX',
    description: 'Dashboard redesign for fintech application with data visualization.',
  },
  {
    id: 'sustainable-fashion',
    name: 'EcoThread Platform',
    status: 'In Progress',
    progress: 45,
    due: 'Mar 01, 2024',
    category: 'Web Design',
    description: 'E-commerce platform for sustainable fashion brand.',
  },
];

export default function PortalProjects() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-h2">Projects</h1>
          <p className="text-data text-[var(--muted)]">Track your active projects and deliverables</p>
        </div>
        <Link to="/portal" className="btn--ghost">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, i) => (
          <BentoCard key={project.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-h3">{project.name}</h2>
                  <Tag variant="safety">{project.status}</Tag>
                </div>
                <p className="text-data text-[var(--muted)]">{project.description}</p>
              </div>
              <Tag variant="ghost">{project.category}</Tag>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-micro text-[var(--muted)]">Progress</span>
                <span className="text-micro text-[var(--safety)] font-semibold">{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-[var(--surface)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--safety)] transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex justify-between items-center pt-4 border-t border-[var(--ink)]/10">
              <div className="flex gap-6">
                <div>
                  <div className="text-micro text-[var(--muted)] mb-1">Due Date</div>
                  <div className="text-data">{project.due}</div>
                </div>
                <div>
                  <div className="text-micro text-[var(--muted)] mb-1">Status</div>
                  <div className="text-data">{project.status}</div>
                </div>
              </div>
              <button className="btn--ghost !py-2 !px-4">
                View Details →
              </button>
            </div>
          </BentoCard>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <BentoCard variant="dark">
          <div className="text-micro text-[var(--muted)] mb-2">Active Projects</div>
          <div className="text-h2 text-[var(--safety)]">{projects.length}</div>
        </BentoCard>
        <BentoCard variant="dark">
          <div className="text-micro text-[var(--muted)] mb-2">In Review</div>
          <div className="text-h2 text-[var(--safety)]">
            {projects.filter(p => p.status === 'Review').length}
          </div>
        </BentoCard>
        <BentoCard variant="dark">
          <div className="text-micro text-[var(--muted)] mb-2">Avg. Progress</div>
          <div className="text-h2 text-[var(--safety)]">
            {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
