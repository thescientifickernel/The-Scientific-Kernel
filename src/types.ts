export type Section = 'home' | 'vault' | 'lab' | 'community' | 'about' | 'kernel-detail' | 'lab-detail' | 'community-topics' | 'community-guestbook';

export type Difficulty = 'Sprout' | 'Kernel' | 'Fully Popped';

export interface VideoInfo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  category: string;
  publishedAt: string;
}

export interface VaultItem {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: Difficulty;
  readTime: string;
  content: string;
  publishedAt: string;
}

export interface GuestbookEntry {
  id: number;
  name: string;
  location: string;
  quote: string;
  created_at: string;
}

export interface TopicSuggestion {
  id: number;
  title: string;
  description: string;
  votes: number;
  created_at: string;
}
