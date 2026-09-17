import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionEyebrow, Button, Tag } from '../components/atomic';
import { services } from '../data';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function QuoteRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetRanges = [
    { value: '5-15', label: '$5K – $15K' },
    { value: '15-50', label: '$15K – $50K' },
    { value: '50-100', label: '$50K – $100K' },
    { value: '100+', label: '$100K+' },
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-2months', label: '1-2 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Please provide more details (at least 20 characters)';
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

    // In production, this would send data to your backend
    console.log('Form submitted:', formData);

    // Navigate to thank you page
    navigate('/thank-you');
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <SectionEyebrow>Get a Quote</SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Start your <span className="text-[var(--safety)]">project.</span>
          </h1>
          <p className="text-data text-[var(--muted)] mt-4 max-w-2xl reveal" style={{ transitionDelay: '0.1s' }}>
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="reveal">
              <h2 className="text-h3 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Name <span className="text-[var(--safety)]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] ${
                      errors.name ? 'border-[var(--safety)]' : ''
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-[var(--safety)] text-xs mt-1">{errors.name}</p>
                  )}
                </div>
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
              </div>
              <div className="mt-6">
                <label className="text-micro text-[var(--muted)] mb-2 block">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                  placeholder="Your company (optional)"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-h3 mb-6">Project Details</h2>
              <div>
                <label className="text-micro text-[var(--muted)] mb-3 block">
                  Service Needed <span className="text-[var(--safety)]">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => handleChange('service', service.slug)}
                      className={`p-4 border-hard text-left transition-all hover-lift ${
                        formData.service === service.slug
                          ? 'bg-[var(--safety)] text-[var(--ink)]'
                          : 'bg-[var(--base)] hover:bg-[var(--surface)]'
                      }`}
                    >
                      <div className="text-[var(--safety)] font-display font-bold text-2xl mb-2">
                        {service.number}
                      </div>
                      <div className="text-sm font-semibold">{service.title}</div>
                    </button>
                  ))}
                </div>
                {errors.service && (
                  <p className="text-[var(--safety)] text-xs mt-2">{errors.service}</p>
                )}
              </div>
            </div>

            {/* Budget Range */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <label className="text-micro text-[var(--muted)] mb-3 block">
                Budget Range <span className="text-[var(--safety)]">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => handleChange('budget', range.value)}
                    className={`p-4 border-hard text-center transition-all hover-lift ${
                      formData.budget === range.value
                        ? 'bg-[var(--safety)] text-[var(--ink)]'
                        : 'bg-[var(--base)] hover:bg-[var(--surface)]'
                    }`}
                  >
                    <div className="text-sm font-semibold">{range.label}</div>
                  </button>
                ))}
              </div>
              {errors.budget && (
                <p className="text-[var(--safety)] text-xs mt-2">{errors.budget}</p>
              )}
            </div>

            {/* Timeline */}
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <label className="text-micro text-[var(--muted)] mb-3 block">Timeline</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.value}
                    type="button"
                    onClick={() => handleChange('timeline', timeline.value)}
                    className={`p-4 border-hard text-center transition-all hover-lift ${
                      formData.timeline === timeline.value
                        ? 'bg-[var(--safety)] text-[var(--ink)]'
                        : 'bg-[var(--base)] hover:bg-[var(--surface)]'
                    }`}
                  >
                    <div className="text-sm font-semibold">{timeline.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <label className="text-micro text-[var(--muted)] mb-2 block">
                Project Description <span className="text-[var(--safety)]">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={6}
                className={`w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none ${
                  errors.description ? 'border-[var(--safety)]' : ''
                }`}
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
              {errors.description && (
                <p className="text-[var(--safety)] text-xs mt-1">{errors.description}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="reveal" style={{ transitionDelay: '0.5s' }}>
              <Button
                type="submit"
                variant="primary"
                safety
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request →'}
              </Button>
              <p className="text-micro text-[var(--muted)] text-center mt-4">
                We'll respond within 24 hours with a detailed proposal.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
