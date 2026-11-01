import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  Heart, 
  Sparkles, 
  MapPin, 
  Plus, 
  Check, 
  X 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BOOKS_DATA, BOOK_CATEGORIES, LibraryBook } from '../data/booksData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const LibraryPage: React.FC = () => {
  const { bookmarkedBooks, toggleBookBookmark, isBookBookmarked, showToast } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  // Donate Form State
  const [donorName, setDonorName] = useState('');
  const [donorCity, setDonorCity] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [donorNote, setDonorNote] = useState('');
  const [donatedSuccess, setDonatedSuccess] = useState(false);

  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter((book) => {
      if (selectedCategory !== 'all' && book.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = book.title.toLowerCase().includes(q);
        const matchesAuthor = book.author.toLowerCase().includes(q);
        const matchesCity = book.donorCity.toLowerCase().includes(q);
        const matchesNote = book.donorNote.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAuthor && !matchesCity && !matchesNote) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookTitle || !donorName || !donorCity) {
      showToast('Please fill in your name, city, and book title.');
      return;
    }
    setDonatedSuccess(true);
    showToast(`Thank you ${donorName}! Your book pledge has been recorded.`);
    setTimeout(() => {
      setDonatedSuccess(false);
      setIsDonateModalOpen(false);
      setBookTitle('');
      setBookAuthor('');
      setDonorNote('');
    }, 2000);
  };

  return (
    <div className="space-y-12 py-8">
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
          <span>A Living Sanctuary of Written Words</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900">
          The 10,000 Donated Books
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Every shelf in bombaycircle is populated by gifts from travelers, backpackers, neighborhood families, and authors. Inside every book is a handwritten note connecting the previous reader to you.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setIsDonateModalOpen(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Pledge to Donate a Book</span>
          </button>
          <Link
            to="/book"
            className="bg-stone-900 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Read About Amin's Autobiography</span>
          </Link>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, author, or donor city (e.g. Barcelona, Zafón)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-2 text-sm text-stone-900 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="text-xs text-stone-500 font-medium">
            Showing {filteredBooks.length} curated volumes
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {BOOK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white font-semibold shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Book Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => {
            const isSaved = isBookBookmarked(book.id);
            return (
              <div
                key={book.id}
                className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  {/* Cover & Donor Tag */}
                  <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{book.donorCity}</span>
                    </div>

                    <button
                      onClick={() => toggleBookBookmark(book.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-colors shadow-xs ${
                        isSaved
                          ? 'bg-amber-600 text-white'
                          : 'bg-white/90 text-stone-700 hover:text-amber-700'
                      }`}
                      title={isSaved ? 'Remove from wishlist' : 'Save to reading wishlist'}
                      aria-label="Save book"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Author */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                      {book.language}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-900 mt-2 leading-snug group-hover:text-amber-800 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">by {book.author}</p>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2">{book.description}</p>
                  </div>

                  {/* Inscription Note */}
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-950 space-y-1">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wide block">
                      Handwritten Inscription ({book.donorName}):
                    </span>
                    <p className="italic font-serif leading-relaxed text-[11px]">
                      "{book.donorNote}"
                    </p>
                  </div>
                </div>

                {/* Footer status */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Available on Shelf: {book.availableCopies}</span>
                  <span className="text-amber-700 font-semibold">Free to read here</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Donate Book Modal */}
      {isDonateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => setIsDonateModalOpen(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Pledge to Donate a Book
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Whether you are visiting Mumbai or mailing a copy from overseas, we will place your book on our shelves with your handwritten note pasted on the inner sleeve.
              </p>

              <form onSubmit={handleDonateSubmit} className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Elena Ruiz"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your City / Country</label>
                    <input
                      type="text"
                      placeholder="e.g. Madrid, Spain"
                      value={donorCity}
                      onChange={(e) => setDonorCity(e.target.value)}
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Book Title</label>
                    <input
                      type="text"
                      placeholder="e.g. The Alchemist"
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Author</label>
                    <input
                      type="text"
                      placeholder="e.g. Paulo Coelho"
                      value={bookAuthor}
                      onChange={(e) => setBookAuthor(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-stone-700 font-semibold mb-1">
                    Your Inscription Message to Readers
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write a heartfelt note for the next person who opens this book at bombaycircle..."
                    value={donorNote}
                    onChange={(e) => setDonorNote(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={donatedSuccess}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {donatedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Book Pledge Registered!</span>
                    </>
                  ) : (
                    <span>Register My Book Pledge</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
