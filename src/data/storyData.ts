export interface StoryMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  origin: string;
  favoriteDish: string;
  quote: string;
  avatar: string;
}

export const FOUNDER_STORY = {
  name: 'Amin Sheikh',
  title: 'Founder & Visionary',
  bio: `At the tender age of five, Amin ran away from an abusive domestic household and found himself surviving on the ruthless platforms of Mumbai's Dadar railway station. He scavenged food, washed tea glasses, shined shoes, and faced unspeakable perils until he was sheltered by Snehasadan, an organization dedicated to homeless boys.

Years later, while working as a driver for the renowned advertising director Eustace Fernandez, Amin was treated with profound human dignity and was gifted a life-altering Christmas trip to Barcelona. Walking down Las Ramblas and sitting in welcoming European library cafes, a dream ignited: to create a sanctuary back in Mumbai where street children could gain dignity, equal wages, housing, and respect—a bridge of love between social classes.`,
  quote: "I am because of you. If you remove the 'you' from my life, I am nothing. We built this circle so no child ever feels invisible.",
  coreValues: [
    {
      title: 'Dignity of Labor & Equal Pay',
      desc: 'Every team member, regardless of their role—barista, chef, manager, or cleaner—receives identical living wages and dignity.'
    },
    {
      title: 'Housing & Complete Healthcare',
      desc: 'Cafe revenue directly pays for shared, secure living apartments and private health insurance for all team members.'
    },
    {
      title: 'Open Doors for Every Human',
      desc: 'One of the very few cafes where street children, domestic workers, diplomats, and international travelers sit side by side without judgment.'
    },
    {
      title: 'Free Warm Food for Street Children',
      desc: 'Any homeless child who knocks on our glass doors is greeted with warm hugs, hot chocolate, and fresh cupcakes completely free.'
    }
  ]
};

export const MILESTONES: StoryMilestone[] = [
  {
    year: '1985',
    title: 'Surviving Dadar Railway Station',
    subtitle: 'From darkness to shelter',
    description: 'After years on the railway platforms, 8-year-old Amin was rescued by Father Placido Fonseca and the Snehasadan shelter, where he learned the power of compassionate community.',
    iconName: 'Heart'
  },
  {
    year: '2003',
    title: 'The Journey to Barcelona',
    subtitle: 'A seed planted overseas',
    description: 'During a trip to Spain with his mentor Eustace Fernandez, Amin observed Spanish cafe culture where people from all walks of life mingled over coffee and literature.',
    iconName: 'Compass'
  },
  {
    year: '2012',
    title: 'Publishing "Life is Life"',
    subtitle: '10,000 books sold by hand',
    description: 'Amin wrote his autobiography despite not knowing formal written English. He self-published and sold copies personally to tourists and friends to raise the seed funds.',
    iconName: 'BookOpen'
  },
  {
    year: '2016',
    title: 'bombaycircle Opens Doors',
    subtitle: 'August 15, 2016 in Marol',
    description: 'With funds from the book and small donations, the cafe opened with 8 youth who were former street kids. Within months, it became an international beacon of warmth.',
    iconName: 'Coffee'
  },
  {
    year: 'Today',
    title: 'An Ever-Expanding Circle',
    subtitle: 'Over 50 youth empowered',
    description: 'The circle now operates daily, holds night classes, supports university tuitions, and feeds hundreds of visiting children every month.',
    iconName: 'Sparkles'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Suresh',
    role: 'Head Barista & Roaster',
    origin: 'Came to Snehasadan at age 9',
    favoriteDish: 'Café Bonbon & Churros',
    quote: 'Making coffee here is not just a job. Every cup reminds me that someone believes in my future.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Pooja',
    role: 'Tapas Chef & Baker',
    origin: 'Sheltered at an NGO home in Thane',
    favoriteDish: 'Spanish Tortilla & Basque Cheesecake',
    quote: 'When Spanish volunteers taught me to bake tortillas, I felt like the world was opening its doors to me.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Rohan',
    role: 'Library & Community Host',
    origin: 'Joined bombaycircle in 2019',
    favoriteDish: 'Heritage Vada Pav & Cortado',
    quote: 'I used to be afraid to look people in the eye. Now I welcome visitors from 40 different countries every month.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Nasreen',
    role: 'Guest Relations & Outreach',
    origin: 'Former street youth from Kurla',
    favoriteDish: 'Pink Sauce Penne & Orange Cooler',
    quote: 'Watching street children eat cupcakes with big smiles reminds me of where we all began. We are a family.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  }
];
