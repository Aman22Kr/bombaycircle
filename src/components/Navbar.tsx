import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Coffee, 
  BookOpen, 
  Heart, 
  Search, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { orderCount, favorites, setIsOrderDrawerOpen, setIsSearchOpen } = useApp();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Menu', path: '/menu' },
    { name: 'Library', path: '/library' },
    { name: 'The Book', path: '/book' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Support Us', path: '/support' },
    { name: 'Visit & Contact', path: '/contact' }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Solidarity Banner */}
      <div className="bg-amber-900 text-amber-100 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>A 100% solidarity project run with dignity by former street youth in Mumbai</span>
        <Link 
          to="/support" 
          className="underline font-semibold hover:text-white transition-colors ml-1 hidden sm:inline"
        >
          Learn more &rarr;
        </Link>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Identity */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-none"
              onClick={closeMobileMenu}
            >
              <div className="w-11 h-11 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20 group-hover:bg-amber-700 transition-all transform group-hover:scale-105">
                <Coffee className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                  bombay<span className="text-amber-600 font-light">circle</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-500">
                  The Library Café &amp; Books
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-amber-700 bg-amber-50 font-semibold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                title="Search menu, books, and story"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Favorites & Table Order Drawer Toggle */}
              <button
                onClick={() => setIsOrderDrawerOpen(true)}
                className="relative p-2.5 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors flex items-center gap-1.5"
                title="Table Order Draft & Saved Favorites"
                aria-label="Table Order Draft"
              >
                <ShoppingBag className="w-5 h-5 text-amber-700" />
                {orderCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                    {orderCount}
                  </span>
                )}
                <span className="hidden sm:inline text-xs font-semibold text-stone-700">
                  {orderCount > 0 ? `${orderCount} items` : 'Table Order'}
                </span>
              </button>

              {/* Table Booking Shortcut Button */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-stone-900 text-stone-50 hover:bg-amber-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Reserve Table</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-stone-50 shadow-2xl flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-xl font-bold text-stone-900">
                    bombay<span className="text-amber-600 font-light">circle</span>
                  </span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-amber-100/80 text-amber-900 font-semibold'
                          : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-3">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-amber-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Reserve a Table</span>
              </Link>
              <div className="text-center text-xs text-stone-500">
                <p>Timmy Arcade, Makwana Rd, Marol, Mumbai</p>
                <p className="mt-0.5">Tue - Sun: 10:00 AM - 10:45 PM</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
