import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, BookOpen, ArrowLeft, Home } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center px-4 py-16 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-inner">
        <BookOpen className="w-10 h-10" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
          Page 404 • Lost in the Stacks
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
          This Page Has Moved Shelves
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Like a book misplaced in our 10,000 volume library, the route you requested isn't available. Let's guide you back to warmth.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center pt-2">
        <Link
          to="/"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/menu"
          className="bg-stone-900 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
        >
          <Coffee className="w-4 h-4 text-amber-400" />
          <span>Browse Menu</span>
        </Link>
        <Link
          to="/library"
          className="bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
        >
          <span>Explore 10,000 Books</span>
        </Link>
      </div>

      <AdPlaceholder className="pt-8" />
    </div>
  );
};
