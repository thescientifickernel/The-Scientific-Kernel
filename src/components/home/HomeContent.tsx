  import React, { useMemo } from 'react';
  import { motion } from 'motion/react';
  import { ArrowRight, Play, Clock } from 'lucide-react';
  import { Section, VaultItem, VideoInfo } from '../../types';
  import Carousel from '../Carousel';
  import StatsStrip from '../StatsStrip';
  import DifficultyBadge from '../common/DifficultyBadge';
  import GuestbookSection from './GuestbookSection';

  interface HomeContentProps {
    onNavigate: (s: Section, data?: any) => void;
    guides: VaultItem[];
    videos: VideoInfo[];
  }

  export default function HomeContent({ onNavigate, guides, videos }: HomeContentProps) {
    const recentKernels = useMemo(() => [...guides].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 6), [guides]);
    const recentVideos = useMemo(() => [...videos].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 6), [videos]);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-primary/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-primary/10 border border-amber-primary/20 text-amber-primary text-xs font-mono uppercase tracking-widest mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-amber-primary animate-pulse" />
              Where Science Pops into Understanding
            </motion.div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              The Journey of a <span className="italic text-amber-primary">Kernel</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-12 max-w-2xl">
              Pharmaceutical science explained simply — from molecule to patient care, one kernel at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate('vault')} className="px-8 py-4 bg-amber-primary text-bg font-bold rounded-lg hover:bg-amber-light transition-all flex items-center gap-2 shadow-lg shadow-amber-primary/20">
                Explore the Kernel Vault <ArrowRight size={18} />
              </button>
              <button onClick={() => onNavigate('lab')} className="px-8 py-4 bg-surface border border-border text-text-main font-bold rounded-lg hover:bg-surface-hover transition-all flex items-center gap-2">
                Visit Pop Lab <Play size={18} fill="currentColor" />
              </button>
            </div>
          </div>
        </section>

        {/* Popcorn Analogy Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-bg-alt to-bg border border-border p-12 flex flex-col items-center justify-center shadow-2xl">
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[120px] mb-8 drop-shadow-2xl"
                >
                  🍿
                </motion.div>
                <div className="font-serif text-3xl italic text-amber-primary tracking-tight">The Expansion Philosophy</div>
              </div>
              
              {/* Floating Status Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 w-56 bg-surface border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="text-[10px] font-mono text-amber-primary mb-2 uppercase tracking-[0.2em] font-bold">Current Status</div>
                <div className="text-xl font-bold mb-4">Kernel Active</div>
                <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-amber-primary"
                  />
                </div>
              </motion.div>
            </div>
            
            <div>
              <h2 className="font-serif text-5xl font-bold mb-8 leading-tight">
                The <span className="text-amber-primary italic">Popcorn</span> Analogy
              </h2>
              <p className="text-text-muted text-xl leading-relaxed mb-10">
                Every complex idea in pharmaceutical science begins as a kernel — a core foundational concept. Under the right conditions (context, logic, and clarity), that kernel expands into full understanding.
              </p>
              <ul className="space-y-8">
                {[
                  { title: "The Kernel", desc: "The drug substance or core molecule.", icon: "🌽" },
                  { title: "The Heat", desc: "The regulatory and scientific context.", icon: "🔥" },
                  { title: "The Pop", desc: "The moment science becomes clear.", icon: "✨" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-surface-hover flex items-center justify-center text-2xl shrink-0 border border-border group-hover:border-amber-primary/30 transition-all shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-main mb-1">{item.title}</h3>
                      <p className="text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Kernel Carousel */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl font-bold">From the Kernel Vault</h2>
            <button onClick={() => onNavigate('vault')} className="text-amber-primary font-bold flex items-center gap-2 hover:underline">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <Carousel 
            items={recentKernels}
            renderItem={(item: VaultItem) => (
              <div 
                onClick={() => onNavigate('kernel-detail', item)}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-amber-primary/30 transition-all cursor-pointer h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <DifficultyBadge level={item.difficulty} />
                  <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-wider">
                    <Clock size={10} /> {item.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-primary transition-colors leading-tight">{item.title}</h3>
                <p className="text-text-muted text-xs mb-6 flex-1 line-clamp-3 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-[10px] font-mono text-amber-primary uppercase tracking-widest">{item.category}</span>
                  <span className="text-amber-primary font-bold text-xs">Read now →</span>
                </div>
              </div>
            )}
          />
        </section>

        <StatsStrip />

        {/* Pop Lab Carousel */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl font-bold">From the Pop Lab</h2>
            <button onClick={() => onNavigate('lab')} className="text-blue-primary font-bold flex items-center gap-2 hover:underline">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <Carousel 
            items={recentVideos}
            activeColor="bg-blue-primary"
            renderItem={(video: VideoInfo) => (
              <div 
                onClick={() => onNavigate('lab-detail', video)}
                className="rounded-2xl overflow-hidden bg-surface border border-border hover:border-blue-primary/30 transition-all cursor-pointer h-full flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Play fill="white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-[10px] font-mono text-blue-primary mb-2 uppercase tracking-widest">{video.category}</div>
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-text-muted text-sm mb-6 line-clamp-2">{video.description}</p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <span className="text-blue-primary font-bold text-sm">Watch now →</span>
                  </div>
                </div>
              </div>
            )}
          />
        </section>

        <GuestbookSection onNavigate={onNavigate} />
      </motion.div>
    );
  }
