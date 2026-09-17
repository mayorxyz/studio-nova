import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { jobs } from '../data';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  coverLetter: string;
  resumeUrl: string;
  salaryExpectation: string;
  startDate: string;
  referral: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function JobApplication() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.slug === slug);

  const [formData, setFormData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: '',
    resumeUrl: '',
    salaryExpectation: '',
    startDate: '',
    referral: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required';
    } else if (formData.coverLetter.trim().length < 100) {
      newErrors.coverLetter = 'Cover letter must be at least 100 characters';
    }

    if (!formData.resumeUrl.trim()) {
      newErrors.resumeUrl = 'Resume link is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Application submitted:', formData);

    // Navigate to success page
    navigate(`/careers/${slug}/applied`);
  };

  const handleChange = (field: keyof ApplicationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>
            <Link to={`/careers/${slug}`} className="hover:text-[var(--safety)] transition-colors">
              {job.title}
            </Link>
            {' / '}
            Application
          </SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Apply for <span className="text-[var(--safety)]">{job.title}</span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">{job.department}</Tag>
            <Tag variant="ghost">{job.location}</Tag>
            <Tag variant="ghost">{job.type}</Tag>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="reveal">
              <h2 className="text-h3 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    First Name <span className="text-[var(--safety)]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] ${
                      errors.firstName ? 'border-[var(--safety)]' : ''
                    }`}
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <p className="text-[var(--safety)] text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Last Name <span className="text-[var(--safety)]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] ${
                      errors.lastName ? 'border-[var(--safety)]' : ''
                    }`}
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <p className="text-[var(--safety)] text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Email <span className="text-[var(--safety)]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] ${
                      errors.email ? 'border-[var(--safety)]' : ''
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-[var(--safety)] text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-h3 mb-6">Professional Links</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">LinkedIn Profile</label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleChange('linkedin', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Portfolio Website</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleChange('portfolio', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Resume/CV Link <span className="text-[var(--safety)]">*</span>
                  </label>
                  <input
                    type="url"
                    value={formData.resumeUrl}
                    onChange={(e) => handleChange('resumeUrl', e.target.value)}
                    className={`w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] ${
                      errors.resumeUrl ? 'border-[var(--safety)]' : ''
                    }`}
                    placeholder="https://drive.google.com/your-resume or similar"
                  />
                  {errors.resumeUrl && (
                    <p className="text-[var(--safety)] text-xs mt-1">{errors.resumeUrl}</p>
                  )}
                  <p className="text-micro text-[var(--muted)] mt-1">
                    Please share a link to your resume (Google Drive, Dropbox, etc.)
                  </p>
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-h3 mb-6">Cover Letter</h2>
              <div>
                <label className="text-micro text-[var(--muted)] mb-2 block">
                  Tell us why you're a great fit for this role <span className="text-[var(--safety)]">*</span>
                </label>
                <textarea
                  value={formData.coverLetter}
                  onChange={(e) => handleChange('coverLetter', e.target.value)}
                  rows={10}
                  className={`w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none ${
                    errors.coverLetter ? 'border-[var(--safety)]' : ''
                  }`}
                  placeholder="Share your experience, why you're interested in this role, and what makes you a great fit for Studio Nova..."
                />
                {errors.coverLetter && (
                  <p className="text-[var(--safety)] text-xs mt-1">{errors.coverLetter}</p>
                )}
                <p className="text-micro text-[var(--muted)] mt-1">
                  Minimum 100 characters. Current: {formData.coverLetter.length}
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h2 className="text-h3 mb-6">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Salary Expectation</label>
                  <input
                    type="text"
                    value={formData.salaryExpectation}
                    onChange={(e) => handleChange('salaryExpectation', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="e.g., $80,000 - $100,000"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Available Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleChange('startDate', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="text-micro text-[var(--muted)] mb-2 block">How did you hear about this position?</label>
                <select
                  value={formData.referral}
                  onChange={(e) => handleChange('referral', e.target.value)}
                  className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                >
                  <option value="">Select an option</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="website">Company Website</option>
                  <option value="job-board">Job Board</option>
                  <option value="referral">Employee Referral</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <Button
                type="submit"
                variant="primary"
                safety
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application →'}
              </Button>
              <p className="text-micro text-[var(--muted)] text-center mt-4">
                We'll review your application and get back to you within 5 business days.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
