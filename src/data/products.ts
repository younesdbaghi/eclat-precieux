export interface Product {
  id: string;
  name: string;
  category: 'bagues' | 'colliers' | 'bracelets' | 'boucles';
  price: number; // in MAD / DH
  image: string;
  badge?: 'Coup de cœur' | 'Nouveau' | 'Best-seller' | 'Édition Limitée';
  description: string;
  details: {
    material: string;
    stone: string;
    carat?: string;
    weight: string;
    purity: string;
    certification: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'bague-eternite',
    name: 'Bague Éternité',
    category: 'bagues',
    price: 1490,
    image: '/src/assets/images/collection_rings_diamond_1794500239251.jpg',
    badge: 'Coup de cœur',
    description: 'Une alliance précieuse sertie d’une rangée continue de diamants taillés avec une perfection absolue en or champagne 18 carats.',
    details: {
      material: 'Or Champagne 18K (750/1000)',
      stone: 'Diamants de synthèse haute pureté',
      carat: '0.85 ct total',
      weight: '3.4 g',
      purity: 'Couleur D-F, Clarté VVS1',
      certification: 'Certificat d’authenticité Éclat Précieux & Poinçon d’État'
    }
  },
  {
    id: 'collier-lumiere',
    name: 'Collier Lumière',
    category: 'colliers',
    price: 1250,
    image: '/src/assets/images/collection_necklaces_gold_1794500240074.jpg',
    badge: 'Nouveau',
    description: 'Pendentif solitaire étincelant monté sur une délicate chaîne maille forçat en or 18K, conçu pour capturer et réfracter chaque rayon de lumière.',
    details: {
      material: 'Or Jaune 18K (750/1000)',
      stone: 'Diamant solitaire brillant',
      carat: '0.60 ct',
      weight: '2.8 g',
      purity: 'Couleur E, Clarté VS1',
      certification: 'Certificat de garantie joaillerie & Écrin velours'
    }
  },
  {
    id: 'bracelet-royal',
    name: 'Bracelet Royal',
    category: 'bracelets',
    price: 890,
    image: '/src/assets/images/product_regal_bangle_1794500274746.jpg',
    badge: 'Coup de cœur',
    description: 'Jonc rigide en or précieux sublimé d’un fin pavage de pierres étincelantes sur toute la courbe. Un équilibre parfait entre modernité et majesté.',
    details: {
      material: 'Or 18K poli miroir',
      stone: 'Pavé micro-serti de pierres fines',
      carat: '0.45 ct',
      weight: '6.2 g',
      purity: 'Finition artisanale haute joaillerie',
      certification: 'Certificat d’authenticité & Poinçon de garantie'
    }
  },
  {
    id: 'boucles-etoilees',
    name: 'Boucles Étoilées',
    category: 'boucles',
    price: 690,
    image: '/src/assets/images/product_celestial_earrings_1794500275226.jpg',
    badge: 'Nouveau',
    description: 'Paire de puces d’oreilles au motif céleste éclatant, façonnées comme des constellations d’or et de diamants scintillants.',
    details: {
      material: 'Or Jaune 18K',
      stone: 'Diamants taille brillant',
      carat: '0.40 ct',
      weight: '2.1 g',
      purity: 'Fermoir Alpa sécurisé haute sécurité',
      certification: 'Poinçon officiel & Certificat de conformité'
    }
  },
  {
    id: 'bague-solitaire',
    name: 'Bague Solitaire',
    category: 'bagues',
    price: 1790,
    image: '/src/assets/images/product_solitaire_ring_1794500274844.jpg',
    badge: 'Best-seller',
    description: 'Le summum de l’amour éternel. Un diamant central exceptionnel monté sur un chaton six griffes en or pur 18 carats.',
    details: {
      material: 'Or 18K (750/1000)',
      stone: 'Diamant central taille rond brillant',
      carat: '1.20 ct',
      weight: '4.1 g',
      purity: 'Couleur D (Blanc Exceptionnel +), Clarté VVS2',
      certification: 'Certificat gemmologique complet & Gravure personnalisable'
    }
  },
  {
    id: 'collier-elegance',
    name: 'Collier Élégance',
    category: 'colliers',
    price: 1390,
    image: '/src/assets/images/hero_luxury_jewelry_1794500237915.jpg',
    badge: 'Édition Limitée',
    description: 'Composition majestueuse de motifs floraux articulés en or et diamants, créant une cascade de lumière sur le décolleté.',
    details: {
      material: 'Or Blanc et Or Jaune 18K bicolore',
      stone: 'Ensemble de diamants taille marquise et poire',
      carat: '1.10 ct',
      weight: '5.5 g',
      purity: 'Couleur F, Clarté VS',
      certification: 'Certificat de joaillerie d’art & Poinçon'
    }
  },
  {
    id: 'bracelet-prestige',
    name: 'Bracelet Prestige',
    category: 'bracelets',
    price: 990,
    image: '/src/assets/images/collection_bracelets_gold_1794500254960.jpg',
    badge: 'Nouveau',
    description: 'Bangle moderne pavé à la main de diamants sur trois rangées serrées, fermoir invisible à double cliquet de sécurité.',
    details: {
      material: 'Or Champagne 18K',
      stone: 'Pavé triple rang',
      carat: '0.75 ct',
      weight: '7.8 g',
      purity: 'Polissage joaillier haute brillance',
      certification: 'Garantie à vie contre tout défaut d’atelier'
    }
  },
  {
    id: 'parure-imperiale',
    name: 'Parure Impériale',
    category: 'colliers',
    price: 2490,
    image: '/src/assets/images/product_imperial_parure_1794500276126.jpg',
    badge: 'Coup de cœur',
    description: 'La quintessence de l’art joaillier. Une parure somptueuse composée d’un collier de reine, d’un bracelet articulé et de boucles pendantes.',
    details: {
      material: 'Or 18K (750/1000) massif',
      stone: 'Diamants poires et navettes étincelants',
      carat: '3.50 ct total',
      weight: '16.4 g',
      purity: 'Collection Privée Éclat Précieux',
      certification: 'Livre d’authenticité relié cuir & Assurance transport offerte'
    }
  }
];

export const DEMO_WHATSAPP_NUMBER = '212675148208'; // 0675148208
export const DISPLAY_WHATSAPP_NUMBER = '06 75 14 82 08';
