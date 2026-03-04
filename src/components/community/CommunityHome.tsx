import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../../types';

interface CommunityHomeProps {
  onNavigate: (s: Section) => void;
}

export default function CommunityHome({ onNavigate }: CommunityHomeProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      {/* Section 1: Header */}
      <div className="mb-24 text-center">
        <h1 className="font-serif text-6xl font-bold mb-6">Community</h1>
        <p className="text-text-muted text-xl max-w-2xl mx-auto font-light">
          A space to shape ideas and reflect on what resonates.
        </p>
      </div>

      {/* Section 2: Two Premium Tiles */}
      <div className="grid md:grid-cols-2 gap-8 mb-32">
        <motion.div 
          whileHover={{ y: -5 }}
          onClick={() => onNavigate('community-topics')}
          className="p-12 rounded-3xl bg-surface border border-border cursor-pointer transition-all hover:border-amber-primary/30 group"
        >
          <h2 className="text-3xl font-bold mb-4">Contribute to the vault</h2>
          <p className="text-text-muted text-lg mb-8 leading-relaxed">
            Have a topic you’d like explored? Add it to the list and help shape what’s built next.
          </p>
          <div className="text-amber-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
            Submit a Topic <ArrowRight size={20} />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          onClick={() => onNavigate('community-guestbook')}
          className="p-12 rounded-3xl bg-surface border border-border cursor-pointer transition-all hover:border-blue-primary/30 group"
        >
          <h2 className="text-3xl font-bold mb-4">Join the Conversation</h2>
          <p className="text-text-muted text-lg mb-8 leading-relaxed">
            If something clicked, share what popped for you and add your voice to the wall.
          </p>
          <div className="text-blue-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
            Add your voice <ArrowRight size={20} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
