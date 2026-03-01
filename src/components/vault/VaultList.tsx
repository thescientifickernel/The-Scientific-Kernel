import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Clock } from 'lucide-react';
import { Section, VaultItem } from '../../types';
import DifficultyBadge from '../common/DifficultyBadge';

interface VaultListProps {
  onNavigate: (s: Section, data?: any) => void;
  guides: VaultItem[];
}

export default function VaultList({ onNavigate, guides }: VaultListProps) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', ...new Set(guides.map(k => k.category))];

  const filtered = guides.filter(k => {
    const matchesSearch = k.title.toLowerCase().includes(search.toLowerCase()) || k.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = activeTag === 'All' || k.category === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="font-serif text-5xl font-bold mb-4">Kernel Vault</h1>
        <p className="text-text-muted text-xl max-w-2xl">Clear, practical guides to pharmaceutical concepts from discovery to dispensary.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input 
            type="text" 
            placeholder="Search through guides..." 
            className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-xl focus:outline-none focus:border-amber-primary/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-6 py-4 rounded-xl font-bold whitespace-nowrap transition-all border ${
                activeTag === tag ? 'bg-amber-primary text-bg border-amber-primary' : 'bg-surface text-text-muted border-border hover:border-amber-primary/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onNavigate('kernel-detail', item)}
            className="group p-6 rounded-2xl bg-surface border border-border hover:border-amber-primary/30 transition-all cursor-pointer flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <DifficultyBadge level={item.difficulty} />
              <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-wider">
                <Clock size={10} /> {item.readTime}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-amber-primary transition-colors leading-tight">{item.title}</h3>
            <p className="text-text-muted text-xs mb-6 flex-1 leading-relaxed line-clamp-3">{item.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
              <span className="text-[10px] font-mono text-amber-primary uppercase tracking-widest">{item.category}</span>
              <span className="text-amber-primary font-bold text-xs">Read now →</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
