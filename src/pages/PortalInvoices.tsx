import { Link } from 'react-router-dom';
import { BentoCard, Tag } from '../components/atomic';

const invoices = [
  {
    id: 'INV-2024-001',
    project: 'Neon Coffee Rebrand',
    amount: 15000,
    status: 'Paid',
    date: 'Jan 15, 2024',
    dueDate: 'Jan 30, 2024',
  },
  {
    id: 'INV-2024-002',
    project: 'FinFlow Dashboard',
    amount: 25000,
    status: 'Pending',
    date: 'Jan 20, 2024',
    dueDate: 'Feb 05, 2024',
  },
  {
    id: 'INV-2024-003',
    project: 'EcoThread Platform',
    amount: 8000,
    status: 'Paid',
    date: 'Dec 10, 2023',
    dueDate: 'Dec 25, 2023',
  },
  {
    id: 'INV-2023-012',
    project: 'Music Streaming App',
    amount: 18000,
    status: 'Paid',
    date: 'Nov 05, 2023',
    dueDate: 'Nov 20, 2023',
  },
];

export default function PortalInvoices() {
  const totalPaid = invoices
    .filter(inv => inv.status === 'Paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalPending = invoices
    .filter(inv => inv.status === 'Pending')
    .reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-h2">Invoices</h1>
          <p className="text-data text-[var(--muted)]">View and manage your invoices</p>
        </div>
        <Link to="/portal" className="btn--ghost">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <BentoCard variant="dark">
          <div className="text-micro text-[var(--muted)] mb-2">Total Paid</div>
          <div className="text-h2 text-[var(--term-green)]">
            ${totalPaid.toLocaleString()}
          </div>
        </BentoCard>
        <BentoCard variant="dark">
          <div className="text-micro text-[var(--muted)] mb-2">Pending</div>
          <div className="text-h2 text-[var(--term-amber)]">
            ${totalPending.toLocaleString()}
          </div>
        </BentoCard>
        <BentoCard variant="dark">
          <div className="text-micro text-[var(--muted)] mb-2">Total Invoices</div>
          <div className="text-h2 text-[var(--safety)]">{invoices.length}</div>
        </BentoCard>
      </div>

      {/* Invoices List */}
      <div className="space-y-4">
        {invoices.map((invoice, i) => (
          <BentoCard key={invoice.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-h3 font-mono">{invoice.id}</h2>
                  <Tag variant={invoice.status === 'Paid' ? 'safety' : 'ghost'}>
                    {invoice.status}
                  </Tag>
                </div>
                <p className="text-data text-[var(--muted)] mb-3">{invoice.project}</p>
                <div className="flex gap-6 text-micro text-[var(--muted)]">
                  <div>
                    <span className="font-semibold">Issued:</span> {invoice.date}
                  </div>
                  <div>
                    <span className="font-semibold">Due:</span> {invoice.dueDate}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-h2 text-[var(--safety)] mb-2">
                  ${invoice.amount.toLocaleString()}
                </div>
                <div className="flex gap-2">
                  <button className="btn--ghost !py-2 !px-4 !text-xs">
                    Download PDF
                  </button>
                  {invoice.status === 'Pending' && (
                    <button className="btn--primary !py-2 !px-4 !text-xs">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>

      {/* Info */}
      <div className="bento-card bento-card--dark mt-8 reveal">
        <h3 className="text-h3 mb-2">Payment Information</h3>
        <p className="text-data text-[var(--muted)] mb-4">
          All payments are processed securely. Invoices are due within 15 days of issuance.
          Late payments may incur additional fees as outlined in our Terms of Service.
        </p>
        <div className="flex gap-4">
          <a href="mailto:billing@studionova.com" className="text-data text-[var(--safety)] hover:underline">
            billing@studionova.com
          </a>
          <Link to="/terms-of-service" className="text-data text-[var(--safety)] hover:underline">
            View Terms →
          </Link>
        </div>
      </div>
    </div>
  );
}
