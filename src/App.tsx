import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  FlaskConical, 
  Users, 
  Info
} from 'lucide-react';
import { Section, VaultItem, VideoInfo } from './types';
import ScrollToTop from './components/ScrollToTop';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/home/HomeContent';
import Vault from './components/vault/VaultList';
import Lab from './components/lab/LabList';
import Community from './components/community/CommunityHome';
import CommunityTopics from './components/community/CommunityTopics';
import CommunityGuestbook from './components/community/CommunityGuestbook';
import About from './components/about/AboutContent';
import AdminPanel from './components/admin/AdminPanel';
import KernelDetail from './components/vault/KernelDetail';
import LabDetail from './components/lab/LabDetail';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedKernel, setSelectedKernel] = useState<VaultItem | null>(null);
  const [selectedLab, setSelectedLab] = useState<VideoInfo | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [guides, setGuides] = useState<VaultItem[]>([]);
  const [videos, setVideos] = useState<VideoInfo[]>([]);

  useEffect(() => {
    fetch('/api/auth/me').then(res => res.json()).then(data => setUser(data.user));
    fetchData();
  }, []);

  const fetchData = async () => {
    const [gRes, vRes] = await Promise.all([
      fetch('/api/guides'),
      fetch('/api/videos')
    ]);
    const [gData, vData] = await Promise.all([gRes.json(), vRes.json()]);
    setGuides(gData);
    setVideos(vData);
  };

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

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        fetch('/api/auth/me').then(res => res.json()).then(data => setUser(data.user));
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-main selection:bg-amber-primary/30">
      <ScrollToTop />
      
      <Navbar 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        user={user}
        handleNavigate={handleNavigate}
        navLinks={navLinks}
      />

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <Home onNavigate={handleNavigate} guides={guides} videos={videos} />}
          {activeSection === 'vault' && <Vault onNavigate={handleNavigate} guides={guides} />}
          {activeSection === 'lab' && <Lab onNavigate={handleNavigate} videos={videos} />}
          {activeSection === 'community' && <Community onNavigate={handleNavigate} />}
          {activeSection === 'community-topics' && <CommunityTopics onBack={() => handleNavigate('community')} />}
          {activeSection === 'community-guestbook' && <CommunityGuestbook onBack={() => handleNavigate('community')} />}
          {activeSection === 'about' && <About />}
          {activeSection === 'admin' && user && <AdminPanel user={user} onLogout={() => setUser(null)} />}
          {activeSection === 'kernel-detail' && selectedKernel && (
            <KernelDetail item={selectedKernel} onBack={() => handleNavigate('vault')} />
          )}
          {activeSection === 'lab-detail' && selectedLab && (
            <LabDetail video={selectedLab} onBack={() => handleNavigate('lab')} onNavigate={handleNavigate} guides={guides} />
          )}
        </AnimatePresence>
      </main>

      <Footer />
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

function Home({ onNavigate, guides, videos }: { onNavigate: (s: Section, data?: any) => void, guides: VaultItem[], videos: VideoInfo[] }) {
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
        <button 
          onClick={() => onNavigate('community')}
          className="px-8 py-4 bg-surface border border-border text-text-main font-bold rounded-lg hover:bg-surface-hover transition-all"
        >
          Sign the Guestbook
        </button>
      </div>
    </section>
  );
}

function Vault({ onNavigate, guides }: { onNavigate: (s: Section, data?: any) => void, guides: VaultItem[] }) {
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

function Lab({ onNavigate, videos }: { onNavigate: (s: Section, data?: any) => void, videos: VideoInfo[] }) {
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

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.content }} />
      </div>
    </motion.div>
  );
}

function LabDetail({ video, onBack, onNavigate, guides }: { video: VideoInfo, onBack: () => void, onNavigate: (s: Section, data?: any) => void, guides: VaultItem[] }) {
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
            Sign the Guestbook <ArrowRight size={20} />
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
          If something clicked, we’d love to hear what popped for you.
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
                Sign the Guestbook
              </button>
              <AnimatePresence>
                {guestbookSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-blue-primary font-medium"
                  >
                    Thank you for sharing your voice.
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
            <p className="text-text-muted text-lg mb-2">The first message sets the tone.</p>
            <p className="font-bold text-text-main">Be the first to share what popped for you.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function AdminPanel({ user, onLogout }: { user: any, onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'guides' | 'videos'>('dashboard');
  const [metrics, setMetrics] = useState<any>(null);
  const [guides, setGuides] = useState<VaultItem[]>([]);
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchMetrics();
    fetchAdminData();
  }, []);

  const fetchMetrics = async () => {
    const res = await fetch('/api/admin/metrics');
    if (res.ok) setMetrics(await res.json());
  };

  const fetchAdminData = async () => {
    const [gRes, vRes] = await Promise.all([
      fetch('/api/admin/guides'),
      fetch('/api/admin/videos')
    ]);
    if (gRes.ok) setGuides(await gRes.json());
    if (vRes.ok) setVideos(await vRes.json());
  };

  const handleSaveGuide = async (guide: any) => {
    setIsSaving(true);
    const res = await fetch('/api/admin/guides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guide)
    });
    if (res.ok) {
      setEditingItem(null);
      fetchAdminData();
    }
    setIsSaving(false);
  };

  const handleSaveVideo = async (video: any) => {
    setIsSaving(true);
    const res = await fetch('/api/admin/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(video)
    });
    if (res.ok) {
      setEditingItem(null);
      fetchAdminData();
    }
    setIsSaving(false);
  };

  const togglePublishGuide = async (id: string, current: boolean) => {
    const res = await fetch(`/api/admin/guides/${id}/publish`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_published: !current })
    });
    if (res.ok) fetchAdminData();
  };

  const togglePublishVideo = async (id: string, current: boolean) => {
    const res = await fetch(`/api/admin/videos/${id}/publish`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_published: !current })
    });
    if (res.ok) fetchAdminData();
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    onLogout();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full border-2 border-amber-primary p-1">
            <img src={user.picture} alt={user.name} className="w-full h-full rounded-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold italic">Admin Dashboard</h1>
            <p className="text-text-muted">Welcome back, {user.name}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-xl hover:border-red-500/30 transition-colors text-text-muted hover:text-red-500"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="flex gap-4 mb-8 border-b border-border pb-4 overflow-x-auto">
        {[
          { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
          { id: 'guides', label: 'Kernel Vault', icon: FileText },
          { id: 'videos', label: 'Pop Lab', icon: Video },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
              activeTab === tab.id 
                ? 'bg-amber-primary text-bg font-bold shadow-lg shadow-amber-primary/20' 
                : 'text-text-muted hover:bg-surface'
            }`}
          >
            <tab.icon size={18} /> {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'dashboard' && metrics && (
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-8 bg-surface border border-border rounded-3xl">
            <div className="text-text-muted text-sm uppercase tracking-widest mb-2">Total Visits</div>
            <div className="text-4xl font-serif font-bold text-amber-primary">{metrics.totalVisits}</div>
          </div>
          <div className="p-8 bg-surface border border-border rounded-3xl">
            <div className="text-text-muted text-sm uppercase tracking-widest mb-2">Unique Visitors</div>
            <div className="text-4xl font-serif font-bold text-amber-primary">{metrics.uniqueVisitors}</div>
          </div>
          <div className="p-8 bg-surface border border-border rounded-3xl">
            <div className="text-text-muted text-sm uppercase tracking-widest mb-2">Topic Votes</div>
            <div className="text-4xl font-serif font-bold text-amber-primary">{metrics.totalVotes}</div>
          </div>
          <div className="p-8 bg-surface border border-border rounded-3xl">
            <div className="text-text-muted text-sm uppercase tracking-widest mb-2">Guestbook Entries</div>
            <div className="text-4xl font-serif font-bold text-amber-primary">{metrics.totalGuestbook}</div>
          </div>
        </div>
      )}

      {activeTab === 'guides' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Manage Guides</h2>
            <button 
              onClick={() => setEditingItem({ type: 'guide', id: `guide-${Date.now()}`, title: '', category: 'Drug Development', description: '', difficulty: 'Kernel', readTime: '10 min', publishedAt: new Date().toISOString().split('T')[0], content: '', is_published: 1 })}
              className="flex items-center gap-2 px-6 py-3 bg-amber-primary text-bg font-bold rounded-xl hover:scale-105 transition-transform"
            >
              <Plus size={18} /> New Guide
            </button>
          </div>
          <div className="grid gap-4">
            {guides.map(guide => (
              <div key={guide.id} className="p-6 bg-surface border border-border rounded-2xl flex items-center justify-between group hover:border-amber-primary/30 transition-all">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${guide.is_published ? 'bg-amber-primary/10 text-amber-primary' : 'bg-text-muted/10 text-text-muted'}`}>
                    {guide.is_published ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{guide.title}</h3>
                    <p className="text-sm text-text-muted">{guide.category} • {guide.readTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => togglePublishGuide(guide.id, !!guide.is_published)}
                    className="p-3 bg-bg border border-border rounded-xl hover:border-amber-primary/30 transition-colors"
                    title={guide.is_published ? 'Unpublish' : 'Publish'}
                  >
                    {guide.is_published ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  <button 
                    onClick={() => setEditingItem({ ...guide, type: 'guide' })}
                    className="px-6 py-3 bg-bg border border-border rounded-xl hover:border-amber-primary/30 transition-colors font-bold"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Manage Videos</h2>
            <button 
              onClick={() => setEditingItem({ type: 'video', id: `video-${Date.now()}`, title: '', url: '', thumbnail: '', description: '', category: 'Drug Development', publishedAt: new Date().toISOString().split('T')[0], is_published: 1 })}
              className="flex items-center gap-2 px-6 py-3 bg-amber-primary text-bg font-bold rounded-xl hover:scale-105 transition-transform"
            >
              <Plus size={18} /> New Video
            </button>
          </div>
          <div className="grid gap-4">
            {videos.map(video => (
              <div key={video.id} className="p-6 bg-surface border border-border rounded-2xl flex items-center justify-between group hover:border-amber-primary/30 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-16 rounded-lg overflow-hidden border border-border">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{video.title}</h3>
                    <p className="text-sm text-text-muted">{video.category} • {video.publishedAt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => togglePublishVideo(video.id, !!video.is_published)}
                    className="p-3 bg-bg border border-border rounded-xl hover:border-amber-primary/30 transition-colors"
                    title={video.is_published ? 'Unpublish' : 'Publish'}
                  >
                    {video.is_published ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  <button 
                    onClick={() => setEditingItem({ ...video, type: 'video' })}
                    className="px-6 py-3 bg-bg border border-border rounded-xl hover:border-amber-primary/30 transition-colors font-bold"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit Modal */}
      <AnimatePresence>
        {editingItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
              onClick={() => setEditingItem(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-surface border border-border rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-8 border-b border-border flex items-center justify-between bg-bg/50">
                <h2 className="text-2xl font-serif font-bold italic">
                  {editingItem.type === 'guide' ? 'Edit Kernel Guide' : 'Edit Pop Lab Video'}
                </h2>
                <button onClick={() => setEditingItem(null)} className="p-2 hover:bg-bg rounded-lg transition-colors">
                  <X />
                </button>
              </div>

              <div className="p-8 overflow-y-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Title</label>
                    <input 
                      type="text" 
                      value={editingItem.title}
                      onChange={e => setEditingItem({ ...editingItem, title: e.target.value })}
                      className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Category</label>
                    <input 
                      type="text" 
                      value={editingItem.category}
                      onChange={e => setEditingItem({ ...editingItem, category: e.target.value })}
                      className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                {editingItem.type === 'video' ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted">YouTube URL</label>
                      <input 
                        type="text" 
                        value={editingItem.url}
                        onChange={e => setEditingItem({ ...editingItem, url: e.target.value })}
                        className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Thumbnail URL</label>
                      <input 
                        type="text" 
                        value={editingItem.thumbnail}
                        onChange={e => setEditingItem({ ...editingItem, thumbnail: e.target.value })}
                        className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Difficulty</label>
                      <select 
                        value={editingItem.difficulty}
                        onChange={e => setEditingItem({ ...editingItem, difficulty: e.target.value })}
                        className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors"
                      >
                        <option>Sprout</option>
                        <option>Kernel</option>
                        <option>Fully Popped</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Read Time</label>
                      <input 
                        type="text" 
                        value={editingItem.readTime}
                        onChange={e => setEditingItem({ ...editingItem, readTime: e.target.value })}
                        className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Published Date</label>
                      <input 
                        type="date" 
                        value={editingItem.publishedAt}
                        onChange={e => setEditingItem({ ...editingItem, publishedAt: e.target.value })}
                        className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Description</label>
                  <textarea 
                    value={editingItem.description}
                    onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}
                    className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors h-24 resize-none"
                  />
                </div>

                {editingItem.type === 'guide' && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Content (HTML)</label>
                    <textarea 
                      value={editingItem.content}
                      onChange={e => setEditingItem({ ...editingItem, content: e.target.value })}
                      className="w-full px-6 py-4 bg-bg border border-border rounded-2xl focus:border-amber-primary outline-none transition-colors h-64 font-mono text-sm"
                    />
                  </div>
                )}
              </div>

              <div className="p-8 border-t border-border bg-bg/50 flex justify-end gap-4">
                <button 
                  onClick={() => setEditingItem(null)}
                  className="px-8 py-4 bg-surface border border-border rounded-2xl font-bold hover:bg-bg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => editingItem.type === 'guide' ? handleSaveGuide(editingItem) : handleSaveVideo(editingItem)}
                  disabled={isSaving}
                  className="px-8 py-4 bg-amber-primary text-bg font-bold rounded-2xl shadow-xl shadow-amber-primary/20 hover:scale-105 transition-transform flex items-center gap-2 disabled:opacity-50"
                >
                  <Save size={18} /> {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
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
