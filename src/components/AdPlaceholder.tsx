import React from 'react';

interface AdPlaceholderProps {
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-5xl mx-auto px-4 my-8 ${className}`}>
      <div className="relative border border-stone-200 bg-stone-50/70 rounded-xl p-4 text-center overflow-hidden transition-all hover:bg-stone-50">
        <span className="inline-block text-[10px] font-medium tracking-wider uppercase text-stone-400 mb-1">
          Advertisement Space
        </span>
        <div className="h-14 sm:h-16 flex items-center justify-center border border-dashed border-stone-200 rounded-lg bg-white/60">
          <p className="text-xs sm:text-sm text-stone-500 font-sans">
            Support Community Independent Spaces • Sponsored Partner Notice
          </p>
        </div>
      </div>
    </div>
  );
};
