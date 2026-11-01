import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Heart, BookOpen, MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useApp();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed! Thank you for joining our solidarity circle.');
    setEmailInput('');
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-lg">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                bombay<span className="text-amber-500 font-light">circle</span>
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              An inclusive library café founded on the principle that love and dignity belong to everyone. Run by youth who once lived on Mumbai's streets, serving authentic Spanish tapas, Mumbai comforts, and over 10,000 donated books.
            </p>
            <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60 text-xs italic text-amber-200/90 font-serif">
              "Life is Life: I am Because of You. Remove the 'you' and I am nothing."
              <span className="block not-italic text-stone-400 font-sans mt-1 text-[11px]">
                — Amin Sheikh, Founder
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-500 font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Welcome &amp; Ethos
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-amber-400 transition-colors">
                  Our Story &amp; Founder
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-400 transition-colors">
                  Food &amp; Tapas Menu
                </Link>
              </li>
              <li>
                <Link to="/library" className="hover:text-amber-400 transition-colors">
                  The Library of 10,000 Books
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-amber-400 transition-colors">
                  "Life is Life" Autobiography
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors">
                  Photo &amp; Moment Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Solidarity & Impact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-500 font-bold mb-4">
              Solidarity &amp; Visit
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/support" className="hover:text-amber-400 transition-colors">
                  Sponsor an Apprentice
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-amber-400 transition-colors">
                  Cupcakes for Street Children
                </Link>
              </li>
              <li>
                <Link to="/library" className="hover:text-amber-400 transition-colors">
                  Donate Books
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Table Reservations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Location &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-amber-500 font-bold mb-4">
              Visit Us
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>Timmy Arcade, 778, Makwana Rd, Gamdevi, Marol, Andheri East, Mumbai 400059</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Tue – Sun: 10:00 AM – 10:45 PM<br />(Mondays Closed)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-stone-400">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>+91 77384 46788</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-stone-400">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span>contact@bombaycircle.org</span>
            </div>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <label htmlFor="newsletter-email" className="block text-[11px] font-semibold text-stone-400 mb-1">
                Newsletter &amp; Stories
              </label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-stone-800 text-stone-100 text-xs px-3 py-2 rounded-l-lg border border-stone-700 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-r-lg text-xs font-semibold transition-colors flex items-center justify-center shrink-0"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom copyright and GitHub user credit */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-stone-300 font-semibold">bombaycircle</span>. Inspired by Bombay to Barcelona Library Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Maintained by <span className="text-amber-400 font-mono">@Aman22kr</span></span>
            <span>•</span>
            <span>Solidarity &amp; Hope</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-stone-300">Privacy &amp; Respect</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
