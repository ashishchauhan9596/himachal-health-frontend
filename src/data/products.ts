export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  imageUrl: string;
  tags: string[];
  moq: string;
  leadTime: string;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'housekeeping-chemicals',
    name: 'Housekeeping Chemicals',
    slug: 'housekeeping-chemicals',
    description: 'Professional cleaning solutions for all surfaces',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17',
    productCount: 8
  },
  {
    id: 'kitchen-products',
    name: 'Kitchen Products',
    slug: 'kitchen-products',
    description: 'Specialized cleaning solutions for kitchen areas',
    imageUrl: 'https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    productCount: 3
  },
  {
    id: 'laundry-chemicals',
    name: 'Laundry Chemicals',
    slug: 'laundry-chemicals',
    description: 'Professional laundry care solutions',
    imageUrl: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c',
    productCount: 5
  },
  {
    id: 'disinfectants',
    name: 'Disinfectants',
    slug: 'disinfectants',
    description: 'Hospital-grade disinfection solutions',
    imageUrl: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b',
    productCount: 5
  },
  {
    id: 'paper-products',
    name: 'Paper Products',
    slug: 'paper-products',
    description: 'High-quality paper and tissue products',
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    productCount: 7
  }
];

export const products: Product[] = [
  // Housekeeping Chemicals
  {
    id: 'taski-r1',
    name: 'Taski R1',
    description: 'Professional bathroom cleaner and sanitizer. Effectively removes limescale, soap scum, body fat and other washroom soils. Safe on chrome and stainless steel fixtures.',
    brand: 'Diversey',
    category: 'housekeeping-chemicals',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['bathroom', 'sanitizer', 'cleaner', 'limescale-remover'],
    moq: '1 Case (5L x 2 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: 'phenyl-concentrate',
    name: 'Phenyl Concentrate',
    description: 'Premium black phenyl concentrate with long-lasting fragrance. Effective against a wide range of bacteria. Ideal for mopping floors and general surface cleaning.',
    brand: 'grand-chemicals',
    category: 'housekeeping-chemicals',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['floor', 'cleaner', 'disinfectant', 'concentrated'],
    moq: '1 Case (5L x 4 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: 'glass-cleaner',
    name: 'Glass & Surface Cleaner',
    description: 'Ammonia-free glass cleaner that leaves no streaks. Perfect for cleaning windows, mirrors, and glass surfaces. Quick-drying formula.',
    brand: '3m',
    category: 'housekeeping-chemicals',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['glass', 'mirror', 'streak-free', 'ammonia-free'],
    moq: '1 Case (750ml x 12 units)',
    leadTime: '3-4 days',
    location: 'Baddi, HP'
  },

  // Kitchen Products
  {
    id: 'suma-shine',
    name: 'Suma Shine D1',
    description: 'Professional-grade manual dishwashing liquid. High foam formula with excellent grease-cutting properties. Gentle on hands with pleasant citrus fragrance.',
    brand: 'Diversey',
    category: 'kitchen-products',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['kitchen', 'dishwash', 'cleaner', 'grease-cutter'],
    moq: '1 Case (5L x 2 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: 'kitchen-sanitizer',
    name: 'Kitchen Surface Sanitizer',
    description: 'Food-grade sanitizer for kitchen surfaces. Kills 99.9% of bacteria. No-rinse formula safe for food contact surfaces. QAC-based broad spectrum sanitizer.',
    brand: 'Microgen Healthcare',
    category: 'kitchen-products',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['kitchen', 'sanitizer', 'food-grade', 'no-rinse'],
    moq: '1 Case (1L x 12 units)',
    leadTime: '3-4 days',
    location: 'Baddi, HP'
  },
  {
    id: 'degreaser',
    name: 'Heavy Duty Degreaser',
    description: 'Powerful alkaline degreaser for tough kitchen soils. Effectively removes carbonized grease and burnt-on food. Ideal for ovens, grills, and deep fryers.',
    brand: 'Diversey',
    category: 'kitchen-products',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['kitchen', 'degreaser', 'heavy-duty', 'oven-cleaner'],
    moq: '1 Case (5L x 2 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },

  // Laundry Chemicals
  {
    id: 'clax-main',
    name: 'Clax Main 10A1',
    description: 'Professional main wash detergent for industrial laundry. Contains optical brighteners and enzymes. Effective in all water conditions. Suitable for all fabric types except wool and silk.',
    brand: 'Diversey',
    category: 'laundry-chemicals',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['laundry', 'detergent', 'main-wash', 'industrial'],
    moq: '1 Drum (50L)',
    leadTime: '3-4 days',
    location: 'Baddi, HP'
  },
  {
    id: 'fabric-softener',
    name: 'Premium Fabric Softener',
    description: 'Concentrated fabric softener with long-lasting fragrance. Reduces static cling and wrinkles. Makes fabrics soft and fluffy. pH balanced formula.',
    brand: 'Raman And Weil',
    category: 'laundry-chemicals',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['laundry', 'softener', 'premium', 'concentrated'],
    moq: '1 Case (5L x 4 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: 'stain-remover',
    name: 'Professional Stain Remover',
    description: 'Powerful stain remover for tough spots and stains. Safe on colorfast fabrics. Removes blood, grass, oil, and food stains. Contains active oxygen bleach.',
    brand: 'Diversey',
    category: 'laundry-chemicals',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['laundry', 'stain-remover', 'spot-cleaner', 'oxygen-bleach'],
    moq: '1 Case (1L x 12 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },

  // Disinfectants
  {
    id: 'virex',
    name: 'Virex II 256',
    description: 'Hospital-grade quaternary disinfectant cleaner. Effective against a broad spectrum of pathogens. EPA registered with 1:256 dilution ratio. 10-minute contact time.',
    brand: 'Diversey',
    category: 'disinfectants',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['disinfectant', 'hospital', 'cleaner', 'quaternary'],
    moq: '1 Case (5L x 2 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: 'hand-sanitizer',
    name: 'Advanced Hand Sanitizer',
    description: '70% alcohol-based hand sanitizer following WHO formula. Kills 99.9% of germs. Contains moisturizers to prevent drying. Quick-drying gel format.',
    brand: 'Microgen Healthcare',
    category: 'disinfectants',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['sanitizer', 'hand-hygiene', 'alcohol-based', 'who-formula'],
    moq: '1 Case (500ml x 24 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: 'surface-disinfectant',
    name: 'Surface Disinfectant Spray',
    description: 'Ready-to-use surface disinfectant spray. Effective against bacteria, viruses, and fungi. Safe on most surfaces. Pleasant fragrance.',
    brand: 'Raman And Weil',
    category: 'disinfectants',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['disinfectant', 'spray', 'ready-to-use', 'multi-surface'],
    moq: '1 Case (750ml x 12 units)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },

  // Paper Products
  {
    id: 'toilet-roll',
    name: 'Premium Toilet Roll',
    description: '2-ply premium quality toilet tissue roll. 100% virgin pulp. Soft and strong. 200 sheets per roll. Individually wrapped.',
    brand: 'Nilkamal',
    category: 'paper-products',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['tissue', 'toilet', 'paper', '2-ply'],
    moq: '1 Case (10 rolls)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: 'c-fold-towel',
    name: 'C-Fold Hand Towel',
    description: 'High-quality paper hand towels for washrooms. Single-ply white. Quick absorption. 150 sheets per pack. Compatible with standard dispensers.',
    brand: '3m',
    category: 'paper-products',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['paper', 'hand-towel', 'washroom', 'c-fold'],
    moq: '1 Case (20 packets)',
    leadTime: '3-4 days',
    location: 'Baddi, HP'
  },
  {
    id: 'facial-tissue',
    name: 'Premium Facial Tissue',
    description: '2-ply facial tissues. Extra soft and strong. 100 sheets per box. Perfect for offices and hotels. Premium quality virgin pulp.',
    brand: 'Nilkamal',
    category: 'paper-products',
    imageUrl: '/images/products/placeholder.svg',
    tags: ['tissue', 'facial', 'paper', 'premium'],
    moq: '1 Case (30 boxes)',
    leadTime: '2-3 days',
    location: 'Baddi, HP'
  },
  {
    id: "kitchen-cleaning",
    name: "Kitchen Cleaning Products",
    description: "Professional-grade kitchen cleaning and sanitizing solutions for commercial kitchens",
    brand: "CleanPro",
    category: "Cleaning",
    imageUrl: "https://www.istockphoto.com/photo/commercial-kitchen-cleaning-supplies",
    tags: ["Kitchen", "Cleaning", "Sanitizing", "Commercial"],
    moq: "10",
    leadTime: "3-5 days",
    location: "Himachal Pradesh"
  },
  {
    id: "laundry-solutions", 
    name: "Laundry Solutions",
    description: "Industrial laundry detergents and chemicals for commercial laundry facilities",
    brand: "WashPro",
    category: "Cleaning",
    imageUrl: "https://www.istockphoto.com/photo/commercial-laundry-facility",
    tags: ["Laundry", "Cleaning", "Commercial", "Industrial"],
    moq: "20",
    leadTime: "3-5 days",
    location: "Himachal Pradesh"
  },
  {
    id: "housekeeping-supplies",
    name: "Housekeeping Supplies",
    description: "Complete range of professional housekeeping and cleaning supplies",
    brand: "CleanPro",
    category: "Cleaning", 
    imageUrl: "https://www.istockphoto.com/photo/cleaning-supplies-commercial",
    tags: ["Housekeeping", "Cleaning", "Commercial", "Supplies"],
    moq: "15",
    leadTime: "2-4 days",
    location: "Himachal Pradesh"
  }
];

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export const brands: Brand[] = [
  {
    id: 'diversey',
    name: 'Diversey',
    logo: '/images/brands/diversey-holdings-seeklogo-2.svg',
    description: 'Global leader in professional cleaning and hygiene solutions'
  },
  {
    id: 'nilkamal',
    name: 'Nilkamal',
    logo: '/images/brands/nilkamal-seeklogo.png',
    description: 'Leading manufacturer of furniture and material handling products'
  },
  {
    id: 'dabur',
    name: 'Dabur',
    logo: '/images/brands/dabur-seeklogo.png',
    description: 'Trusted name in natural healthcare and personal care products'
  },
  {
    id: 'raman-and-weil',
    name: 'Raman And Weil',
    logo: '/images/brands/RW_Logo.png',
    description: 'Specialists in infection control and hygiene solutions'
  },
  {
    id: 'microgen',
    name: 'Microgen Healthcare',
    logo: '/images/brands/microgen.jpg',
    description: 'Innovative healthcare and hygiene product solutions'
  },
  {
    id: '3m',
    name: '3M',
    logo: '/images/brands/3m-color-seeklogo.png',
    description: 'Global leader in innovative cleaning and maintenance solutions'
  },
  {
    id: 'grand-chemicals',
    name: 'Grand Chemicals',
    logo: '/images/brands/grandChemical.png',
    description: 'Renowned manufacturer of Gainda Phenyl and cleaning products'
  }
]; 