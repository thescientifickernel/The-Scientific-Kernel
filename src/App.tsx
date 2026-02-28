import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  FlaskConical, 
  Users, 
  Info, 
  ChevronRight, 
  Play, 
  MessageSquare, 
  BookMarked,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Search,
  ThumbsUp,
  Clock,
  Tag,
  ArrowLeft
} from 'lucide-react';
import { Section, VaultItem, VideoInfo, GuestbookEntry, TopicSuggestion, Difficulty } from './types';
import { POP_EXPLAINERS, KERNEL_VAULT } from './constants';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import Carousel from './components/Carousel';
import StatsStrip from './components/StatsStrip';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedKernel, setSelectedKernel] = useState<VaultItem | null>(null);
  const [selectedLab, setSelectedLab] = useState<VideoInfo | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'vault', label: 'Kernel Vault', icon: BookOpen },
    { id: 'lab', label: 'Pop Lab', icon: FlaskConical },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavigate = (section: Section, data?: any) => {
    if (section === 'kernel-detail') {
      setSelectedKernel(data);
    } else if (section === 'lab-detail') {
      setSelectedLab(data);
    }
    setActiveSection(section);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-bg text-text-main selection:bg-amber-primary/30">
      <ScrollToTop />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-primary/10 border border-amber-primary/20 group-hover:border-amber-primary/40 transition-colors">
              <span className="text-2xl">🍿</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              The <span className="text-amber-primary">Scientific</span> Kernel
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id as Section)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-amber-primary ${
                  activeSection === link.id ? 'text-amber-primary' : 'text-text-muted'
                }`}
              >
                {link.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              className="text-text-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    handleNavigate(link.id as Section);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-4 text-2xl font-serif"
                >
                  <link.icon className="text-amber-primary" />
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <Home onNavigate={handleNavigate} />}
          {activeSection === 'vault' && <Vault onNavigate={handleNavigate} />}
          {activeSection === 'lab' && <Lab onNavigate={handleNavigate} />}
          {activeSection === 'community' && <Community />}
          {activeSection === 'about' && <About />}
          {activeSection === 'kernel-detail' && selectedKernel && (
            <KernelDetail item={selectedKernel} onBack={() => handleNavigate('vault')} />
          )}
          {activeSection === 'lab-detail' && selectedLab && (
            <LabDetail video={selectedLab} onBack={() => handleNavigate('lab')} onNavigate={handleNavigate} />
          )}
        </AnimatePresence>
      </main>

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
            <a href="#" className="hover:text-amber-primary transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DifficultyBadge({ level }: { level: Difficulty }) {
  const colors = {
    'Sprout': 'bg-green-500/10 text-green-500 border-green-500/20',
    'Kernel': 'bg-amber-primary/10 text-amber-primary border-amber-primary/20',
    'Fully Popped': 'bg-blue-primary/10 text-blue-primary border-blue-primary/20'
  };
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${colors[level]}`}>
      {level}
    </span>
  );
}

function Home({ onNavigate }: { onNavigate: (s: Section, data?: any) => void }) {
  const recentKernels = useMemo(() => [...KERNEL_VAULT].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 5), []);
  const recentVideos = useMemo(() => [...POP_EXPLAINERS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 5), []);

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
              className="p-8 rounded-2xl bg-surface border border-border hover:border-amber-primary/30 transition-all cursor-pointer h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl">🌽</span>
                <DifficultyBadge level={item.difficulty} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-primary transition-colors">{item.title}</h3>
              <p className="text-text-muted text-sm mb-8 flex-1 line-clamp-3">{item.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
                  <span className="flex items-center gap-1"><Clock size={12} /> {item.readTime}</span>
                  <span className="flex items-center gap-1"><Tag size={12} /> {item.category}</span>
                </div>
                <span className="text-amber-primary font-bold text-sm">Read now →</span>
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

      <GuestbookSection />
    </motion.div>
  );
}

function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    fetch('/api/guestbook').then(res => res.json()).then(setEntries);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl font-bold mb-4">Guestbook</h2>
        <p className="text-text-muted text-lg">See what the community is saying about the kernel.</p>
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
        <button className="px-8 py-4 bg-surface border border-border text-text-main font-bold rounded-lg hover:bg-surface-hover transition-all">
          Sign the Guestbook
        </button>
      </div>
    </section>
  );
}

function Vault({ onNavigate }: { onNavigate: (s: Section, data?: any) => void }) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', ...new Set(KERNEL_VAULT.map(k => k.category))];

  const filtered = KERNEL_VAULT.filter(k => {
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
            className="group p-8 rounded-2xl bg-surface border border-border hover:border-amber-primary/30 transition-all cursor-pointer flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl">🌽</span>
              <DifficultyBadge level={item.difficulty} />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-primary transition-colors">{item.title}</h3>
            <p className="text-text-muted text-sm mb-8 flex-1 leading-relaxed">{item.description}</p>
            <div className="flex items-center gap-4 text-xs text-text-muted font-mono mb-6">
              <span className="flex items-center gap-1"><Clock size={12} /> {item.readTime}</span>
              <span className="flex items-center gap-1"><Tag size={12} /> {item.category}</span>
            </div>
            <span className="text-amber-primary font-bold text-sm">Read now →</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Lab({ onNavigate }: { onNavigate: (s: Section, data?: any) => void }) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', ...new Set(POP_EXPLAINERS.map(v => v.category))];

  const filtered = POP_EXPLAINERS.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = activeTag === 'All' || v.category === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="font-serif text-5xl font-bold mb-4">Pop Lab</h1>
        <p className="text-text-muted text-xl max-w-2xl">Bite-sized video explainers on pharmaceutical science - Sit back. Press play. Watch science pop.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input 
            type="text" 
            placeholder="Search through pop explainers..." 
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
                activeTag === tag ? 'bg-blue-primary text-white border-blue-primary' : 'bg-surface text-text-muted border-border hover:border-blue-primary/30'
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
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Play fill="white" size={32} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-[10px] font-mono text-blue-primary mb-2 uppercase tracking-widest">{video.category}</div>
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
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

function KernelDetail({ item, onBack }: { item: VaultItem, onBack: () => void }) {
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

      {/* Sticky Sub-nav */}
      <div className="sticky top-20 z-30 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto no-scrollbar">
          {['Overview', 'Deep Dive', 'Summary'].map((tab) => (
            <button key={tab} className="py-4 text-sm font-bold uppercase tracking-widest text-text-muted hover:text-amber-primary border-b-2 border-transparent hover:border-amber-primary transition-all">
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.content }} />
      </div>
    </motion.div>
  );
}

function LabDetail({ video, onBack, onNavigate }: { video: VideoInfo, onBack: () => void, onNavigate: (s: Section, data?: any) => void }) {
  const relatedKernel = KERNEL_VAULT.find(k => k.category === video.category);

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
        ></iframe>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="text-xs font-mono text-blue-primary mb-4 uppercase tracking-widest">{video.category}</div>
          <h1 className="font-serif text-4xl font-bold mb-6">{video.title}</h1>
          <p className="text-xl text-text-muted leading-relaxed mb-8">{video.description}</p>
        </div>

        <div>
          {relatedKernel && (
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-bold mb-4 flex items-center gap-2"><BookOpen size={18} className="text-amber-primary" /> Related Kernel</h3>
              <div className="text-sm font-bold mb-2">{relatedKernel.title}</div>
              <p className="text-xs text-text-muted mb-6 line-clamp-2">{relatedKernel.description}</p>
              <button 
                onClick={() => onNavigate('kernel-detail', relatedKernel)}
                className="w-full py-3 bg-amber-primary/10 border border-amber-primary/20 text-amber-primary text-xs font-bold rounded-lg hover:bg-amber-primary/20 transition-all"
              >
                Read Guide
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Community() {
  const [topics, setTopics] = useState<TopicSuggestion[]>([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const fetchTopics = () => fetch('/api/topics').then(res => res.json()).then(setTopics);

  useEffect(() => { fetchTopics(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    await fetch('/api/topics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description: desc })
    });
    setTitle(''); setDesc(''); fetchTopics();
  };

  const handleVote = async (id: number) => {
    await fetch(`/api/topics/${id}/vote`, { method: 'POST' });
    fetchTopics();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="font-serif text-5xl font-bold mb-4">Community</h1>
        <p className="text-text-muted text-xl max-w-2xl">Join the conversation. Suggest topics, leave your mark, and help us expand the kernel.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="p-8 rounded-2xl bg-surface border border-border sticky top-32">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><MessageSquare className="text-amber-primary" /> Suggest a Topic</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">Topic Title *</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-bg border border-border rounded-xl focus:outline-none focus:border-amber-primary/50"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">Description</label>
                <textarea 
                  className="w-full p-4 bg-bg border border-border rounded-xl focus:outline-none focus:border-amber-primary/50 h-32"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full py-4 bg-amber-primary text-bg font-bold rounded-xl hover:bg-amber-light transition-all">
                Submit Suggestion
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-8">Community Suggestions</h2>
          <div className="space-y-4">
            {topics.map(topic => (
              <div key={topic.id} className="p-6 rounded-2xl bg-surface border border-border flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{topic.description}</p>
                </div>
                <button 
                  onClick={() => handleVote(topic.id)}
                  className="flex flex-col items-center gap-1 p-3 rounded-xl bg-bg border border-border hover:border-amber-primary/50 transition-all group"
                >
                  <ThumbsUp size={20} className="text-text-muted group-hover:text-amber-primary transition-colors" />
                  <span className="text-sm font-bold">{topic.votes}</span>
                </button>
              </div>
            ))}
            {topics.length === 0 && <div className="text-center py-12 text-text-muted italic">No suggestions yet. Be the first!</div>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function About() {
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
