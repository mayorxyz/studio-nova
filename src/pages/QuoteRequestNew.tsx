import { useState } from 'react';
import { SectionEyebrow, Tag, Button } from '../components/atomic';

export default function QuoteRequest() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    budget: '',
    scope: '',
    launchDate: '',
    files: [] as File[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { id: 'web-dev', label: 'Web Development', icon: '💻' },
    { id: 'ui-ux', label: 'UI/UX Design', icon: '🎨' },
    { id: 'branding', label: 'Branding', icon: '✨' },
    { id: 'consulting', label: 'Technical Consulting', icon: '💡' },
    { id: 'maintenance', label: 'Ongoing Maintenance', icon: '🔧' },
  ];

  const budgetRanges = [
    { value: '<10k', label: '< $10k' },
    { value: '10k-25k', label: '$10k - $25k' },
    { value: '25k-50k', label: '$25k - $50k' },
    { value: '50k+', label: '$50k+' },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...files] }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, files: [...prev.files, ...files] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    window.location.href = '/thank-you-quote';
  };

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full text-center">
          <h1 className="text-h1 mb-6 reveal">
            Get a Custom <span className="text-[var(--safety)]">Quote</span> for Your Project
          </h1>
          <div className="flex flex-wrap gap-4 justify-center mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">⚡ Average Response Time: &lt; 4 Hours</Tag>
            <Tag variant="ghost">⏱️ Takes ~2 mins to complete</Tag>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            {/* Left Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="reveal">
                <h2 className="text-h3 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                      placeholder="your@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Company / URL</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                      placeholder="Your company or website"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <h2 className="text-h3 mb-6">What services do you need?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {serviceOptions.map((service) => (
                    <label
                      key={service.id}
                      className={`bento-card cursor-pointer transition-all hover-lift ${
                        formData.services.includes(service.id) ? 'bento-card--safety' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="sr-only"
                      />
                      <div className="text-4xl mb-2">{service.icon}</div>
                      <div className="text-data font-semibold">{service.label}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <h2 className="text-h3 mb-6">What's your budget range?</h2>
                <div className="flex flex-wrap gap-3">
                  {budgetRanges.map((range) => (
                    <button
                      key={range.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: range.value })}
                      className={`px-6 py-3 border-hard transition-all ${
                        formData.budget === range.value
                          ? 'bg-[var(--safety)] text-[var(--ink)] border-[var(--safety)]'
                          : 'bg-[var(--base)] hover:border-[var(--safety)]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Scope */}
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <h2 className="text-h3 mb-6">Tell us about your project</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Project Requirements *</label>
                    <textarea
                      required
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none"
                      placeholder="Describe your project goals, target audience, and key features..."
                    />
                    <div className="text-micro text-[var(--muted)] mt-1 text-right">
                      {formData.scope.length} characters
                    </div>
                  </div>
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Target Launch Date</label>
                    <select
                      value={formData.launchDate}
                      onChange={(e) => setFormData({ ...formData, launchDate: e.target.value })}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="reveal" style={{ transitionDelay: '0.4s' }}>
                <h2 className="text-h3 mb-6">Upload supporting files (optional)</h2>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className="border-hard border-dashed p-8 text-center hover:border-[var(--safety)] transition-colors cursor-pointer"
                >
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg,.fig"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-4xl mb-3">📎</div>
                    <p className="text-data mb-2">Drag & drop files here or click to browse</p>
                    <p className="text-micro text-[var(--muted)]">
                      Supports: PDF, DOC, PNG, JPG, FIG (max 25MB per file)
                    </p>
                  </label>
                </div>
                {formData.files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {formData.files.map((file, i) => (
                      <div key={i} className="bento-card flex items-center justify-between">
                        <div>
                          <div className="text-data font-semibold">{file.name}</div>
                          <div className="text-micro text-[var(--muted)]">
                            {(file.size / 1024).toFixed(2)} KB
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            files: prev.files.filter((_, idx) => idx !== i)
                          }))}
                          className="text-[var(--safety)] hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="reveal" style={{ transitionDelay: '0.5s' }}>
                <Button
                  type="submit"
                  variant="primary"
                  safety
                  disabled={isSubmitting}
                  className="w-full justify-center text-lg py-4"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⚙️</span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Quote Request →'
                  )}
                </Button>
                <p className="text-micro text-[var(--muted)] text-center mt-4">
                  We'll respond within 4 hours during business days
                </p>
              </div>
            </form>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
              {/* Social Proof */}
              <div className="reveal">
                <h3 className="text-h3 mb-4">Trusted by Industry Leaders</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Neon Coffee', 'FinFlow', 'EcoThread', 'SoundWave'].map((client, i) => (
                    <div key={i} className="bento-card text-center py-4">
                      <div className="text-data font-semibold">{client}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bento-card bento-card--dark reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--safety)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SC</span>
                  </div>
                  <div>
                    <div className="text-data font-semibold text-[var(--base)]">Sarah Chen</div>
                    <div className="text-micro text-[var(--muted)]">CEO, Neon Coffee</div>
                  </div>
                </div>
                <p className="text-data text-[var(--muted)] mb-3 italic">
                  "Studio Nova delivered our rebrand 2 weeks ahead of schedule. The ROI has been incredible - 340% increase in online sales."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[var(--safety)]">★</span>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <div className="bento-card reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-h3 mb-2">100% Confidential</h3>
                  <p className="text-data text-[var(--muted)] mb-4">
                    We sign NDAs upon request. Your project details are secure with us.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Tag variant="ghost">SSL Secured</Tag>
                    <Tag variant="ghost">GDPR Compliant</Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
