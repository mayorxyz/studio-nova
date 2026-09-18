import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BentoCard, Tag } from '../components/atomic';

const conversations = [
  {
    id: 'neon-coffee',
    name: 'Neon Coffee Rebrand',
    lastMessage: 'Thanks for the feedback! We\'ll incorporate those changes.',
    time: '2 hours ago',
    unread: 2,
    status: 'Active',
  },
  {
    id: 'fintech-app',
    name: 'FinFlow Dashboard',
    lastMessage: 'The new dashboard looks great. When can we schedule a review?',
    time: '1 day ago',
    unread: 0,
    status: 'Active',
  },
  {
    id: 'sustainable-fashion',
    name: 'EcoThread Platform',
    lastMessage: 'I\'ve uploaded the brand guidelines to the shared folder.',
    time: '3 days ago',
    unread: 0,
    status: 'Active',
  },
];

const messages = [
  {
    id: 1,
    sender: 'You',
    message: 'Hi team, I\'ve reviewed the latest mockups and they look fantastic! Just a few minor adjustments needed on the color palette.',
    time: '10:30 AM',
    isOwn: true,
  },
  {
    id: 2,
    sender: 'Studio Nova',
    message: 'Thanks for the feedback! We\'ll incorporate those changes and have the updated version ready by tomorrow.',
    time: '11:15 AM',
    isOwn: false,
  },
  {
    id: 3,
    sender: 'You',
    message: 'Perfect! Also, can we schedule a call next week to discuss the next phase?',
    time: '11:45 AM',
    isOwn: true,
  },
  {
    id: 4,
    sender: 'Studio Nova',
    message: 'Absolutely! How about Wednesday at 2 PM? I\'ll send a calendar invite.',
    time: '12:00 PM',
    isOwn: false,
  },
];

export default function PortalMessages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0].id);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-h2">Messages</h1>
          <p className="text-data text-[var(--muted)]">Communicate with your project team</p>
        </div>
        <Link to="/portal" className="btn--ghost">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Messages Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <div className="space-y-2">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full text-left p-4 border-2 transition-all ${
                  selectedConversation === conv.id
                    ? 'border-[var(--safety)] bg-[var(--safety)]/5'
                    : 'border-[var(--ink)]/10 hover:border-[var(--safety)]/50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-data font-semibold">{conv.name}</h3>
                  {conv.unread > 0 && (
                    <Tag variant="safety">{conv.unread}</Tag>
                  )}
                </div>
                <p className="text-micro text-[var(--muted)] mb-2 line-clamp-2">
                  {conv.lastMessage}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-micro text-[var(--muted)]">{conv.time}</span>
                  <Tag variant="ghost">{conv.status}</Tag>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="lg:col-span-2">
          <BentoCard>
            {/* Thread Header */}
            <div className="pb-4 border-b border-[var(--ink)]/10 mb-4">
              <h2 className="text-h3 mb-1">
                {conversations.find(c => c.id === selectedConversation)?.name}
              </h2>
              <p className="text-micro text-[var(--muted)]">
                Active conversation • 4 messages
              </p>
            </div>

            {/* Messages */}
            <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-4 ${
                      msg.isOwn
                        ? 'bg-[var(--safety)] text-[var(--ink)]'
                        : 'bg-[var(--surface)]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-micro font-semibold">
                        {msg.sender}
                      </span>
                      <span className="text-micro opacity-70">{msg.time}</span>
                    </div>
                    <p className="text-data">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="border-t border-[var(--ink)]/10 pt-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border-2 border-[var(--ink)]/10 bg-transparent focus:border-[var(--safety)] outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="btn--primary"
                  disabled={!newMessage.trim()}
                >
                  Send →
                </button>
              </div>
              <p className="text-micro text-[var(--muted)] mt-2">
                Press Enter to send • Messages are monitored during business hours
              </p>
            </form>
          </BentoCard>

          {/* Info */}
          <div className="bento-card bento-card--dark mt-4">
            <h3 className="text-h3 mb-2">Response Time</h3>
            <p className="text-data text-[var(--muted)]">
              Our team typically responds within 2-4 hours during business hours (9 AM - 6 PM PST, Monday - Friday).
              For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
