import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, MENU_ITEMS } from '../data/menuData';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface SolidarityPledge {
  id: string;
  name: string;
  email: string;
  type: 'cupcakes' | 'apprentice' | 'books' | 'general';
  amount: number;
  date: string;
  message?: string;
}

export interface TableReservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  createdAt: string;
}

interface AppContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  orderDraft: OrderItem[];
  addToOrder: (item: MenuItem, quantity?: number, notes?: string) => void;
  updateOrderQuantity: (id: string, delta: number) => void;
  removeFromOrder: (id: string) => void;
  clearOrder: () => void;
  orderTotal: number;
  orderCount: number;

  bookmarkedBooks: string[];
  toggleBookBookmark: (id: string) => void;
  isBookBookmarked: (id: string) => boolean;

  pledges: SolidarityPledge[];
  addPledge: (pledge: Omit<SolidarityPledge, 'id' | 'date'>) => void;

  reservations: TableReservation[];
  addReservation: (res: Omit<TableReservation, 'id' | 'createdAt'>) => void;

  toast: string | null;
  showToast: (message: string) => void;

  isOrderDrawerOpen: boolean;
  setIsOrderDrawerOpen: (open: boolean) => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  FAVORITES: 'bombaycircle_favorites',
  ORDER: 'bombaycircle_order_draft',
  BOOKMARKS: 'bombaycircle_book_bookmarks',
  PLEDGES: 'bombaycircle_pledges',
  RESERVATIONS: 'bombaycircle_reservations'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return stored ? JSON.parse(stored) : ['patatas-bravas', 'cafe-bonbon', 'churros-con-chocolate'];
    } catch {
      return ['patatas-bravas', 'cafe-bonbon', 'churros-con-chocolate'];
    }
  });

  // Order Draft
  const [orderDraft, setOrderDraft] = useState<OrderItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ORDER);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      // Re-hydrate with full MenuItem objects
      return parsed.map((entry: { itemId: string; quantity: number; notes?: string }) => {
        const fullItem = MENU_ITEMS.find((m) => m.id === entry.itemId);
        return fullItem ? { item: fullItem, quantity: entry.quantity, notes: entry.notes } : null;
      }).filter(Boolean) as OrderItem[];
    } catch {
      return [];
    }
  });

  // Bookmarks
  const [bookmarkedBooks, setBookmarkedBooks] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return stored ? JSON.parse(stored) : ['life-is-life-amin'];
    } catch {
      return ['life-is-life-amin'];
    }
  });

  // Pledges
  const [pledges, setPledges] = useState<SolidarityPledge[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PLEDGES);
      return stored ? JSON.parse(stored) : [
        {
          id: 'p-seed-1',
          name: 'Maria Fernandez',
          email: 'maria.bcn@example.com',
          type: 'cupcakes',
          amount: 900,
          date: '2026-03-15',
          message: 'For 10 street kids to enjoy cupcakes on my birthday!'
        }
      ];
    } catch {
      return [];
    }
  });

  // Reservations
  const [reservations, setReservations] = useState<TableReservation[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RESERVATIONS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [toast, setToast] = useState<string | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Persistence effects
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (e) {
      console.warn('Could not save favorites to localStorage', e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      const simpleDraft = orderDraft.map((o) => ({
        itemId: o.item.id,
        quantity: o.quantity,
        notes: o.notes
      }));
      localStorage.setItem(STORAGE_KEYS.ORDER, JSON.stringify(simpleDraft));
    } catch (e) {
      console.warn('Could not save order draft to localStorage', e);
    }
  }, [orderDraft]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarkedBooks));
    } catch (e) {
      console.warn('Could not save book bookmarks to localStorage', e);
    }
  }, [bookmarkedBooks]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PLEDGES, JSON.stringify(pledges));
    } catch (e) {
      console.warn('Could not save pledges to localStorage', e);
    }
  }, [pledges]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify(reservations));
    } catch (e) {
      console.warn('Could not save reservations to localStorage', e);
    }
  }, [reservations]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast((curr) => (curr === message ? null : curr));
    }, 3500);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from your favorites');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Saved to your favorites ❤️');
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const addToOrder = (item: MenuItem, quantity = 1, notes?: string) => {
    setOrderDraft((prev) => {
      const existingIndex = prev.findIndex((entry) => entry.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (notes) updated[existingIndex].notes = notes;
        return updated;
      }
      return [...prev, { item, quantity, notes }];
    });
    showToast(`Added ${item.name} to your table order draft`);
  };

  const updateOrderQuantity = (id: string, delta: number) => {
    setOrderDraft((prev) => {
      return prev
        .map((entry) => {
          if (entry.item.id === id) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter(Boolean) as OrderItem[];
    });
  };

  const removeFromOrder = (id: string) => {
    setOrderDraft((prev) => prev.filter((entry) => entry.item.id !== id));
    showToast('Item removed from order');
  };

  const clearOrder = () => {
    setOrderDraft([]);
    showToast('Table order draft cleared');
  };

  const orderTotal = orderDraft.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const orderCount = orderDraft.reduce((acc, curr) => acc + curr.quantity, 0);

  const toggleBookBookmark = (id: string) => {
    setBookmarkedBooks((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from reading wishlist');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Added to your library reading wishlist 📖');
        return [...prev, id];
      }
    });
  };

  const isBookBookmarked = (id: string) => bookmarkedBooks.includes(id);

  const addPledge = (pledgeData: Omit<SolidarityPledge, 'id' | 'date'>) => {
    const newPledge: SolidarityPledge = {
      ...pledgeData,
      id: `pledge-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setPledges((prev) => [newPledge, ...prev]);
    showToast('Thank you! Your solidarity pledge was recorded.');
  };

  const addReservation = (resData: Omit<TableReservation, 'id' | 'createdAt'>) => {
    const newRes: TableReservation = {
      ...resData,
      id: `res-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setReservations((prev) => [newRes, ...prev]);
    showToast('Table inquiry submitted! We will confirm by WhatsApp/Phone.');
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        orderDraft,
        addToOrder,
        updateOrderQuantity,
        removeFromOrder,
        clearOrder,
        orderTotal,
        orderCount,
        bookmarkedBooks,
        toggleBookBookmark,
        isBookBookmarked,
        pledges,
        addPledge,
        reservations,
        addReservation,
        toast,
        showToast,
        isOrderDrawerOpen,
        setIsOrderDrawerOpen,
        isSearchOpen,
        setIsSearchOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
