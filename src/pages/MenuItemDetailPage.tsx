import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Flame, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Sparkles, 
  Coffee, 
  ChefHat 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data/menuData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const MenuItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToOrder, toggleFavorite, isFavorite } = useApp();

  const [quantity, setQuantity] = useState(1);
  const [kitchenNote, setKitchenNote] = useState('');

  const dish = MENU_ITEMS.find((item) => item.id === id);

  if (!dish) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Dish Not Found</h2>
        <p className="text-sm text-stone-500">
          The menu item you are looking for does not exist or has been updated.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToOrder(dish, quantity, kitchenNote.trim() || undefined);
    setKitchenNote('');
  };

  // Pairings: other popular dishes from different categories
  const suggestedPairings = MENU_ITEMS.filter(
    (m) => m.id !== dish.id && (m.category === 'coffee' || m.category === 'desserts' || m.isHouseSpecial)
  ).slice(0, 3);

  return (
    <div className="space-y-12 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <button
          onClick={() => navigate('/menu')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Menu Items</span>
        </button>

        {/* Detail Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10">
          {/* Dish Image */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden shadow-inner bg-stone-100">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => toggleFavorite(dish.id)}
              className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-xs rounded-full text-stone-700 hover:text-rose-600 transition-colors shadow-md"
              title="Save to favorites"
              aria-label="Save to favorites"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite(dish.id) ? 'text-rose-600 fill-rose-600' : ''
                }`}
              />
            </button>
          </div>

          {/* Dish Information */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-stone-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {dish.dietary === 'veg'
                    ? '🌱 Vegetarian'
                    : dish.dietary === 'vegan'
                    ? '🌿 Vegan'
                    : '🍗 Non-Veg'}
                </span>
                {dish.isHouseSpecial && (
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                    Chef's Special
                  </span>
                )}
                {dish.spicyLevel > 0 && (
                  <span className="bg-rose-50 text-rose-800 border border-rose-200 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    <span>Spice Level {dish.spicyLevel}/3</span>
                  </span>
                )}
              </div>

              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
                  {dish.name}
                </h1>
                {dish.originalName && (
                  <p className="text-sm text-stone-500 italic mt-1 font-serif">
                    Traditional Name: {dish.originalName}
                  </p>
                )}
                <p className="text-2xl font-bold text-amber-700 mt-2">₹{dish.price}</p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">{dish.description}</p>

              {/* Story behind the dish */}
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                  <ChefHat className="w-4 h-4 text-amber-700" />
                  <span>Culinary Story &amp; Origins</span>
                </div>
                <p className="text-xs text-amber-950 font-serif leading-relaxed">
                  "{dish.storyNote}"
                </p>
              </div>

              {/* Fresh Ingredients */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 mb-2">
                  Key Fresh Ingredients
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {dish.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-lg border border-stone-200/80"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity and Order Form */}
            <div className="pt-6 border-t border-stone-200 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-stone-700">Quantity:</span>
                <div className="flex items-center bg-stone-100 rounded-xl p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 shadow-2xs"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-stone-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-bold text-stone-500">
                  Total: ₹{dish.price * quantity}
                </span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Special instructions (e.g. less spice, extra sauce)..."
                  value={kitchenNote}
                  onChange={(e) => setKitchenNote(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2 text-xs text-stone-800 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Table Order (₹{dish.price * quantity})</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Pairings */}
        <div className="mt-16 space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
              Complete Your Experience
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
              Pairs Beautifully With
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {suggestedPairings.map((pair) => (
              <Link
                key={pair.id}
                to={`/menu/${pair.id}`}
                className="bg-white border border-stone-200 rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <img
                  src={pair.image}
                  alt={pair.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors truncate">
                    {pair.name}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-1">{pair.description}</p>
                  <span className="text-xs font-bold text-amber-700 mt-1 block">
                    ₹{pair.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Ad Section */}
      <AdPlaceholder />
    </div>
  );
};
