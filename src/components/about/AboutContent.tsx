import React from 'react';
import { motion } from 'motion/react';

export default function AboutContent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="font-serif text-5xl font-bold mb-12">About</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-text-muted leading-relaxed mb-8">
          The Scientific Kernel was born from a simple observation: the pharmaceutical industry is one of the most complex in the world, yet the logic that holds it together is rarely explained simply.
        </p>
        <p className="text-text-muted mb-8">
          We believe that knowledge should be accessible, not gatekept. By using the popcorn analogy, we reveal the hidden structures of drug development, CMC, and regulatory systems.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 my-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">The Expansion Philosophy</h2>
            <p>Every complex idea becomes easier to understand when you begin with its core — the kernel. When that foundation is clear, the rest unfolds naturally.</p>
            <p>The metaphor stuck. Not because it simplifies the science, but because it reveals its structure.</p>
          </div>
          <div className="p-8 rounded-2xl bg-amber-primary/5 border border-amber-primary/20">
            <h3 className="font-serif text-xl font-bold text-amber-primary mb-4 italic">Our Mission</h3>
            <p className="text-text-main italic">"To turn complexity into clarity across the Life Sciences industry, one kernel at a time."</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Who It's For</h2>
        <div className="grid grid-cols-2 gap-4 mb-12">
          {['Students entering pharma', 'Professionals in transition', 'Scientists broadening scope', 'Digital leaders', 'Regulatory professionals', 'The curious'].map(role => (
            <div key={role} className="p-4 rounded-xl bg-surface border border-border text-sm font-bold">{role}</div>
          ))}
        </div>

        <p className="text-text-muted pt-12 border-t border-border">
          Built by someone who works in pharma and believes knowledge should be shared freely.
        </p>
      </div>
    </motion.div>
  );
}
