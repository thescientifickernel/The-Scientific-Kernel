import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { GuestbookEntry } from '../../types';

interface CommunityGuestbookProps {
  onBack: () => void;
}

export default function CommunityGuestbook({ onBack }: CommunityGuestbookProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [guestbookSubmitted, setGuestbookSubmitted] = useState(false);
  const [gbName, setGbName] = useState('');
  const [gbLocation, setGbLocation] = useState('');
  const [gbMessage, setGbMessage] = useState('');

  const fetchEntries = () => fetch('/api/guestbook').then(res => res.json()).then(setEntries);

  useEffect(() => { 
    fetchEntries();
  }, []);

  const handleGuestbookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gbName.trim() || !gbLocation.trim() || !gbMessage.trim()) return;
    if (gbMessage.length < 15) {
      alert("Message must be at least 15 characters.");
      return;
    }
    const res = await fetch('/api/guestbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: gbName, location: gbLocation, quote: gbMessage })
    });
    if (res.ok) {
      setGbName(''); setGbLocation(''); setGbMessage(''); 
      setGuestbookSubmitted(true);
      setTimeout(() => setGuestbookSubmitted(false), 5000);
      fetchEntries();
    } else {
      const data = await res.json();
      alert(data.error || "Failed to sign guestbook.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-blue-primary transition-colors mb-12 font-bold group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Community
      </button>

      <div className="text-center mb-20">
        <h2 className="font-serif text-5xl font-bold mb-6">Join the Conversation</h2>
        <p className="text-text-muted text-xl max-w-2xl mx-auto font-light">
          If something clicked, we’d love to hear what popped for you.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-32">
        <div className="p-10 rounded-3xl bg-surface border border-border shadow-sm">
          <form onSubmit={handleGuestbookSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-text-main mb-3">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-blue-primary/50 transition-all text-lg"
                  value={gbName}
                  onChange={(e) => setGbName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-main mb-3">Location *</label>
                <input 
                  type="text" 
                  placeholder="City, Country"
                  className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-blue-primary/50 transition-all text-lg"
                  value={gbLocation}
                  onChange={(e) => setGbLocation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-text-main mb-3">What popped for you? *</label>
              <textarea 
                placeholder="Share your thoughts..."
                className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-blue-primary/50 transition-all h-40 text-lg resize-none"
                value={gbMessage}
                onChange={(e) => setGbMessage(e.target.value)}
                required
              />
              <p className="text-xs text-text-muted mt-3 ml-1">Keep it thoughtful and constructive.</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="px-10 py-5 bg-blue-primary text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-primary/10">
                Sign the Guestbook
              </button>
              <AnimatePresence>
                {guestbookSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-blue-primary font-medium"
                  >
                    Thank you for sharing your voice.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entries.map((entry) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={entry.id} 
            className="p-10 rounded-3xl bg-surface border border-border italic relative group hover:border-blue-primary/20 transition-all"
          >
            <span className="text-5xl text-blue-primary/10 absolute top-6 left-6 font-serif">"</span>
            <p className="text-text-main mb-8 relative z-10 leading-relaxed text-lg">{entry.quote}</p>
            <div className="not-italic flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-primary/10 flex items-center justify-center text-blue-primary font-bold text-sm">
                {entry.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-text-main">{entry.name}</div>
                <div className="text-xs text-text-muted uppercase tracking-widest">{entry.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
        {entries.length === 0 && (
          <div className="col-span-full text-center py-32 bg-surface border border-border border-dashed rounded-3xl">
            <p className="text-text-muted text-lg mb-2">The first message sets the tone.</p>
            <p className="font-bold text-text-main">Be the first to share what popped for you.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
