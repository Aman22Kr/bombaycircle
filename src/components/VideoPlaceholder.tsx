import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  duration?: string;
  aspectRatio?: '16/9' | '4/3';
  className?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'TEDx Talk & Documentary: The Story of bombaycircle',
  duration = '14:20',
  aspectRatio = '16/9',
  className = ''
}) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 shadow-xl ${className}`}>
      {/* Aspect Ratio Box */}
      <div
        className="w-full relative flex items-center justify-center bg-stone-900 select-none"
        style={{ aspectRatio: aspectRatio === '16/9' ? '16 / 9' : '4 / 3' }}
      >
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-900 to-stone-800 opacity-90" />
        
        {/* Blank placeholder center motif */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-500 shadow-inner mb-4 transition-transform hover:scale-105">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-amber-500/30" />
          </div>
          <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-1">
            Video Presentation Area
          </span>
          <p className="text-stone-300 font-serif text-sm sm:text-base max-w-md line-clamp-2">
            {title}
          </p>
          <span className="mt-2 text-[11px] text-stone-500 bg-stone-800/80 px-2.5 py-0.5 rounded-full">
            Duration: {duration} • Media Archival Placeholder
          </span>
        </div>

        {/* Video Player Control Bar Replica at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-4 text-xs text-stone-400">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <span className="text-[11px]">00:00 / {duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-1 bg-stone-700 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-amber-500" />
            </div>
            <span className="text-[10px] tracking-wide text-stone-400 uppercase">HD 1080p</span>
          </div>
        </div>
      </div>
    </div>
  );
};
