import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--surface)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-[var(--base)] rounded-2xl shadow-xl p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-[var(--ink)] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="w-10 h-10 text-[var(--base)]" />
          </motion.div>

          <h1 className="text-4xl font-bold text-[var(--ink)] mb-4">
            Stay Updated
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8">
            Subscribe to our newsletter and get the latest updates, tips, and insights delivered directly to your inbox.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8"
            >
              <CheckCircle className="w-16 h-16 text-[var(--term-green)] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-2">
                You're subscribed!
              </h2>
              <p className="text-[var(--muted)] mb-6">
                Thank you for subscribing. Check your email for a confirmation message.
              </p>
              <button
                onClick={() => {
                  setSubscribed(false);
                  setEmail('');
                }}
                className="text-[var(--ink)] font-semibold hover:underline"
              >
                Subscribe with a different email
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-3 mb-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--ink)] focus:border-transparent transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-[var(--ink)] text-[var(--base)] rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              <p className="text-sm text-[var(--muted)]">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          )}

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--ink)] mb-4">
              What you'll get:
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="p-4 bg-[var(--surface)] rounded-lg">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-[var(--ink)] mb-1">Weekly Updates</h4>
                <p className="text-sm text-[var(--muted)]">
                  Latest news and updates from our team
                </p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg">
                <div className="text-2xl mb-2">💡</div>
                <h4 className="font-semibold text-[var(--ink)] mb-1">Tips & Insights</h4>
                <p className="text-sm text-[var(--muted)]">
                  Expert advice and industry insights
                </p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg">
                <div className="text-2xl mb-2">🎁</div>
                <h4 className="font-semibold text-[var(--ink)] mb-1">Exclusive Offers</h4>
                <p className="text-sm text-[var(--muted)]">
                  Special deals for subscribers only
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
