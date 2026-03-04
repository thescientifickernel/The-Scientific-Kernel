import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Section, GuestbookEntry } from '../../types';

interface GuestbookSectionProps {
  onNavigate: (s: Section) => void;
}

export default function GuestbookSection({ onNavigate }: GuestbookSectionProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    fetch('/api/guestbook').then(res => res.json()).then(setEntries);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl font-bold mb-4">Join the Conversation</h2>
        <p className="text-text-muted text-lg">See what the community is reflecting on.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {entries.slice(0, 3).map((entry) => (
          <div key={entry.id} className="p-8 rounded-2xl bg-surface border border-border italic relative">
            <span className="text-4xl text-amber-primary/20 absolute top-4 left-4">"</span>
            <p className="text-text-main mb-6 relative z-10">{entry.quote}</p>
            <div>
              <div className="font-bold text-text-main not-italic">— {entry.name}</div>
              <div className="text-xs text-text-muted not-italic">{entry.location}</div>
            </div>
          </div>
        ))}
        {entries.length === 0 && (
          <div className="col-span-3 text-center py-12 text-text-muted italic">No entries yet. Be the first to sign!</div>
        )}
      </div>

      <div className="text-center">
        <button 
          onClick={() => onNavigate('community-guestbook')}
          className="px-8 py-4 bg-amber-primary text-bg font-bold rounded-lg hover:bg-amber-light transition-all flex items-center gap-2 mx-auto shadow-lg shadow-amber-primary/20 group"
        >
          Add your voice <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
