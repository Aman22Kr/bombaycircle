import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { OrderDrawer } from './components/OrderDrawer';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { MenuPage } from './pages/MenuPage';
import { MenuItemDetailPage } from './pages/MenuItemDetailPage';
import { LibraryPage } from './pages/LibraryPage';
import { BookPage } from './pages/BookPage';
import { GalleryPage } from './pages/GalleryPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// ScrollToTop on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-600 selection:text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/:id" element={<MenuItemDetailPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />

          {/* Global Drawers & Modals */}
          <OrderDrawer />
          <GlobalSearchModal />
          <Toast />
        </div>
      </HashRouter>
    </AppProvider>
  );
}
