import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoRotate?: boolean;
  interval?: number;
  activeColor?: string;
}

export default function Carousel<T>({ 
  items, 
  renderItem, 
  autoRotate = false, 
  interval = 5000,
  activeColor = 'bg-amber-primary'
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleItems);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (autoRotate && !isPaused) {
      timerRef.current = setInterval(next, interval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoRotate, isPaused, items.length, maxIndex]);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden py-8">
        <div 
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            width: `${(items.length / visibleItems) * 100}%` 
          }}
        >
          {items.map((item, i) => (
            <div 
              key={i} 
              style={{ width: `${100 / items.length}%` }}
              className="px-1"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10 shadow-lg hover:bg-surface-hover"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10 shadow-lg hover:bg-surface-hover"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === i ? `${activeColor} w-6` : 'bg-border'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
