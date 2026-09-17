import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { events } from '../data';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  dietaryRestrictions: string;
  accessibilityNeeds: string;
  howDidYouHear: string;
}

type FormErrors = Partial<Record<keyof RegistrationData, string>>;

export default function EventRegistration() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const event = events.find((e) => e.slug === slug);

  const [formData, setFormData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    dietaryRestrictions: '',
    accessibilityNeeds: '',
    howDidYouHear: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Event Not Found</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            The event you're looking for doesn't exist.
          </p>
          <Link to="/events" className="btn--primary">
            ← Back to Events
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

    console.log('Registration submitted:', formData);

    // Navigate to success page
    navigate(`/events/${slug}/registered`);
  };

  const handleChange = (field: keyof RegistrationData, value: string) => {
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
            <Link to={`/events/${slug}`} className="hover:text-[var(--safety)] transition-colors">
              {event.title}
            </Link>
            {' / '}
            Registration
          </SectionEyebrow>
          <h1 className="text-h1 mt-4 reveal">
            Register for <span className="text-[var(--safety)]">{event.title}</span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">{event.category.charAt(0).toUpperCase() + event.category.slice(1)}</Tag>
            <Tag variant="ghost">{event.duration}</Tag>
            <Tag variant="ghost">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </Tag>
          </div>
        </div>
      </section>

      {/* Registration Form */}
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
              <div className="mt-6">
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

            {/* Professional Information */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-h3 mb-6">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    placeholder="Your role (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-h3 mb-6">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Dietary Restrictions (for in-person events)
                  </label>
                  <textarea
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleChange('dietaryRestrictions', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none"
                    placeholder="Let us know about any dietary restrictions or allergies"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    Accessibility Needs
                  </label>
                  <textarea
                    value={formData.accessibilityNeeds}
                    onChange={(e) => handleChange('accessibilityNeeds', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none"
                    placeholder="Let us know if you have any accessibility requirements"
                  />
                </div>
                <div>
                  <label className="text-micro text-[var(--muted)] mb-2 block">
                    How did you hear about this event?
                  </label>
                  <select
                    value={formData.howDidYouHear}
                    onChange={(e) => handleChange('howDidYouHear', e.target.value)}
                    className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                  >
                    <option value="">Select an option</option>
                    <option value="social-media">Social Media</option>
                    <option value="email">Email Newsletter</option>
                    <option value="website">Website</option>
                    <option value="friend">Friend/Colleague</option>
                    <option value="search">Search Engine</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <Button
                type="submit"
                variant="primary"
                safety
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? 'Registering...' : 'Complete Registration →'}
              </Button>
              <p className="text-micro text-[var(--muted)] text-center mt-4">
                You'll receive a confirmation email with event details and calendar invite.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
