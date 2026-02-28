import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  Video, 
  LogOut, 
  Plus, 
  Eye, 
  EyeOff, 
  X, 
  Save 
} from 'lucide-react';
import { VaultItem, VideoInfo } from '../../types';

interface AdminPanelProps {
  user: any;
  onLogout: () => void;
}

export default function AdminPanel({ user, onLogout }: AdminPanelProps) {
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
