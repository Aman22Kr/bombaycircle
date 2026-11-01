export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'food' | 'community' | 'books';
  imageUrl: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Sunlit Reading Nook',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    caption: 'Handcrafted wooden tables surrounded by shelves overflowing with donated stories from 50+ countries.'
  },
  {
    id: 'g-2',
    title: 'Sizzling Patatas Bravas',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly fried potato cubes served with spicy pimentón brava sauce and garlic alioli.'
  },
  {
    id: 'g-3',
    title: 'Street Children Care Cupcake Day',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Local kids gathering on a Sunday morning for free cupcakes, warm milk, and drawing sessions.'
  },
  {
    id: 'g-4',
    title: 'Donor Inscriptions & Memories',
    category: 'books',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Every donated book bears a handwritten note from a traveler who left a piece of their heart behind.'
  },
  {
    id: 'g-5',
    title: 'The Art of Café Bonbon',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Double espresso layered gracefully over sweet condensed milk—a Barcelona classic served in Marol.'
  },
  {
    id: 'g-6',
    title: 'Cultural Acoustic Evenings',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Live acoustic guitar and poetry readings hosted beneath the warm ambient cafe lamps.'
  },
  {
    id: 'g-7',
    title: 'Churros Fresh from the Fryer',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Golden, cinnamon-dusted Spanish churros served alongside rich, molten hot chocolate.'
  },
  {
    id: 'g-8',
    title: 'International Book Wall',
    category: 'books',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    caption: 'More than 10,000 titles cataloged and shared freely with patrons, students, and neighborhood youth.'
  },
  {
    id: 'g-9',
    title: 'The Warm Cafe Facade at Night',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'A glowing beacon of warmth and dignity on Makwana Road, Marol, Andheri East.'
  }
];

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'r-1',
    author: 'Clara Martí',
    location: 'Barcelona, Spain',
    rating: 5,
    date: 'February 2026',
    text: 'Visiting bombaycircle felt like walking into a beloved home in Barcelona with the warmest Mumbai heart. The Patatas Bravas and Café Bonbon were authentic, but the genuine smiles of the youth will stay with me forever.',
    source: 'TripAdvisor'
  },
  {
    id: 'r-2',
    author: 'Vikram Sengupta',
    location: 'Mumbai, India',
    rating: 5,
    date: 'January 2026',
    text: 'The best place in Andheri to sit quietly, read an international book, and reflect. The fact that all profits go towards equal wages and healthcare for street youth makes every rupee spent meaningful.',
    source: 'Google Reviews'
  },
  {
    id: 'r-3',
    author: 'Sophie & Liam Turner',
    location: 'London, UK',
    rating: 5,
    date: 'December 2025',
    text: 'We bought Amin’s book "Life is Life" and donated three novels we were traveling with. Don’t miss the fresh churros and cutting chai. A truly inspiring human endeavor.',
    source: 'Lonely Planet Community'
  },
  {
    id: 'r-4',
    author: 'Dr. Neha Kulkarni',
    location: 'Pune, India',
    rating: 5,
    date: 'November 2025',
    text: 'An exceptional social enterprise. Watching how comfortable street children feel when they enter the cafe proves that this isn’t charity—it’s pure dignity and equality.',
    source: 'Zomato'
  }
];
