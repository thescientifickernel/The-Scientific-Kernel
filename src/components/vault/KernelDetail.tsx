import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { VaultItem } from '../../types';
import DifficultyBadge from '../common/DifficultyBadge';

interface KernelDetailProps {
  item: VaultItem;
  onBack: () => void;
}

export default function KernelDetail({ item, onBack }: KernelDetailProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
      <div className="bg-surface border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-amber-primary transition-colors mb-8 font-bold">
            <ArrowLeft size={16} /> Back to Vault
          </button>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <DifficultyBadge level={item.difficulty} />
            <span className="text-text-muted text-sm font-mono uppercase tracking-widest">{item.category}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">{item.title}</h1>
          <p className="text-xl text-text-muted max-w-3xl leading-relaxed">{item.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.content }} />
      </div>
    </motion.div>
  );
}
