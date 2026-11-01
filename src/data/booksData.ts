export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  category: 'fiction' | 'memoir' | 'spanish' | 'social-justice' | 'poetry' | 'travel';
  language: string;
  donorCity: string;
  donorName: string;
  donorNote: string;
  yearDonated: number;
  availableCopies: number;
  coverImage: string;
  description: string;
}

export const BOOK_CATEGORIES = [
  { id: 'all', label: 'All Shelves' },
  { id: 'memoir', label: 'Memoirs & Journeys' },
  { id: 'fiction', label: 'Global Fiction' },
  { id: 'spanish', label: 'Spanish Literature' },
  { id: 'social-justice', label: 'Solidarity & Society' },
  { id: 'travel', label: 'Travel & Cultures' },
  { id: 'poetry', label: 'Poetry & Arts' }
] as const;

export const BOOKS_DATA: LibraryBook[] = [
  {
    id: 'life-is-life-amin',
    title: 'Life is Life: I am Because of You',
    author: 'Amin Sheikh',
    category: 'memoir',
    language: 'English (Also in Spanish & Hindi)',
    donorCity: 'Mumbai & Barcelona',
    donorName: 'Amin & The Circle Family',
    donorNote: 'To whoever reads this: no matter how dark the railway platform seemed, hope was never gone. You are holding the story that made this cafe possible.',
    yearDonated: 2016,
    availableCopies: 12,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    description: 'The raw, unfiltered autobiography of founder Amin Sheikh—from fleeing child abuse at five to live on Mumbai railway stations, to building an inclusive library cafe of hope.'
  },
  {
    id: 'shadow-of-the-wind',
    title: 'The Shadow of the Wind (La Sombra del Viento)',
    author: 'Carlos Ruiz Zafón',
    category: 'spanish',
    language: 'Spanish & English Edition',
    donorCity: 'Barcelona, Spain',
    donorName: 'Montserrat & Jordi V.',
    donorNote: 'Sent with love from the Gothic Quarter of Barcelona. May you get lost in the Cemetery of Forgotten Books while drinking a sweet Café Bonbon.',
    yearDonated: 2017,
    availableCopies: 3,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    description: 'Set in post-war Barcelona, a boy named Daniel is taken to the secret Cemetery of Forgotten Books where he selects a fateful cursed novel.'
  },
  {
    id: 'shantaram',
    title: 'Shantaram',
    author: 'Gregory David Roberts',
    category: 'fiction',
    language: 'English',
    donorCity: 'Melbourne, Australia',
    donorName: 'Liam & Sarah',
    donorNote: 'We read this while backpacking through Colaba and Bandra. Bombay changes everyone who opens their heart to it.',
    yearDonated: 2018,
    availableCopies: 4,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80',
    description: 'An epic tale of escape, survival, slum medical clinics, and boundless love set across the teeming neighborhoods of Mumbai.'
  },
  {
    id: 'pedagogy-of-the-oppressed',
    title: 'Pedagogy of the Oppressed',
    author: 'Paulo Freire',
    category: 'social-justice',
    language: 'English',
    donorCity: 'Madrid, Spain',
    donorName: 'Prof. Carmen Delgado',
    donorNote: 'True education is an act of love, and thus an act of courage. Keep empowering these young souls.',
    yearDonated: 2019,
    availableCopies: 2,
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    description: 'Groundbreaking philosophical text proposing education as a tool of mutual liberation between teachers and learners.'
  },
  {
    id: 'don-quixote',
    title: 'Don Quixote de la Mancha',
    author: 'Miguel de Cervantes',
    category: 'spanish',
    language: 'Spanish & English Dual',
    donorCity: 'Seville, Spain',
    donorName: 'Alejandro Cruz',
    donorNote: 'To dream the impossible dream, to fight the unbeatable foe... Amin’s journey reminds us that tilting at windmills sometimes builds real sanctuaries.',
    yearDonated: 2017,
    availableCopies: 2,
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    description: 'The crowning masterpiece of Spanish literature following the idealistic knight and his loyal squire Sancho Panza.'
  },
  {
    id: 'gitanjali',
    title: 'Gitanjali (Song Offerings)',
    author: 'Rabindranath Tagore',
    category: 'poetry',
    language: 'Bengali & English',
    donorCity: 'Kolkata, India',
    donorName: 'Ananya & Souvik',
    donorNote: 'Where the mind is without fear and the head is held high. In memory of our visit to this holy sanctuary of friendship.',
    yearDonated: 2020,
    availableCopies: 3,
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
    description: 'Nobel Prize-winning devotional and philosophical poetry collection celebrating the divine presence in ordinary human lives.'
  },
  {
    id: 'maximum-city',
    title: 'Maximum City: Bombay Lost and Found',
    author: 'Suketu Mehta',
    category: 'travel',
    language: 'English',
    donorCity: 'New York, USA',
    donorName: 'David Miller',
    donorNote: 'Donated on my third visit to bombaycircle. The cafe represents everything compassionate that beats at the core of this complex metropolis.',
    yearDonated: 2021,
    availableCopies: 2,
    coverImage: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80',
    description: 'A dazzling narrative exploration of Mumbai through the eyes of its dreamers, gangsters, bar dancers, and daily commuters.'
  },
  {
    id: 'little-prince',
    title: 'The Little Prince (El Principito)',
    author: 'Antoine de Saint-Exupéry',
    category: 'fiction',
    language: 'Spanish, French & English',
    donorCity: 'Lyon, France',
    donorName: 'Camille Dubois',
    donorNote: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye. Thank you for welcoming every child here.',
    yearDonated: 2022,
    availableCopies: 5,
    coverImage: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=800&q=80',
    description: 'A timeless philosophical fable on love, friendship, innocence, and looking beyond social appearances.'
  }
];
