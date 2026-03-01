import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ThumbsUp } from 'lucide-react';
import { TopicSuggestion } from '../../types';

interface CommunityTopicsProps {
  onBack: () => void;
}

export default function CommunityTopics({ onBack }: CommunityTopicsProps) {
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
            <div className="text-center py-24 bg-surface rounded-3xl border border-border text-text-muted italic">
              No topics suggested yet. Be the first to shape the vault.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
