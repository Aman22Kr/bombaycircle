# bombaycircle - The Library Café & Solidarity Project

A production-ready, accessible, multi-page static web application recreating the beloved Mumbai social enterprise **Bombay to Barcelona Library Café** under the new brand identity **bombaycircle**.

- **Live Reference Website:** [https://www.bombaytobarcelonalibrarycafe.com/](https://www.bombaytobarcelonalibrarycafe.com/)
- **New Brand Identity:** **bombaycircle**
- **GitHub Maintainer:** [Aman22kr](https://github.com/Aman22kr)
- **Deployment Platform:** GitHub Pages via GitHub Actions

---

## 1. What the Website Does

`bombaycircle` represents a unique solidarity enterprise founded by former street child and author **Amin Sheikh** in Marol, Andheri East, Mumbai.

The application serves as the complete digital hub for the café:
- **Dignity & Equal Pay Model:** Highlights how the enterprise is staffed entirely by young adults who were formerly street children or grew up in orphanages, providing equal wages, shared apartment housing, and full health insurance.
- **Fusion Cuisine & Tapas Menu:** Showcases an authentic blend of Spanish tapas (Patatas Bravas, Tortilla de Patatas, Croquetas) and Mumbai street comfort (Vada Pav, Poha, Bhajia, Café Bonbon, and fresh cinnamon Churros).
- **The 10,000 Donated Books Library:** A searchable catalog of books donated by travelers from Barcelona, Madrid, Paris, London, Tokyo, and Mumbai, each featuring personal handwritten inscriptions.
- **Amin Sheikh's Autobiography ("Life is Life: I am Because of You"):** Information, excerpts, and an interactive reservation/order inquiry form for the self-published book that funded the café.
- **Solidarity Initiatives:** An interactive sponsorship calculator and pledge register for "Cupcakes for Street Children" and youth apprentice stipends.
- **Table Reservation & Contact:** Direct booking form and transit guide for reaching the café in Marol, Andheri East.

---

## 2. Implemented Pages & Features

| Route | Page | Key Features |
|-------|------|--------------|
| `#/` | **Home** | Hero section, solidarity metrics, popular dishes, video presentation area with 16:9 blank placeholder, testimonials, visitor reviews, and location preview. |
| `#/story` | **Our Story** | Founder Amin Sheikh's journey from Dadar railway platforms to Barcelona, interactive milestones timeline (1985 to present), and staff profiles. |
| `#/menu` | **Food & Tapas Menu** | Categorized menu (Tapas, Mumbai Comfort, Sandwiches, Pasta, Coffee, Churros), live search, dietary filter (Veg, Vegan, Non-Veg), sorting, spicy indicator, and "Add to Tray" controls. |
| `#/menu/:id` | **Dish Detail** | In-depth culinary history, Spanish name, ingredient tags, pairing suggestions, custom kitchen notes, and table ordering. |
| `#/library` | **The Library** | 10,000 book collection, search by title/author/donor city, handwritten inscriptions display, reading list bookmarks, and "Pledge a Book" modal. |
| `#/book` | **"Life is Life" Book** | Chapter summaries, selected excerpts, physical book mockup, reader reviews, and multi-edition inquiry form. |
| `#/gallery` | **Photo Gallery** | Filterable photo moments (Reading Nooks, Tapas, Community Outreach), with full-screen lightbox modal. |
| `#/support` | **Solidarity & Pledges** | Sponsor cupcakes for homeless kids, youth stipends, interactive pledge calculator, transparency pledge, and community donor wall. |
| `#/contact` | **Visit & Reservations** | Timmy Arcade address, operating hours, transit/metro directions, and table reservation desk. |
| `*` | **Not Found (404)** | Lost in the Stacks 404 page with quick navigation back to home or library. |

### Global Components:
- **Responsive Navigation (`Navbar`):** Sticky header with brand logo, search trigger (`Cmd+K`), order tray counter badge, and mobile drawer.
- **Global Search Modal (`GlobalSearchModal`):** Instant search across menu items, library books, and story milestones with quick shortcuts.
- **Café Tray Drawer (`OrderDrawer`):** Slide-over drawer managing table orders, saved favorite dishes, and reading list bookmarks.
- **Advertisement Placeholder (`AdPlaceholder`):** Reusable, unobtrusive compact advertising slot placed near the bottom of all relevant pages above the footer.
- **Video Placeholder (`VideoPlaceholder`):** Reproduces the exact 16:9 aspect ratio and video player layout with a clean blank placeholder without third-party embeds.
- **Toast Notifications (`Toast`):** Non-blocking client feedback for favorites, orders, and pledges.

---

## 3. Technology Stack

- **Runtime & Build:** Node.js 22, [Vite](https://vitejs.dev/) with relative base path (`base: './'`).
- **Framework:** React 19 with JavaScript / JSX / TypeScript.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom typography (`Playfair Display`, `Plus Jakarta Sans`).
- **Routing:** [React Router](https://reactrouter.com/) with `HashRouter` for zero-configuration GitHub Pages hosting.
- **Icons:** [Lucide React](https://lucide.react.dev/).
- **Motion:** [Motion / Framer Motion](https://motion.dev/) for smooth transitions respecting `prefers-reduced-motion`.
- **Client-Side Persistence:** Browser `localStorage`.

---

## 4. Project Structure

```text
bombaycircle/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for GitHub Pages
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── AdPlaceholder.tsx   # Reusable compact advertising placeholder
│   │   ├── Footer.tsx          # Editorial footer with hours & Aman22kr attribution
│   │   ├── GlobalSearchModal.tsx # Universal search modal across all content
│   │   ├── Navbar.tsx          # Sticky responsive header with drawer
│   │   ├── OrderDrawer.tsx     # Table order tray, favorites, & reading list
│   │   ├── Toast.tsx           # Floating notification system
│   │   └── VideoPlaceholder.tsx# Blank video player placeholder (16:9)
│   ├── context/
│   │   └── AppContext.tsx      # State management with localStorage persistence
│   ├── data/
│   │   ├── booksData.ts        # Curated library books and donor inscriptions
│   │   ├── galleryData.ts      # Photo gallery and guest reviews
│   │   ├── menuData.ts         # Complete food and beverage menu
│   │   └── storyData.ts        # Founder story, milestones, and youth profiles
│   ├── pages/
│   │   ├── BookPage.tsx        # "Life is Life" autobiography details & orders
│   │   ├── ContactPage.tsx     # Location, directions, and table bookings
│   │   ├── GalleryPage.tsx     # Filterable photo gallery with lightbox
│   │   ├── HomePage.tsx        # Homepage with hero, specials, video, & ethos
│   │   ├── LibraryPage.tsx     # 10,000 book library & donation modal
│   │   ├── MenuItemDetailPage.tsx # Single dish details & culinary story
│   │   ├── MenuPage.tsx        # Food & tapas menu with filters and search
│   │   ├── NotFoundPage.tsx    # 404 error page
│   │   ├── StoryPage.tsx       # Founder biography & timeline
│   │   └── SupportPage.tsx     # Solidarity initiatives & pledge calculator
│   ├── App.tsx                 # Root router and layout container
│   ├── index.css               # Tailwind CSS theme & reduced motion configuration
│   └── main.tsx                # React root mount
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML entry point with meta tags & web fonts
├── metadata.json               # Application metadata
├── package.json                # Project dependencies and build scripts
├── package-lock.json           # Committed deterministic npm lockfile
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration with base: './'
```

---

## 5. Prerequisites & Local Development

### Prerequisites
- **Node.js:** Version 20.x or 22.x LTS (compatible with Node 22 specified in GitHub Actions).
- **npm:** Version 10.x or higher.

### Installation
Clone the repository and install dependencies using the committed `package-lock.json`:
```bash
git clone https://github.com/Aman22kr/bombaycircle.git
cd bombaycircle
npm ci
```

### Running the Development Server
```bash
npm run dev
```
The server will start on `http://localhost:3000` with hot-reloading.

### Production Build & Local Preview
```bash
# Generate the production bundle in dist/
npm run build

# Preview the built static files locally
npm run preview
```

---

## 6. LocalStorage Persistence Details

The application automatically persists client-side interactions in the browser's `localStorage` using isolated, namespaced keys:

- `bombaycircle_favorites`: IDs of menu dishes saved by the user.
- `bombaycircle_order_draft`: Active table order draft with quantities and special notes.
- `bombaycircle_book_bookmarks`: IDs of library books saved to the reading wishlist.
- `bombaycircle_pledges`: Solidarity pledges (e.g., cupcake funds, apprentice stipends).
- `bombaycircle_reservations`: Table inquiries and booking records.

> **Important Note:** `localStorage` is scoped exclusively to the user's current device and browser profile. It does not synchronize across multiple devices or submit live payment/charge transactions.

---

## 7. GitHub Pages Deployment via GitHub Actions

This project is configured for automated continuous deployment to GitHub Pages via the included `.github/workflows/deploy.yml` workflow.

### Setup Instructions:
1. Push your repository to GitHub under the username `Aman22kr`:
   ```bash
   git add .
   git commit -m "feat: complete bombaycircle static application"
   git remote add origin https://github.com/Aman22kr/bombaycircle.git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. Every push to the `main` branch will automatically trigger the workflow, build the static site, and deploy it to:
   ```
   https://Aman22kr.github.io/bombaycircle/
   ```

### Why HashRouter & `base: './'`?
- `base: './'` in `vite.config.ts` ensures all bundled scripts, styles, and assets resolve correctly regardless of the repository subpath.
- `HashRouter` ensures that direct links (e.g. `#/menu`, `#/story`) and browser page refreshes work seamlessly on GitHub Pages without requiring server-side 404 URL rewrite rules.

---

## 8. Customization & Reusing for Another Brand

To customize this codebase for another brand or project:
1. **Brand Identity:** Update the brand name `bombaycircle` in:
   - `metadata.json`
   - `index.html` (`<title>` and meta tags)
   - `src/components/Navbar.tsx` and `src/components/Footer.tsx`
2. **Data Content:** Modify or replace the datasets in `src/data/`:
   - `menuData.ts` for dishes, prices, and categories.
   - `booksData.ts` for books, authors, and donor inscriptions.
   - `storyData.ts` for founder history and milestones.
   - `galleryData.ts` for gallery photos and reviews.
3. **Color Palette:** Update Tailwind colors in `src/index.css` (e.g. adjust amber/terracotta/stone accents).

---

## 9. Mock Implementations & Scope

- **Table Reservations & Book Requests:** Form inputs validate and store entries locally in browser state. No server-side mailer or payment gateway is required for the static version.
- **Video Presentations:** As specified in the requirements, video player areas display blank placeholder layouts with accurate 16:9 aspect ratios without loading external YouTube scripts.
- **Advertisements:** Includes clean, unobtrusive placeholder slots matching industry standard sizing above page footers.
