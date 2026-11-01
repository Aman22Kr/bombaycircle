import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Heart, 
  BookOpen, 
  Check, 
  ArrowRight,
  Coffee
} from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { BOOKS_DATA } from '../data/booksData';

export const OrderDrawer: React.FC = () => {
  const {
    isOrderDrawerOpen,
    setIsOrderDrawerOpen,
    orderDraft,
    updateOrderQuantity,
    removeFromOrder,
    clearOrder,
    orderTotal,
    favorites,
    toggleFavorite,
    addToOrder,
    bookmarkedBooks,
    toggleBookBookmark,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'order' | 'favorites' | 'books'>('order');
  const [tableNumber, setTableNumber] = useState('Table 4');
  const [guestName, setGuestName] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOrderDrawerOpen) return null;

  const favoriteItems = MENU_ITEMS.filter((item) => favorites.includes(item.id));
  const bookmarkedList = BOOKS_DATA.filter((book) => bookmarkedBooks.includes(book.id));

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderDraft.length === 0) return;
    setSubmitted(true);
    showToast(`Order sent to the kitchen for ${tableNumber}!`);
    setTimeout(() => {
      clearOrder();
      setSubmitted(false);
      setIsOrderDrawerOpen(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-stone-50 shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-900">Your Café Tray</h2>
              <p className="text-xs text-stone-500">Table orders, saved dishes &amp; reading list</p>
            </div>
          </div>
          <button
            onClick={() => setIsOrderDrawerOpen(false)}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-100/70 p-1.5 text-xs font-medium">
          <button
            onClick={() => setActiveTab('order')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'order'
                ? 'bg-white text-stone-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span>Table Order</span>
            {orderDraft.length > 0 && (
              <span className="bg-amber-600 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                {orderDraft.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'favorites'
                ? 'bg-white text-stone-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
            <span>Saved Dishes ({favorites.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('books')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'books'
                ? 'bg-white text-stone-900 font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Wishlist ({bookmarkedBooks.length})</span>
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'order' && (
            <>
              {orderDraft.length === 0 ? (
                <div className="text-center py-12 px-4 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-stone-100 text-stone-400 mx-auto flex items-center justify-center">
                    <Coffee className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-stone-800">Your table tray is empty</h4>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto">
                    Browse our menu of Spanish tapas, Mumbai comforts, and specialty coffees to add your favorites.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {orderDraft.map((entry) => (
                    <div
                      key={entry.item.id}
                      className="bg-white border border-stone-200/90 rounded-xl p-3 shadow-xs flex items-center justify-between gap-3"
                    >
                      <img
                        src={entry.item.image}
                        alt={entry.item.name}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-stone-900 truncate">
                          {entry.item.name}
                        </h4>
                        <p className="text-xs text-amber-700 font-medium">₹{entry.item.price}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-stone-100 rounded-lg p-1 shrink-0">
                        <button
                          onClick={() => updateOrderQuantity(entry.item.id, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center bg-white text-stone-700 hover:bg-stone-200 shadow-2xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-stone-800">
                          {entry.quantity}
                        </span>
                        <button
                          onClick={() => updateOrderQuantity(entry.item.id, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center bg-white text-stone-700 hover:bg-stone-200 shadow-2xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromOrder(entry.item.id)}
                        className="text-stone-400 hover:text-rose-600 p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* Order form / Table picker */}
                  <form onSubmit={handleSubmitOrder} className="pt-4 border-t border-stone-200 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-stone-600 font-semibold mb-1">Table / Mode</label>
                        <select
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded-lg p-2 text-stone-800 focus:outline-none focus:border-amber-500"
                        >
                          <option value="Table 1 (Library Nook)">Table 1 (Library Nook)</option>
                          <option value="Table 2 (Window View)">Table 2 (Window View)</option>
                          <option value="Table 3 (Terrace Patio)">Table 3 (Terrace Patio)</option>
                          <option value="Table 4 (Center Lounge)">Table 4 (Center Lounge)</option>
                          <option value="Takeaway / Parcel">Takeaway / Parcel</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-stone-600 font-semibold mb-1">Your Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Maria"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded-lg p-2 text-stone-800 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-stone-600 font-semibold mb-1">
                        Kitchen Special Note
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Less spicy, extra warm milk"
                        value={specialNote}
                        onChange={(e) => setSpecialNote(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-lg p-2 text-xs text-stone-800 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 space-y-1">
                      <div className="flex justify-between">
                        <span>Items Subtotal:</span>
                        <span className="font-semibold">₹{orderTotal}</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-amber-800">
                        <span>Solidarity Staff Fund (included):</span>
                        <span>100% Equal Pay</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={clearOrder}
                        className="px-3 py-2.5 rounded-xl border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-semibold"
                      >
                        Clear
                      </button>
                      <button
                        type="submit"
                        disabled={submitted}
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        {submitted ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Kitchen Notified!</span>
                          </>
                        ) : (
                          <>
                            <span>Send Table Order (₹{orderTotal})</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </>
          )}

          {activeTab === 'favorites' && (
            <div className="space-y-3">
              {favoriteItems.length === 0 ? (
                <div className="text-center py-10 text-xs text-stone-500">
                  <p>You haven't saved any dishes yet.</p>
                  <p className="mt-1">Tap the heart on any menu item to save it here!</p>
                </div>
              ) : (
                favoriteItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">{item.name}</h4>
                      <p className="text-[11px] text-amber-700 font-semibold">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => addToOrder(item)}
                        className="bg-stone-900 hover:bg-amber-700 text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-lg"
                      >
                        + Order
                      </button>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-600"
                        title="Remove from favorites"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'books' && (
            <div className="space-y-3">
              {bookmarkedList.length === 0 ? (
                <div className="text-center py-10 text-xs text-stone-500">
                  <p>Your library reading list is empty.</p>
                  <p className="mt-1">Browse our 10,000+ titles and bookmark what you want to read.</p>
                </div>
              ) : (
                bookmarkedList.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white border border-stone-200 rounded-xl p-3 flex items-start gap-3 shadow-2xs"
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-11 h-14 rounded object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 leading-tight">
                        {book.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-0.5">by {book.author}</p>
                      <span className="inline-block mt-1 text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-medium">
                        Donated from {book.donorCity}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleBookBookmark(book.id)}
                      className="text-stone-400 hover:text-rose-600 p-1"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
