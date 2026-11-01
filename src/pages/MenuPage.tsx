import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Heart, 
  Flame, 
  Filter, 
  Sparkles, 
  Plus, 
  ArrowUpDown,
  ShoppingBag
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS, CATEGORIES, MenuItem } from '../data/menuData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const MenuPage: React.FC = () => {
  const { addToOrder, toggleFavorite, isFavorite, setIsOrderDrawerOpen } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDiet, setSelectedDiet] = useState<'all' | 'veg' | 'vegan' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'spicy'>('recommended');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Diet match
      if (selectedDiet !== 'all') {
        if (selectedDiet === 'veg' && item.dietary === 'non-veg') return false;
        if (selectedDiet === 'vegan' && item.dietary !== 'vegan') return false;
        if (selectedDiet === 'non-veg' && item.dietary !== 'non-veg') return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesOriginal = item.originalName?.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesIng = item.ingredients.some((i) => i.toLowerCase().includes(q));
        if (!matchesName && !matchesOriginal && !matchesDesc && !matchesIng) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'spicy') return b.spicyLevel - a.spicyLevel;
      // Recommended: house specials first, then popular
      if (a.isHouseSpecial && !b.isHouseSpecial) return -1;
      if (!a.isHouseSpecial && b.isHouseSpecial) return 1;
      return 0;
    });
  }, [selectedCategory, selectedDiet, searchQuery, sortBy]);

  return (
    <div className="space-y-12 py-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Handcrafted Daily in Marol, Mumbai</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
          Our Food &amp; Tapas Menu
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
          Spanish comfort classics meet Mumbai street soul. All prices include our solidarity fund ensuring 100% equal wages and medical support.
        </p>
      </section>

      {/* Controls: Search, Category Tabs, Diet & Sort */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
          {/* Live Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, ingredients (e.g. bravas, eggs, churros)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-2 text-sm text-stone-900 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Diet filters & Sorting */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            {/* Dietary Filter Pills */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl text-xs font-medium">
              {(
                [
                  { id: 'all', label: 'All Diets' },
                  { id: 'veg', label: 'Veg' },
                  { id: 'vegan', label: 'Vegan' },
                  { id: 'non-veg', label: 'Non-Veg' }
                ] as const
              ).map((diet) => (
                <button
                  key={diet.id}
                  onClick={() => setSelectedDiet(diet.id)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    selectedDiet === diet.id
                      ? 'bg-white text-stone-900 font-semibold shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {diet.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-xl text-xs font-medium text-stone-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="recommended">Featured / Specials</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="spicy">Spiciness Level</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Horizontal Scroll Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Dish Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
            <p className="text-stone-500 text-sm">No items found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDiet('all');
                setSearchQuery('');
              }}
              className="bg-amber-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-amber-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                {/* Image & Badges */}
                <div className="relative overflow-hidden aspect-4/3 bg-stone-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {dish.dietary === 'veg'
                        ? '🌱 Vegetarian'
                        : dish.dietary === 'vegan'
                        ? '🌿 Vegan'
                        : '🍗 Non-Veg'}
                    </span>
                    {dish.isHouseSpecial && (
                      <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        Chef's Special
                      </span>
                    )}
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

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/menu/${dish.id}`}
                        className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug"
                      >
                        {dish.name}
                      </Link>
                      <span className="font-bold text-amber-700 text-base shrink-0">
                        ₹{dish.price}
                      </span>
                    </div>

                    {dish.originalName && (
                      <p className="text-[11px] text-stone-500 italic mt-0.5">{dish.originalName}</p>
                    )}

                    <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Spiciness Level Indicator */}
                    {dish.spicyLevel > 0 && (
                      <div className="flex items-center gap-1 mt-2 text-[10px] text-amber-800 font-medium">
                        <Flame className="w-3 h-3 text-amber-600" />
                        <span>
                          {dish.spicyLevel === 1
                            ? 'Mild spice'
                            : dish.spicyLevel === 2
                            ? 'Medium spice'
                            : 'Hot & Zesty'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <Link
                      to={`/menu/${dish.id}`}
                      className="text-xs font-semibold text-stone-500 hover:text-stone-900"
                    >
                      Recipe Story &rarr;
                    </Link>
                    <button
                      onClick={() => addToOrder(dish)}
                      className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Floating Tray CTA Bar */}
      <div className="sticky bottom-4 max-w-md mx-auto px-4 z-30">
        <button
          onClick={() => setIsOrderDrawerOpen(true)}
          className="w-full bg-stone-900 hover:bg-stone-800 text-stone-100 py-3 px-5 rounded-2xl shadow-xl flex items-center justify-between border border-stone-700 transition-all transform hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-semibold">View Table Order Tray</span>
          </div>
          <span className="text-xs font-bold bg-amber-600 text-white px-2.5 py-1 rounded-full">
            Open Tray &rarr;
          </span>
        </button>
      </div>

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
