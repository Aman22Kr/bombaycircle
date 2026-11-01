import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Heart, Check, Star, Download, Send, Coffee } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const BookPage: React.FC = () => {
  const { showToast } = useApp();

  const [orderName, setOrderName] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderCopies, setOrderCopies] = useState(1);
  const [orderLanguage, setOrderLanguage] = useState('English');
  const [orderDelivery, setOrderDelivery] = useState('pickup');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleBookOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderName || !orderEmail) {
      showToast('Please provide your name and email');
      return;
    }
    setOrderSuccess(true);
    showToast(`Book request received! We will coordinate your ${orderCopies} copy.`);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-800/80 border border-amber-600/70 text-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>The Autobiography That Built a Sanctuary</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold leading-tight">
              Life is Life:<br /><span className="text-amber-400 italic">I am Because of You</span>
            </h1>

            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-xl">
              Written by Amin Sheikh without formal schooling, this raw and radiant memoir was sold copy by copy to fund the opening of bombaycircle. Every single royalty goes toward college tuition and vocational training for former street youth.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#order-section"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Order Your Copy (₹350)
              </a>
              <Link
                to="/story"
                className="bg-amber-900/60 hover:bg-amber-900 text-amber-100 border border-amber-700 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Read Founder Story &rarr;
              </Link>
            </div>
          </div>

          {/* Book Mockup Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs w-full bg-amber-900 rounded-2xl shadow-2xl p-6 border-2 border-amber-700/80 text-amber-100 space-y-4">
              <div className="w-full aspect-3/4 rounded-xl overflow-hidden bg-stone-900 shadow-lg border border-amber-600/50">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                  alt="Life is Life book cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-serif text-lg font-bold text-white">Life is Life</h3>
                <p className="text-xs text-amber-300">by Amin Sheikh</p>
                <div className="flex justify-center text-amber-400 text-xs gap-1 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-amber-200/70 pt-1">Over 25,000 copies sold worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters & Themes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
            Inside The Pages
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            A Journey of Raw Honesty and Unshakable Faith
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Part I</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">The Railway Platforms</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Surviving alone at age five on Dadar station—learning where to hide, who to trust, and the painful realities of homelessness.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Part II</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">The Gift of Barcelona</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              How mentor Eustace Fernandez’s unconditional kindness and a transformative journey to Catalonia sparked the dream of a classless cafe.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Part III</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Building the Circle</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Writing the book word by word, selling copies on the streets, overcoming bureaucratic rejections, and welcoming our first street youth home.
            </p>
          </div>
        </div>
      </section>

      {/* Excerpt Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 rounded-3xl p-8 sm:p-12 border border-stone-200 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Selected Excerpt
          </span>
          <p className="font-serif text-lg sm:text-xl italic text-stone-800 leading-relaxed">
            "People always ask me why I wanted to start a cafe instead of an NGO. I tell them: when you go to an NGO, people look at you with sympathy and pity. When you walk into a vibrant cafe, order a hot coffee and patatas bravas, and sit with a book, you are treated as an equal human being. Pity divides us; a shared cup of coffee unites us."
          </p>
          <span className="block text-xs font-bold text-stone-600 font-sans tracking-wide">
            — Amin Sheikh, Chapter 9: The Philosophy of the Table
          </span>
        </div>
      </section>

      {/* Order / Inquiry Section */}
      <section id="order-section" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Request or Reserve a Copy
            </h3>
            <p className="text-xs text-stone-500">
              Available at the cafe or shipped across India &amp; internationally.
            </p>
          </div>

          {orderSuccess ? (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center space-y-3">
              <Check className="w-10 h-10 text-amber-600 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-amber-900">
                Order Received!
              </h4>
              <p className="text-xs text-amber-800">
                Thank you for supporting our youth fund. Our team will contact {orderEmail} shortly with tracking / pickup details.
              </p>
              <button
                onClick={() => setOrderSuccess(false)}
                className="text-xs font-semibold text-amber-700 underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookOrder} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={orderEmail}
                    onChange={(e) => setOrderEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Language Edition</label>
                  <select
                    value={orderLanguage}
                    onChange={(e) => setOrderLanguage(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish (Español)</option>
                    <option value="Hindi">Hindi (हिंदी)</option>
                    <option value="Marathi">Marathi (मराठी)</option>
                    <option value="Catalan">Catalan (Català)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Copies</label>
                  <select
                    value={orderCopies}
                    onChange={(e) => setOrderCopies(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value={1}>1 copy (₹350)</option>
                    <option value={2}>2 copies (₹700)</option>
                    <option value={5}>5 copies (₹1,750)</option>
                    <option value={10}>10 copies (₹3,500)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Delivery Method</label>
                  <select
                    value={orderDelivery}
                    onChange={(e) => setOrderDelivery(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="pickup">Pick up at Cafe</option>
                    <option value="courier-india">Courier (India)</option>
                    <option value="courier-intl">International Post</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900">
                100% of proceeds fund higher education and vocational apprentice stipends for former street youth.
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Book Request</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
