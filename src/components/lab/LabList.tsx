import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Play } from 'lucide-react';
import { Section, VideoInfo } from '../../types';

interface LabListProps {
  onNavigate: (s: Section, data?: any) => void;
  videos: VideoInfo[];
}

export default function LabList({ onNavigate, videos }: LabListProps) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', ...new Set(videos.map(v => v.category))];

  const filtered = videos.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = activeTag === 'All' || v.category === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="font-serif text-5xl font-bold mb-4">Pop Lab</h1>
        <p className="text-text-muted text-xl max-w-2xl">Visual explainers and deep dives into the mechanics of medicine.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input 
            type="text" 
            placeholder="Search through videos..." 
            className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-xl focus:outline-none focus:border-blue-primary/50 transition-all"
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
                activeTag === tag ? 'bg-blue-primary text-bg border-blue-primary' : 'bg-surface text-text-muted border-border hover:border-blue-primary/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((video) => (
          <div 
            key={video.id} 
            onClick={() => onNavigate('lab-detail', video)}
            className="group rounded-2xl overflow-hidden bg-surface border border-border hover:border-blue-primary/30 transition-all cursor-pointer flex flex-col"
          >
            <div className="aspect-video relative overflow-hidden">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Play fill="white" size={32} />
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-[10px] font-mono text-blue-primary mb-2 uppercase tracking-widest">{video.category}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-primary transition-colors leading-tight">{video.title}</h3>
              <p className="text-text-muted text-sm mb-6 line-clamp-2 leading-relaxed">{video.description}</p>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="text-blue-primary font-bold text-sm">Watch now →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
