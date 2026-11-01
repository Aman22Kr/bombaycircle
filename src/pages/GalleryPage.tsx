import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { X, ZoomIn, Sparkles, Camera } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5 text-amber-700" />
          <span>Moments &amp; Memories</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900">
          Photo Gallery
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Glimpses of life inside bombaycircle—from warm wooden reading corners and sizzling patatas bravas, to joyful Sunday visits from neighborhood street children.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'interior', label: 'Space & Reading Nooks' },
            { id: 'food', label: 'Tapas, Coffee & Churros' },
            { id: 'community', label: 'Community & Outreach' },
            { id: 'books', label: '10,000 Donated Books' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === tab.id
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 relative text-stone-100"
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-black">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-stone-900 space-y-1">
              <h3 className="font-serif text-xl font-bold text-white">{activeItem.title}</h3>
              <p className="text-xs sm:text-sm text-stone-400">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
