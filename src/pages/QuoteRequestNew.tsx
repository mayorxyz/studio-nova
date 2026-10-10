import { useState } from 'react';
import { Tag, Button } from '../components/atomic';
import { 
  CodeIcon, 
  PaletteIcon, 
  SparklesIcon, 
  LightbulbIcon, 
  ToolIcon, 
  LightningIcon, 
  ClockIcon, 
  PaperclipIcon, 
  LockIcon,
  GearIcon
} from '../components/icons';

export default function QuoteRequestNew() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    budget: '',
    scope: '',
    launchDate: '',
    files: [] as { id: string; file: File }[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { id: 'web-dev', label: 'Web Development', icon: <CodeIcon size={32} /> },
    { id: 'ui-ux', label: 'UI/UX Design', icon: <PaletteIcon size={32} /> },
    { id: 'branding', label: 'Branding', icon: <SparklesIcon size={32} /> },
    { id: 'consulting', label: 'Technical Consulting', icon: <LightbulbIcon size={32} /> },
    { id: 'maintenance', label: 'Ongoing Maintenance', icon: <ToolIcon size={32} /> },
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
    const newFiles = Array.from(e.dataTransfer.files).map(file => ({
      id: Math.random().toString(36).substring(7),
      file
    }));
    setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substring(7),
        file
      }));
      setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
      e.target.value = ''; // Reset input to allow selecting the same file again
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
      <section className="hero relative overflow-hidden" style={{ minHeight: '40vh' }}>
        <div className="max-w-[1400px] mx-auto w-full text-center px-4">
          <h1 className="text-h1 mb-6 reveal">
            Get a Custom <span className="text-[var(--safety)]">Quote</span> for Your Project
          </h1>
          <div className="flex flex-wrap gap-4 justify-center mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
            <Tag variant="safety">
              <LightningIcon size={14} className="inline mr-1" /> 
              Average Response Time: &lt; 4 Hours
            </Tag>
            <Tag variant="ghost">
              <ClockIcon size={14} className="inline mr-1" /> 
              Takes ~2 mins to complete
            </Tag>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            
            {/* Left Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-10">
              
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
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] rounded-md transition-colors"
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
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] rounded-md transition-colors"
                      placeholder="your@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] rounded-md transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="text-micro text-[var(--muted)] mb-2 block">Company / URL</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] rounded-md transition-colors"
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
                      className={`bento-card cursor-pointer transition-all hover-lift flex flex-col items-center text-center p-6 ${
                        formData.services.includes(service.id) ? 'bento-card--safety' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="sr-only"
                      />
                      <div className="mb-3 text-[var(--safety)]">{service.icon}</div>
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
                      className={`px-6 py-3 border-hard rounded-md transition-all font-mono text-sm ${
                        formData.budget === range.value
                          ? 'bg-[var(--safety)] text-[var(--ink)] border-[var(--safety)]'
                          : 'bg-[var(--base)] text-[var(--muted)] hover:border-[var(--safety)] hover:text-[var(--ink)]'
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
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] resize-none rounded-md transition-colors"
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
                      className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] rounded-md transition-colors"
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
                  className="border-hard border-dashed border-2 p-8 text-center hover:border-[var(--safety)] hover:bg-[var(--safety)]/5 transition-all cursor-pointer rounded-md"
                >
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg,.fig"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer block">
                    <div className="mb-3 flex justify-center">
                      <PaperclipIcon size={48} className="text-[var(--muted)]" />
                    </div>
                    <p className="text-data mb-2 font-semibold">Drag & drop files here or click to browse</p>
                    <p className="text-micro text-[var(--muted)]">
                      Supports: PDF, DOC, PNG, JPG, FIG (max 25MB per file)
                    </p>
                  </label>
                </div>
                
                {formData.files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {formData.files.map((fileObj) => (
                      <div key={fileObj.id} className="bento-card flex items-center justify-between p-4">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <PaperclipIcon size={20} className="text-[var(--safety)] shrink-0" />
                          <div className="min-w-0">
                            <div className="text-data font-semibold truncate">{fileObj.file.name}</div>
                            <div className="text-micro text-[var(--muted)]">
                              {(fileObj.file.size / 1024).toFixed(2)} KB
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            files: prev.files.filter(f => f.id !== fileObj.id)
                          }))}
                          className="text-[var(--safety)] hover:underline text-sm shrink-0 ml-2"
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
                      <GearIcon size={16} className="animate-spin mr-2 inline" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Quote Request →'
                  )}
                </Button>
                <p className="text-micro text-[var(--muted)] text-center mt-4 flex items-center justify-center gap-2">
                  <LockIcon size={12} />
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
                    <div key={i} className="bento-card text-center py-4 px-2">
                      <div className="text-data font-semibold">{client}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bento-card bento-card--dark reveal p-6" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--safety)] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[var(--ink)] font-bold">SC</span>
                  </div>
                  <div>
                    <div className="text-data font-semibold text-[var(--base)]">Sarah Chen</div>
                    <div className="text-micro text-[var(--muted)]">CEO, Neon Coffee</div>
                  </div>
                </div>
                <p className="text-data text-[var(--muted)] mb-3 italic leading-relaxed">
                  "Studio Nova delivered our rebrand 2 weeks ahead of schedule. The ROI has been incredible - 340% increase in online sales."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[var(--safety)] text-lg">★</span>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <div className="bento-card reveal p-6 text-center" style={{ transitionDelay: '0.2s' }}>
                <div className="mb-3 flex justify-center">
                  <LockIcon size={48} className="text-[var(--safety)]" />
                </div>
                <h3 className="text-h3 mb-2">100% Confidential</h3>
                <p className="text-data text-[var(--muted)] mb-4 leading-relaxed">
                  We sign NDAs upon request. Your project details are secure with us.
                </p>
                <div className="flex justify-center gap-2 flex-wrap">
                  <Tag variant="ghost">SSL Secured</Tag>
                  <Tag variant="ghost">GDPR Compliant</Tag>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}