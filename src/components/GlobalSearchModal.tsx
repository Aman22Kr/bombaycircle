import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Search, X, Coffee, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { BOOKS_DATA } from '../data/booksData';
import { MILESTONES } from '../data/storyData';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredDishes = trimmed
    ? MENU_ITEMS.filter(
        (m) =>
          m.name.toLowerCase().includes(trimmed) ||
          m.description.toLowerCase().includes(trimmed) ||
          m.category.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : [];

  const filteredBooks = trimmed
    ? BOOKS_DATA.filter(
        (b) =>
          b.title.toLowerCase().includes(trimmed) ||
          b.author.toLowerCase().includes(trimmed) ||
          b.donorCity.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  const filteredMilestones = trimmed
    ? MILESTONES.filter(
        (m) =>
          m.title.toLowerCase().includes(trimmed) ||
          m.description.toLowerCase().includes(trimmed) ||
          m.year.toLowerCase().includes(trimmed)
      ).slice(0, 2)
    : [];

  const handleSelectDish = (id: string) => {
    setIsSearchOpen(false);
    navigate(`/menu/${id}`);
  };

  const handleSelectBook = () => {
    setIsSearchOpen(false);
    navigate('/library');
  };

  const handleSelectStory = () => {
    setIsSearchOpen(false);
    navigate('/story');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-20 flex justify-center items-start animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 bg-stone-50/50">
          <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
          <input
            type="text"
            placeholder="Search tapas, coffees, 10,000 books, or Amin's story..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1 mr-2 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!trimmed ? (
            <div className="py-8 text-center space-y-2">
              <p className="text-sm text-stone-500">Popular searches at bombaycircle:</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Patatas Bravas', 'Café Bonbon', 'Churros', 'Life is Life', 'Snehasadan', 'Spanish Tortilla'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs bg-amber-50 hover:bg-amber-100 text-amber-900 px-3 py-1.5 rounded-full border border-amber-200/80 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <>
              {filteredDishes.length === 0 &&
                filteredBooks.length === 0 &&
                filteredMilestones.length === 0 && (
                  <div className="py-8 text-center text-stone-500 text-sm">
                    No matching menu items, books, or story chapters found for "{query}".
                  </div>
                )}

              {filteredDishes.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>Food &amp; Tapas ({filteredDishes.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {filteredDishes.map((dish) => (
                      <div
                        key={dish.id}
                        onClick={() => handleSelectDish(dish.id)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-100 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-sm font-semibold text-stone-900">{dish.name}</p>
                            <p className="text-xs text-stone-500 line-clamp-1">{dish.description}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-amber-700 shrink-0">₹{dish.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredBooks.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Library Books ({filteredBooks.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {filteredBooks.map((book) => (
                      <div
                        key={book.id}
                        onClick={handleSelectBook}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-100 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-8 h-11 rounded object-cover"
                          />
                          <div>
                            <p className="text-sm font-semibold text-stone-900">{book.title}</p>
                            <p className="text-xs text-stone-500">
                              by {book.author} • Donated from {book.donorCity}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredMilestones.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5" />
                    <span>Story Milestones</span>
                  </h4>
                  <div className="space-y-1.5">
                    {filteredMilestones.map((m) => (
                      <div
                        key={m.year}
                        onClick={handleSelectStory}
                        className="p-2.5 rounded-xl hover:bg-stone-100 cursor-pointer transition-colors"
                      >
                        <span className="text-xs font-bold text-amber-700">{m.year}: </span>
                        <span className="text-sm font-semibold text-stone-900">{m.title}</span>
                        <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">{m.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-stone-50 px-4 py-2.5 border-t border-stone-200 text-xs text-stone-400 flex items-center justify-between">
          <span>Press ESC or click outside to dismiss</span>
          <span>bombaycircle Search Engine</span>
        </div>
      </div>
    </div>
  );
};
