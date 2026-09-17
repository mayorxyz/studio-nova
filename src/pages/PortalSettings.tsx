import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BentoCard, Tag, Button } from '../components/atomic';

export default function PortalSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    projectUpdates: true,
    invoices: true,
    messages: true,
    marketing: false,
  });

  const [profile, setProfile] = useState({
    name: 'John Client',
    email: 'john@clientcompany.com',
    company: 'Client Company Inc.',
    phone: '+1 (555) 123-4567',
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-h2">Settings</h1>
          <p className="text-data text-[var(--muted)]">Manage your account and preferences</p>
        </div>
        <Link to="/portal" className="btn--ghost">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Profile Section */}
      <BentoCard className="mb-6">
        <h2 className="text-h3 mb-6">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-micro text-[var(--muted)] mb-2 block">Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
            />
          </div>
          <div>
            <label className="text-micro text-[var(--muted)] mb-2 block">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
            />
          </div>
          <div>
            <label className="text-micro text-[var(--muted)] mb-2 block">Company</label>
            <input
              type="text"
              value={profile.company}
              onChange={(e) => setProfile({ ...profile, company: e.target.value })}
              className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
            />
          </div>
          <div>
            <label className="text-micro text-[var(--muted)] mb-2 block">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-4 py-3 border-hard bg-[var(--base)] font-mono text-sm focus:outline-none focus:border-[var(--safety)]"
            />
          </div>
        </div>
        <div className="mt-6">
          <Button variant="primary" safety>
            Save Changes
          </Button>
        </div>
      </BentoCard>

      {/* Notifications */}
      <BentoCard className="mb-6">
        <h2 className="text-h3 mb-6">Notification Preferences</h2>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border-thin">
              <div>
                <div className="text-data font-semibold capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-micro text-[var(--muted)]">
                  {key === 'email' && 'Receive email notifications about your account'}
                  {key === 'projectUpdates' && 'Get notified when projects are updated'}
                  {key === 'invoices' && 'Receive invoice and payment notifications'}
                  {key === 'messages' && 'Get notified about new messages'}
                  {key === 'marketing' && 'Receive marketing emails and newsletters'}
                </div>
              </div>
              <button
                onClick={() => handleNotificationChange(key as keyof typeof notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-[var(--safety)]' : 'bg-[var(--muted)]'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Security */}
      <BentoCard className="mb-6">
        <h2 className="text-h3 mb-6">Security</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border-thin">
            <div>
              <div className="text-data font-semibold">Password</div>
              <div className="text-micro text-[var(--muted)]">Last changed 30 days ago</div>
            </div>
            <Button variant="ghost">
              Change Password
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border-thin">
            <div>
              <div className="text-data font-semibold">Two-Factor Authentication</div>
              <div className="text-micro text-[var(--muted)]">Add an extra layer of security</div>
            </div>
            <Tag variant="safety">Enabled</Tag>
          </div>
          <div className="flex items-center justify-between p-4 border-thin">
            <div>
              <div className="text-data font-semibold">Active Sessions</div>
              <div className="text-micro text-[var(--muted)]">2 devices currently logged in</div>
            </div>
            <Button variant="ghost">
              Manage Sessions
            </Button>
          </div>
        </div>
      </BentoCard>

      {/* Billing */}
      <BentoCard className="mb-6">
        <h2 className="text-h3 mb-6">Billing & Subscription</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border-thin">
            <div>
              <div className="text-data font-semibold">Current Plan</div>
              <div className="text-micro text-[var(--muted)]">Enterprise - $50,000/year</div>
            </div>
            <Tag variant="safety">Active</Tag>
          </div>
          <div className="flex items-center justify-between p-4 border-thin">
            <div>
              <div className="text-data font-semibold">Payment Method</div>
              <div className="text-micro text-[var(--muted)]">Visa ending in 4242</div>
            </div>
            <Button variant="ghost">
              Update
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border-thin">
            <div>
              <div className="text-data font-semibold">Next Invoice</div>
              <div className="text-micro text-[var(--muted)]">Due on March 1, 2024</div>
            </div>
            <Link to="/portal/invoices" className="text-data text-[var(--safety)] hover:underline">
              View Invoices →
            </Link>
          </div>
        </div>
      </BentoCard>

      {/* Danger Zone */}
      <BentoCard variant="dark">
        <h2 className="text-h3 mb-6 text-[var(--safety)]">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-[var(--safety)]/30">
            <div>
              <div className="text-data font-semibold text-[var(--base)]">Export Data</div>
              <div className="text-micro text-[var(--muted)]">Download all your data in JSON format</div>
            </div>
            <Button variant="ghost">
              Export
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border border-red-500/30">
            <div>
              <div className="text-data font-semibold text-[var(--base)]">Delete Account</div>
              <div className="text-micro text-[var(--muted)]">Permanently delete your account and all data</div>
            </div>
            <button className="px-4 py-2 bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500/30 transition-colors text-sm">
              Delete Account
            </button>
          </div>
        </div>
      </BentoCard>
    </div>
  );
}
