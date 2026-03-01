import React, { useState, useEffect, useMemo, useRef } from 'react';
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
          {activeSection === 'community' && <Community onNavigate={handleNavigate} />}
          {activeSection === 'community-topics' && <CommunityTopics onBack={() => handleNavigate('community')} />}
          {activeSection === 'community-guestbook' && <CommunityGuestbook onBack={() => handleNavigate('community')} />}
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
            <a href="https://www.youtube.com/channel/UC3H6Cr59so5OAKgIueIZXGg" target="_blank" rel="noopener noreferrer" className="hover:text-amber-primary transition-colors">YouTube</a>
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
  const recentKernels = useMemo(() => [...KERNEL_VAULT].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 6), []);
  const recentVideos = useMemo(() => [...POP_EXPLAINERS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 6), []);

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
              <div className="font-serif text-3xl italic text-amber-primary tracking-tight">The Popcorn Analogy</div>
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
              Every complex idea in pharmaceutical science begins as a kernel — a core foundational concept. Through the right environment and context, that kernel pops into a complete understanding of the drug lifecycle.
            </p>
            <ul className="space-y-8">
              {[
                { title: "The Kernel", desc: "The drug substance or core molecular target.", icon: "🍿" },
                { title: "The Context", desc: "The regulatory and scientific framework.", icon: "📋" },
                { title: "The Pop", desc: "The moment science becomes actionable knowledge.", icon: "✨" }
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
          activeColor="bg-amber-primary"
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

function GuestbookSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    fetch('/api/guestbook').then(res => res.json()).then(setEntries);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl font-bold mb-4">Join the Conversation</h2>
        <p className="text-text-muted text-lg">See what the community is reflecting on.</p>
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
        <button 
          onClick={() => onNavigate('community-guestbook')}
          className="text-amber-primary font-bold text-xl flex items-center gap-2 mx-auto hover:gap-3 transition-all group"
        >
          Add your voice <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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
        <p className="text-text-muted text-xl max-w-2xl">Bite-sized video explainers on pharmaceutical science - Sit back. Press play. Watch science expand.</p>
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

function Community({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const topicSectionRef = useRef<HTMLElement>(null);
  const guestbookSectionRef = useRef<HTMLElement>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      {/* Section 1: Header */}
      <div className="mb-24 text-center">
        <h1 className="font-serif text-6xl font-bold mb-6">Community</h1>
        <p className="text-text-muted text-xl max-w-2xl mx-auto font-light">
          A space to shape ideas and reflect on what popped for you.
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
            If something popped for you, share it and add your voice to the wall.
          </p>
          <div className="text-amber-primary font-bold text-lg flex items-center gap-2 group-hover:gap-4 transition-all">
            Add your voice <ArrowRight size={20} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CommunityTopics({ onBack }: { onBack: () => void }) {
  const [topics, setTopics] = useState<TopicSuggestion[]>([]);
  const [topicFilter, setTopicFilter] = useState<'voted' | 'recent'>('voted');
  const [topicSubmitted, setTopicSubmitted] = useState(false);
  const [topicTitle, setTopicTitle] = useState('');
  const [topicDesc, setTopicDesc] = useState('');
  const [votedTopics, setVotedTopics] = useState<number[]>([]);

  const fetchTopics = () => fetch('/api/topics').then(res => res.json()).then(setTopics);

  useEffect(() => { 
    fetchTopics(); 
    const saved = localStorage.getItem('voted_topics');
    if (saved) setVotedTopics(JSON.parse(saved));
  }, []);

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (topicTitle.trim().length < 5) {
      alert("Topic title must be at least 5 characters.");
      return;
    }
    await fetch('/api/topics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: topicTitle, description: topicDesc })
    });
    setTopicTitle(''); setTopicDesc(''); 
    setTopicSubmitted(true);
    setTimeout(() => setTopicSubmitted(false), 5000);
    fetchTopics();
  };

  const handleVote = async (id: number) => {
    if (votedTopics.includes(id)) {
      alert("You have already voted for this topic.");
      return;
    }
    const res = await fetch(`/api/topics/${id}/vote`, { method: 'POST' });
    if (res.ok) {
      const newVoted = [...votedTopics, id];
      setVotedTopics(newVoted);
      localStorage.setItem('voted_topics', JSON.stringify(newVoted));
      fetchTopics();
    } else {
      const data = await res.json();
      alert(data.error || "Failed to record vote.");
    }
  };

  const sortedTopics = useMemo(() => {
    return [...topics].sort((a, b) => {
      if (topicFilter === 'voted') return b.votes - a.votes;
      return new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime();
    });
  }, [topics, topicFilter]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-amber-primary transition-colors mb-12 font-bold group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Community
      </button>

      <div className="max-w-3xl mx-auto mb-24">
        <div className="p-10 rounded-3xl bg-surface border border-border shadow-sm">
          <h2 className="text-3xl font-bold mb-8">Contribute to the vault</h2>
          <form onSubmit={handleTopicSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-text-main mb-3">Topic Title *</label>
              <input 
                type="text" 
                placeholder="e.g. The role of AI in clinical trials"
                className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-amber-primary/50 transition-all text-lg"
                value={topicTitle}
                onChange={(e) => setTopicTitle(e.target.value)}
                required
              />
              <p className="text-xs text-text-muted mt-3 ml-1">Keep it concise — 5–10 words works best.</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-text-main mb-3">Why this matters (Optional)</label>
              <textarea 
                placeholder="Briefly explain the impact of this topic..."
                className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-amber-primary/50 transition-all h-32 text-lg resize-none"
                value={topicDesc}
                onChange={(e) => setTopicDesc(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="px-10 py-5 bg-amber-primary text-bg font-bold rounded-2xl hover:bg-amber-light transition-all shadow-lg shadow-amber-primary/10">
                Submit Topic
              </button>
              <AnimatePresence>
                {topicSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-amber-primary font-medium"
                  >
                    Your idea has been added to the Community list.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold">Most Requested Topics</h2>
          <div className="flex p-1 bg-surface border border-border rounded-xl">
            <button 
              onClick={() => setTopicFilter('voted')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${topicFilter === 'voted' ? 'bg-bg text-text-main shadow-sm' : 'text-text-muted hover:text-text-main'}`}
            >
              Most Voted
            </button>
            <button 
              onClick={() => setTopicFilter('recent')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${topicFilter === 'recent' ? 'bg-bg text-text-main shadow-sm' : 'text-text-muted hover:text-text-main'}`}
            >
              Most Recent
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {sortedTopics.map(topic => (
            <motion.div 
              layout
              key={topic.id} 
              className="p-8 rounded-3xl bg-surface border border-border flex items-center justify-between gap-8 group hover:border-amber-primary/20 transition-all"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                {topic.description && <p className="text-text-muted leading-relaxed">{topic.description}</p>}
              </div>
              <div className="flex items-center gap-6">
                <div className="px-4 py-2 rounded-full bg-bg border border-border text-sm font-mono font-bold">
                  {topic.votes}
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleVote(topic.id)}
                  disabled={votedTopics.includes(topic.id)}
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all group/btn ${votedTopics.includes(topic.id) ? 'bg-amber-primary/10 border-amber-primary/30 text-amber-primary cursor-default' : 'bg-bg border-border hover:border-amber-primary/50 hover:bg-amber-primary/5'}`}
                >
                  <ThumbsUp size={24} className={votedTopics.includes(topic.id) ? 'text-amber-primary' : 'text-text-muted group-hover/btn:text-amber-primary'} />
                </motion.button>
              </div>
            </motion.div>
          ))}
          {topics.length === 0 && (
            <div className="text-center py-24 bg-surface border border-border border-dashed rounded-3xl">
              <p className="text-text-muted text-lg mb-2">No topics suggested yet.</p>
              <p className="font-bold text-text-main">Be the first to shape the next Kernel.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CommunityGuestbook({ onBack }: { onBack: () => void }) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [guestbookSubmitted, setGuestbookSubmitted] = useState(false);
  const [gbName, setGbName] = useState('');
  const [gbLocation, setGbLocation] = useState('');
  const [gbMessage, setGbMessage] = useState('');

  const fetchEntries = () => fetch('/api/guestbook').then(res => res.json()).then(setEntries);

  useEffect(() => { 
    fetchEntries();
  }, []);

  const handleGuestbookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gbName.trim() || !gbLocation.trim() || !gbMessage.trim()) return;
    if (gbMessage.length < 15) {
      alert("Message must be at least 15 characters.");
      return;
    }
    const res = await fetch('/api/guestbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: gbName, location: gbLocation, quote: gbMessage })
    });
    if (res.ok) {
      setGbName(''); setGbLocation(''); setGbMessage(''); 
      setGuestbookSubmitted(true);
      setTimeout(() => setGuestbookSubmitted(false), 5000);
      fetchEntries();
    } else {
      const data = await res.json();
      alert(data.error || "Failed to sign guestbook.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-blue-primary transition-colors mb-12 font-bold group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Community
      </button>

      <div className="text-center mb-20">
        <h2 className="font-serif text-5xl font-bold mb-6">Join the Conversation</h2>
        <p className="text-text-muted text-xl max-w-2xl mx-auto font-light">
          If something popped for you, we’d love to hear it.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-32">
        <div className="p-10 rounded-3xl bg-surface border border-border shadow-sm">
          <form onSubmit={handleGuestbookSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-text-main mb-3">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-blue-primary/50 transition-all text-lg"
                  value={gbName}
                  onChange={(e) => setGbName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-main mb-3">Location *</label>
                <input 
                  type="text" 
                  placeholder="City, Country"
                  className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-blue-primary/50 transition-all text-lg"
                  value={gbLocation}
                  onChange={(e) => setGbLocation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-text-main mb-3">What popped for you? *</label>
              <textarea 
                placeholder="Share your thoughts..."
                className="w-full p-5 bg-bg border border-border rounded-2xl focus:outline-none focus:border-blue-primary/50 transition-all h-40 text-lg resize-none"
                value={gbMessage}
                onChange={(e) => setGbMessage(e.target.value)}
                required
              />
              <p className="text-xs text-text-muted mt-3 ml-1">Keep it thoughtful and constructive.</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="px-10 py-5 bg-blue-primary text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-primary/10">
                Share your reflection
              </button>
              <AnimatePresence>
                {guestbookSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-blue-primary font-medium"
                  >
                    Thank you for sharing what popped for you.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entries.map((entry) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={entry.id} 
            className="p-10 rounded-3xl bg-surface border border-border italic relative group hover:border-blue-primary/20 transition-all"
          >
            <span className="text-5xl text-blue-primary/10 absolute top-6 left-6 font-serif">"</span>
            <p className="text-text-main mb-8 relative z-10 leading-relaxed text-lg">{entry.quote}</p>
            <div className="not-italic flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-primary/10 flex items-center justify-center text-blue-primary font-bold text-sm">
                {entry.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-text-main">{entry.name}</div>
                <div className="text-xs text-text-muted uppercase tracking-widest">{entry.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
        {entries.length === 0 && (
          <div className="col-span-full text-center py-32 bg-surface border border-border border-dashed rounded-3xl">
            <p className="text-text-muted text-lg mb-2">The first kernel sets the tone.</p>
            <p className="font-bold text-text-main">Be the first to share what popped for you.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8">
            Demystifying the <span className="italic text-amber-primary">Life Sciences</span> Journey
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            Modern drug development is a complex "language" of acronyms and intricate frameworks. The Scientific Kernel is a platform that makes this logic visible by starting with core principles—the "kernels"—and expanding them into clear, navigable knowledge.
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              The Scientific Kernel was born from a simple observation: the pharmaceutical industry is one of the most complex in the world, yet the logic that holds it together is rarely explained simply.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              We believe that knowledge should be accessible, not gatekept. By using clear, structured frameworks, we reveal the hidden structures of drug development, CMC, and regulatory systems.
            </p>
          </div>
          <div className="relative p-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-amber-primary/10 to-transparent blur-3xl -z-10"></div>
            <div className="absolute top-0 right-0 text-[12rem] text-amber-primary/10 font-serif leading-none select-none">”</div>
            <blockquote className="relative z-10 text-center">
              <p className="font-serif text-3xl md:text-5xl italic text-text-main leading-tight mb-6">
                “To turn complexity into clarity across the Life Sciences industry, one kernel at a time.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">The <span className="italic text-amber-primary">Kernel to Care</span> Methodology</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Our structured approach to making complex pharmaceutical concepts accessible.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Start with the Kernel",
              desc: "Every complex pharmaceutical concept begins with a core, foundational idea. We identify that core before building outward.",
              icon: "💎"
            },
            {
              title: "Expand with Context",
              desc: "Core ideas expand into full understanding when provided with heat, logic, and structure. We provide the missing pieces.",
              icon: "✨"
            },
            {
              title: "Full-Spectrum Coverage",
              desc: "We explore the entire journey from discovery and CMC to regulatory systems and patient care, showing how it all connects.",
              icon: "🌈"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-surface border border-border hover:border-amber-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two Ways to Learn Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="p-10 rounded-3xl bg-surface border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif group-hover:scale-110 transition-transform">Vault</div>
            <div className="w-16 h-16 rounded-2xl bg-amber-primary/10 border border-amber-primary/20 flex items-center justify-center text-3xl mb-8">
              <BookOpen className="text-amber-primary" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-6">The <span className="italic text-amber-primary">Kernel Vault</span></h3>
            <p className="text-xl font-bold mb-4 text-text-main">Written Depth</p>
            <p className="text-text-muted leading-relaxed">
              A library of structured written guides where topics are explored through deep, connected thinking. Perfect for those who want to master the technical details and regulatory nuances.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-surface border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif group-hover:scale-110 transition-transform">Lab</div>
            <div className="w-16 h-16 rounded-2xl bg-blue-primary/10 border border-blue-primary/20 flex items-center justify-center text-3xl mb-8">
              <FlaskConical className="text-blue-primary" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-6">The <span className="italic text-blue-primary">Pop Lab</span></h3>
            <p className="text-xl font-bold mb-4 text-text-main">Visual Clarity</p>
            <p className="text-text-muted leading-relaxed">
              Concise "Pop Explainer" videos designed to help complex ideas land quickly and memorably. Ideal for high-level overviews and visual learners who want to see the science in motion.
            </p>
          </div>
        </div>
      </section>

      {/* Who It’s For Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Who It’s For</h2>
          <p className="text-xl text-text-muted">Built for ambitious minds shaping the future of pharma.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              role: 'Students entering pharma', 
              desc: 'Build foundational understanding from the very first principles of drug development.',
              icon: '🎓'
            },
            { 
              role: 'Professionals in transition', 
              desc: 'Navigate new roles with clarity by understanding how systems and disciplines connect.',
              icon: '🔄'
            },
            { 
              role: 'Scientists broadening scope', 
              desc: 'Expand beyond your specialism and see the full picture of the life sciences journey.',
              icon: '🔬'
            },
            { 
              role: 'Digital leaders', 
              desc: 'Understand the science behind the systems you\'re modernising and transforming.',
              icon: '💻'
            },
            { 
              role: 'Regulatory professionals', 
              desc: 'Connect the regulatory logic to the broader drug development context it operates within.',
              icon: '📋'
            },
            { 
              role: 'The curious', 
              desc: 'Anyone who wants to understand how medicines truly move from concept to patient.',
              icon: '🌍'
            }
          ].map(item => (
            <div key={item.role} className="p-8 rounded-2xl bg-surface border border-border hover:border-amber-primary/30 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.role}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-border text-center">
        <p className="text-text-muted italic">
          Built by someone who works in pharma and believes knowledge should be shared freely.
        </p>
      </section>
    </motion.div>
  );
}
