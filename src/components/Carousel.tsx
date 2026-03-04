import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  activeColor?: string;
}

export default function Carousel<T>({ 
  items, 
  renderItem, 
  activeColor = 'bg-amber-primary'
}: CarouselProps<T>) {
  const [visibleItems, setVisibleItems] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative group w-full">
      <div className="overflow-hidden py-8">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            // Move by exactly one item width (1/visibleItems of the container width)
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div 
              key={i} 
              className="flex-none px-3"
              style={{ width: `${100 / visibleItems}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prev}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center transition-all z-10 shadow-xl 
          ${currentIndex === 0 
            ? 'opacity-20 cursor-not-allowed grayscale pointer-events-none' 
            : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-2 hover:bg-surface-hover'}`}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        disabled={currentIndex >= maxIndex}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center transition-all z-10 shadow-xl 
          ${currentIndex >= maxIndex 
            ? 'opacity-20 cursor-not-allowed grayscale pointer-events-none' 
            : 'opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 hover:bg-surface-hover'}`}
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
