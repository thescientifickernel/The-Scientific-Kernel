import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookMarked, ChevronRight } from 'lucide-react';
import { Section, VideoInfo, VaultItem } from '../../types';

interface LabDetailProps {
  video: VideoInfo;
  onBack: () => void;
  onNavigate: (s: Section, data?: any) => void;
  guides: VaultItem[];
}

export default function LabDetail({ video, onBack, onNavigate, guides }: LabDetailProps) {
  const relatedKernel = guides.find(k => k.category === video.category);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-5xl mx-auto px-6 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-blue-primary transition-colors mb-8 font-bold">
        <ArrowLeft size={16} /> Back to Lab
      </button>

      <div className="aspect-video rounded-3xl overflow-hidden bg-black mb-12 shadow-2xl">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${video.id}`} 
          title={video.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="text-xs font-mono text-blue-primary mb-4 uppercase tracking-[0.2em] font-bold">{video.category}</div>
          <h1 className="font-serif text-4xl font-bold mb-6">{video.title}</h1>
          <p className="text-xl text-text-muted leading-relaxed mb-8">{video.description}</p>
        </div>

        <div className="space-y-8">
          {relatedKernel && (
            <div className="p-8 rounded-3xl bg-surface border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-primary/10 flex items-center justify-center text-amber-primary mb-6">
                  <BookMarked size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Related Kernel</h3>
                <p className="text-sm text-text-muted mb-6">Deepen your understanding with the companion guide for this topic.</p>
                <button 
                  onClick={() => onNavigate('kernel-detail', relatedKernel)}
                  className="w-full py-4 bg-amber-primary text-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  Read Guide <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
