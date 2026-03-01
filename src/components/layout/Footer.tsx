import React from 'react';
import { Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍿</span>
          <span className="font-serif text-lg font-bold">The Scientific Kernel</span>
        </div>
        <p className="text-text-muted text-sm text-center md:text-left">
          Pharmaceutical science explained simply — from molecule to patient care, one kernel at a time.
        </p>
        <div className="flex gap-6 text-text-muted text-sm">
          <a href="#" className="hover:text-amber-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-amber-primary transition-colors">LinkedIn</a>
          <a href="https://www.youtube.com/channel/UC3H6Cr59so5OAKgIueIZXGg" target="_blank" rel="noopener noreferrer" className="hover:text-amber-primary transition-colors flex items-center gap-2">
            <Video size={14} /> YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
