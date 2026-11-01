import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  Star
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data/menuData';
import { BOOKS_DATA } from '../data/booksData';
import { REVIEWS } from '../data/galleryData';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const HomePage: React.FC = () => {
  const { addToOrder, toggleFavorite, isFavorite } = useApp();

  const featuredDishes = MENU_ITEMS.filter((item) => item.isPopular).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/60 via-amber-50/40 to-stone-50 pt-10 pb-16 sm:pb-24 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-200/70 border border-amber-300 text-amber-950 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-2xs">
                <Heart className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
                <span>The Story of Hope, Books &amp; Tapas</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]">
                Where street youth build a future of <span className="text-amber-700 italic">dignity</span>, one coffee at a time.
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to <strong className="font-bold text-stone-900">bombaycircle</strong>—Mumbai’s beloved library café and solidarity initiative. Founded by former street child Amin Sheikh, our space brings authentic Spanish tapas, Mumbai soul food, and over 10,000 global books together under one warm roof.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/menu"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Explore Our Menu</span>
                </Link>
                <Link
                  to="/story"
                  className="bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-2xs text-sm sm:text-base flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <span>Read Amin's Story</span>
                </Link>
                <Link
                  to="/support"
                  className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold px-5 py-3.5 rounded-xl transition-all text-sm sm:text-base flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                  <span>Support Solidarity</span>
                </Link>
              </div>

              {/* Quick stats banner */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-200/60 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">10,000+</span>
                  <span className="text-xs text-stone-500 font-medium">Donated Books</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">100%</span>
                  <span className="text-xs text-stone-500 font-medium">Equal Pay Model</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">50+</span>
                  <span className="text-xs text-stone-500 font-medium">Youth Empowered</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
                    alt="bombaycircle warm library cafe interior"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                      "I am because of you. If you remove the 'you' from my life, I am nothing."
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-3 max-w-xs">
                  <img
                    src="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=200&q=80"
                    alt="Patatas Bravas"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Patatas Bravas</span>
                    <span className="text-[11px] text-amber-700 font-semibold">Barcelona Tapas in Marol</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-amber-600 text-white p-3 rounded-2xl shadow-lg text-xs font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Free Cupcakes for Street Kids</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solidarity Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
            A New Kind of Enterprise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Why bombaycircle is More Than a Café
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Every cup of coffee, plate of patatas bravas, and book you read directly sustains the living wages, housing, and healthcare of young adults who grew up without families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">100% Equal Pay</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every staff member—whether barista, cleaner, baker, or manager—receives identical wages and equal respect.
            </p>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Housing &amp; Healthcare</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Cafe profits pay for safe rented flats and comprehensive health insurance for our entire youth team.
            </p>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Zero Discrimination</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              One of the few cafes in Mumbai where street children, domestic helpers, diplomats, and tourists sit together.
            </p>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Free Food for Street Kids</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Any homeless child who knocks on our door receives warm milk, snacks, and cupcakes with love and zero shame.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tapas & Menu Highlights */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
                Comfort Cuisine
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Spanish Tapas Meets Mumbai Flavors
              </h2>
              <p className="text-stone-600 text-sm mt-2 max-w-xl">
                Freshly prepared daily using genuine recipes passed down from Spanish travelers and Bombay culinary legends.
              </p>
            </div>
            <Link
              to="/menu"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900"
            >
              <span>View Full 20+ Item Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="relative overflow-hidden aspect-4/3">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {dish.dietary === 'veg' ? '🌱 Vegetarian' : dish.dietary === 'vegan' ? '🌿 Vegan' : '🍗 Non-Veg'}
                  </div>
                  <button
                    onClick={() => toggleFavorite(dish.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-xs rounded-full text-stone-700 hover:text-rose-600 transition-colors shadow-xs"
                    title="Save to favorites"
                    aria-label={`Save ${dish.name} to favorites`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorite(dish.id) ? 'text-rose-600 fill-rose-600' : ''
                      }`}
                    />
                  </button>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-bold text-amber-700 text-sm shrink-0">₹{dish.price}</span>
                    </div>
                    {dish.originalName && (
                      <p className="text-[11px] text-stone-500 italic mb-2">{dish.originalName}</p>
                    )}
                    <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <Link
                      to={`/menu/${dish.id}`}
                      className="text-xs text-stone-500 hover:text-stone-900 font-medium"
                    >
                      Details &amp; Story &rarr;
                    </Link>
                    <button
                      onClick={() => addToOrder(dish)}
                      className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      + Add to Tray
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 10,000 Donated Books Library Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-900 text-amber-50 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                A Library With Soul
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Over 10,000 Donated Books With Notes From Around the World
              </h2>
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                Travelers, volunteers, and patrons from Barcelona, Madrid, Paris, London, and Tokyo have left their cherished books on our shelves, each with a handwritten inscription to the next reader.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/library"
                  className="bg-white text-amber-950 hover:bg-amber-100 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
                >
                  Browse the Library Shelf
                </Link>
                <Link
                  to="/book"
                  className="bg-amber-800/80 hover:bg-amber-800 text-white border border-amber-600/70 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Read About "Life is Life" Book
                </Link>
              </div>
            </div>

            {/* Inscription Card Teaser */}
            <div className="lg:col-span-5 bg-amber-950/70 border border-amber-700/60 rounded-2xl p-6 text-xs text-amber-100 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Featured Donor Note</span>
              </div>
              <p className="italic text-amber-200/90 font-serif text-sm leading-relaxed">
                "Sent with love from the Gothic Quarter of Barcelona. May you get lost in the Cemetery of Forgotten Books while drinking a sweet Café Bonbon."
              </p>
              <div className="pt-2 border-t border-amber-800/80 text-[11px] text-amber-300 flex justify-between">
                <span>The Shadow of the Wind by Carlos Ruiz Zafón</span>
                <span>From: Montserrat &amp; Jordi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Documentary Video Placeholder Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
            Documentary &amp; Media Archival
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Watch Amin's Journey: From Street Platform to Sanctuary
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mt-2">
            Our story has been documented by international film crews, TEDx, and independent journalists celebrating human resilience.
          </p>
        </div>

        {/* Video Placeholder strictly as requested */}
        <VideoPlaceholder
          title="Documentary Feature: From Bombay Railway Platforms to the Library Cafe"
          duration="18:45"
        />
      </section>

      {/* Global Reviews & Guestbook */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
            Words From Our Circle
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Loved by Travelers &amp; Locals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-stone-700 leading-relaxed italic font-serif mb-4">
                  "{rev.text}"
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-900 block">{rev.author}</span>
                <span className="text-[11px] text-stone-500 block">{rev.location} • {rev.source}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit Information & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Come Sit With Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              We Have a Cozy Table &amp; a Hot Cuppa Waiting for You
            </h2>
            <div className="space-y-2 text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Timmy Arcade, 778, Makwana Rd, Gamdevi, Marol, Andheri East, Mumbai 400059</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tuesday – Sunday: 10:00 AM – 10:45 PM (Mondays Closed)</span>
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 px-6 rounded-xl text-center text-sm transition-colors shadow-sm"
            >
              Reserve a Table
            </Link>
            <Link
              to="/contact"
              className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-3.5 px-6 rounded-xl text-center text-sm transition-colors border border-stone-700"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Compact Ad Placeholder above footer as explicitly requested */}
      <AdPlaceholder />
    </div>
  );
};
