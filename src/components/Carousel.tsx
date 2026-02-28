import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoRotate?: boolean;
  interval?: number;
}

export default function Carousel<T>({ items, renderItem, autoRotate = true, interval = 5000 }: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (autoRotate && !isPaused) {
      timerRef.current = setInterval(next, interval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoRotate, isPaused, items.length]);

  // Calculate visible items based on screen size
  // For simplicity in this implementation, we'll show 1, 2, or 3 items
  // but the carousel logic here is a simple single-item transition for robustness.
  // We'll wrap the renderItem in a grid for the desktop view.

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden px-4 py-8">
        <div 
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)`, width: `${items.length * 100}%` }}
        >
          {items.map((item, i) => (
            <div key={i} style={{ width: `${100 / items.length}%` }}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === i ? 'bg-amber-primary w-6' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
