import React from 'react';
import { Difficulty } from '../../types';

export default function DifficultyBadge({ level }: { level: Difficulty }) {
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
