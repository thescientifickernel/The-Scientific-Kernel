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
  const relatedKernels = guides.filter(k => k.category === video.category);

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

      <div className="mb-12">
        <div className="text-xs font-mono text-blue-primary mb-4 uppercase tracking-[0.2em] font-bold">{video.category}</div>
        <h1 className="font-serif text-4xl font-bold mb-6">{video.title}</h1>
        <p className="text-xl text-text-muted leading-relaxed mb-8">{video.description}</p>
      </div>

      {relatedKernels.length > 0 && (
        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
            <BookMarked size={24} className="text-amber-primary" /> 
            Related Kernels
          </h3>
          <div className="flex flex-col gap-4">
            {relatedKernels.map((kernel) => (
              <div 
                key={kernel.id}
                className="group p-6 rounded-2xl bg-surface border border-border hover:border-amber-primary/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono text-amber-primary uppercase tracking-widest">{kernel.category}</span>
                  </div>
                  <h4 className="text-xl font-bold group-hover:text-amber-primary transition-colors">{kernel.title}</h4>
                  <p className="text-text-muted text-sm line-clamp-1 mt-1">{kernel.description}</p>
                </div>
                <button 
                  onClick={() => onNavigate('kernel-detail', kernel)}
                  className="px-6 py-3 bg-amber-primary/10 border border-amber-primary/20 text-amber-primary text-sm font-bold rounded-xl hover:bg-amber-primary/20 transition-all whitespace-nowrap flex items-center gap-2"
                >
                  Read Guide <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
