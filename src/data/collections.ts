export interface CollectionCategory {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  count: number;
  featuredQuote: string;
  aspect: string;
}

export const COLLECTIONS_DATA: CollectionCategory[] = [
  {
    id: 'bagues',
    name: 'Bagues & Alliances',
    subtitle: 'Solitaires majestueux et anneaux précieux pavés de diamants',
    image: '/src/assets/images/collection_rings_diamond_1794500239251.jpg',
    count: 14,
    featuredQuote: 'Le symbole d’une promesse éternelle gravée dans l’or',
    aspect: 'md:col-span-2'
  },
  {
    id: 'colliers',
    name: 'Colliers & Pendentifs',
    subtitle: 'Cascades de lumière et pièces maîtresses haute joaillerie',
    image: '/src/assets/images/collection_necklaces_gold_1794500240074.jpg',
    count: 18,
    featuredQuote: 'Une touche de splendeur au creux de votre décolleté',
    aspect: 'md:col-span-1'
  },
  {
    id: 'bracelets',
    name: 'Bracelets & Joncs',
    subtitle: 'Lignes épurées et manchettes somptueuses en or 18 carats',
    image: '/src/assets/images/collection_bracelets_gold_1794500254960.jpg',
    count: 12,
    featuredQuote: 'La grâce absolue à chacun de vos gestes',
    aspect: 'md:col-span-1'
  },
  {
    id: 'boucles',
    name: 'Boucles d’Oreilles',
    subtitle: 'Puces étincelantes et pendants sculpturaux pour illuminer le visage',
    image: '/src/assets/images/collection_earrings_diamond_1794500254356.jpg',
    count: 16,
    featuredQuote: 'Des scintillements délicats qui captent chaque regard',
    aspect: 'md:col-span-2'
  }
];
