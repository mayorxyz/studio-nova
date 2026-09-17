import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/atomic';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength calculation
  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const getStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-red-500';
    if (passwordStrength < 50) return 'bg-orange-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    if (passwordStrength < 25) return 'Weak';
    if (passwordStrength < 50) return 'Fair';
    if (passwordStrength < 75) return 'Good';
    return 'Strong';
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.password.length >= 8 &&
      formData.password === formData.confirmPassword &&
      formData.agreeTerms
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      // Simulate registration
      console.log('Registration:', formData);
      // Redirect to dashboard or login
      window.location.href = '/portal';
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Brand & Social Proof */}
      <div className="lg:w-1/2 bg-[var(--term-bg)] text-[var(--base)] p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, var(--safety) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--term-green) 0%, transparent 50%)',
            animation: 'pulse 4s ease-in-out infinite',
          }} />
        </div>

        <div className="relative z-10 max-w-md">
          {/* Logo */}
          <Link to="/" className="inline-block mb-12">
            <div className="text-3xl font-display font-bold">
              STUDIO<span className="text-[var(--safety)]">NOVA</span>
            </div>
          </Link>

          {/* Hero Quote */}
          <blockquote className="mb-12">
            <p className="text-h2 mb-4 leading-tight">
              "Studio Nova transformed our digital presence. The results exceeded all expectations."
            </p>
            <footer className="text-data text-[var(--muted)]">
              — Sarah Chen, CEO at Neon Coffee
            </footer>
          </blockquote>

          {/* Metric Card */}
          <div className="bento-card bento-card--dark mb-8">
            <div className="text-h1 text-[var(--safety)] mb-2">99.9%</div>
            <div className="text-data">Uptime Guarantee</div>
          </div>

          {/* Feature Bullets */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[var(--safety)] text-xl">✓</span>
              <span className="text-data">Access to exclusive client portal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--safety)] text-xl">✓</span>
              <span className="text-data">Track project progress in real-time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--safety)] text-xl">✓</span>
              <span className="text-data">Direct communication with your team</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--safety)] text-xl">✓</span>
              <span className="text-data">Download invoices and assets</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="lg:w-1/2 bg-[var(--base)] p-12 flex items-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-h1 mb-2">Create Account</h1>
          <p className="text-data text-[var(--muted)] mb-8">
            Join Studio Nova to access your client portal
          </p>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full px-4 py-3 border-hard bg-[var(--base)] hover:bg-[var(--surface)] transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-data font-semibold">Sign up with Google</span>
            </button>
            <button className="w-full px-4 py-3 border-hard bg-[var(--base)] hover:bg-[var(--surface)] transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-data font-semibold">Sign up with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--ink)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[var(--base)] text-[var(--muted)]">OR</span>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-micro text-[var(--muted)] mb-2 block">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="text-micro text-[var(--muted)] mb-2 block">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
                  placeholder="Minimum 8 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--safety)]"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {/* Password Strength Meter */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-1 rounded ${
                          i < passwordStrength / 25 ? getStrengthColor() : 'bg-[var(--surface)]'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-micro text-[var(--muted)]">
                    Password strength: <span className={getStrengthColor().replace('bg-', 'text-')}>
                      {getStrengthLabel()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-micro text-[var(--muted)] mb-2 block">Confirm Password *</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`w-full px-4 py-3 pr-12 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)] ${
                    formData.confirmPassword && formData.password !== formData.confirmPassword
                      ? 'border-red-500'
                      : ''
                  }`}
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--safety)]"
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-micro text-red-500 mt-1">Passwords do not match</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 w-4 h-4 accent-[var(--safety)]"
              />
              <label htmlFor="terms" className="text-data text-[var(--muted)] cursor-pointer">
                I agree to the{' '}
                <Link to="/terms-of-service" className="text-[var(--safety)] hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-[var(--safety)] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              safety
              disabled={!isFormValid()}
              className="w-full justify-center text-lg py-4"
            >
              Create Account →
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-data text-[var(--muted)]">
              Already have an account?{' '}
              <Link to="/portal" className="text-[var(--safety)] hover:underline font-semibold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
