import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data';
import { SectionEyebrow, Button } from '../components/atomic';

export default function JobApplicationSuccess() {
  const { slug } = useParams<{ slug: string }>();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Position Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The job posting you're looking for doesn't exist.
          </p>
          <Link to="/careers" className="btn--primary">
            ← Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto text-center px-8">
        <SectionEyebrow>Application Received</SectionEyebrow>
        
        <h1 className="text-h1 mt-4 mb-6 reveal">
          Application <span className="text-[var(--safety)]">submitted!</span>
        </h1>
        
        <p className="text-data text-[var(--muted)] mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
          Thanks for applying for the <strong>{job.title}</strong> position. We've received your application and our team will review it within 5 business days.
        </p>

        {/* Application Details */}
        <div className="bento-card bento-card--dark max-w-xl mx-auto mb-8 reveal" style={{ transitionDelay: '0.15s' }}>
          <h3 className="text-h3 text-[var(--base)] mb-4">Position Details</h3>
          <div className="space-y-3 text-left">
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Role</div>
              <div className="text-data text-[var(--base)]">{job.title}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Department</div>
              <div className="text-data text-[var(--base)]">{job.department}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Location</div>
              <div className="text-data text-[var(--base)]">{job.location}</div>
            </div>
            <div>
              <div className="text-micro text-[var(--muted)] mb-1">Type</div>
              <div className="text-data text-[var(--base)]">{job.type}</div>
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal max-w-xl mx-auto text-left mb-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="terminal__header">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span>nova apply --position={job.slug}</span>
          </div>
          <div className="terminal__line text-[var(--term-green)]">
            ✓ Application received successfully
          </div>
          <div className="terminal__line text-[var(--term-amber)]">
            → Review period: 5 business days
          </div>
          <div className="terminal__line">
            → Status: Under Review
          </div>
          <div className="terminal__line">
            <span className="terminal__prompt">$ </span>
            <span className="terminal__cursor" />
          </div>
        </div>

        {/* What's Next */}
        <div className="bento-card max-w-xl mx-auto mb-8 text-left reveal" style={{ transitionDelay: '0.25s' }}>
          <h3 className="text-h3 mb-4">What's Next?</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-data font-semibold mb-1">Application Review</h4>
                <p className="text-data text-[var(--muted)] text-sm">
                  Our hiring team will review your application, resume, and portfolio within 5 business days.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-data font-semibold mb-1">Initial Screening</h4>
                <p className="text-data text-[var(--muted)] text-sm">
                  If your qualifications match our needs, we'll reach out to schedule a 30-minute phone screening.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-data font-semibold mb-1">Interview Process</h4>
                <p className="text-data text-[var(--muted)] text-sm">
                  Successful candidates will participate in 2-3 interviews to discuss experience, skills, and team fit.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--safety)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h4 className="text-data font-semibold mb-1">Decision & Offer</h4>
                <p className="text-data text-[var(--muted)] text-sm">
                  We'll make a decision within 2 weeks of your final interview and extend an offer if there's a match.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center reveal" style={{ transitionDelay: '0.3s' }}>
          <Link to="/careers">
            <Button variant="primary" safety>
              View Other Positions
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              Go to Home
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 reveal" style={{ transitionDelay: '0.35s' }}>
          <p className="text-data text-[var(--muted)] mb-2">
            Questions about your application?
          </p>
          <a href="mailto:careers@studionova.com" className="text-data text-[var(--safety)] hover:underline">
            careers@studionova.com
          </a>
        </div>
      </div>
    </div>
  );
}
