export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  caption: string;
  tag: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: '/src/assets/images/collection_rings_diamond_1794500239251.jpg',
    likes: 428,
    caption: 'Lumière et pureté. Nos alliances en or 18 carats façonnées dans le secret de nos ateliers.',
    tag: '#EclatPrecieux'
  },
  {
    id: 'ig-2',
    image: '/src/assets/images/product_solitaire_ring_1794500274844.jpg',
    likes: 612,
    caption: 'Le solitaire réinventé : un diamant pur capturant chaque nuance de l’aurore.',
    tag: '#HauteJoaillerie'
  },
  {
    id: 'ig-3',
    image: '/src/assets/images/collection_necklaces_gold_1794500240074.jpg',
    likes: 389,
    caption: 'Une touche de lumière dorée sur velours noir. La délicatesse du Collier Lumière.',
    tag: '#Or18K'
  },
  {
    id: 'ig-4',
    image: '/src/assets/images/product_regal_bangle_1794500274746.jpg',
    likes: 531,
    caption: 'Jonc Royal. Pureté des lignes et éclat des micro-pierres serties à la main.',
    tag: '#LuxuryJewelry'
  },
  {
    id: 'ig-5',
    image: '/src/assets/images/product_celestial_earrings_1794500275226.jpg',
    likes: 477,
    caption: 'Inspirées par le ciel étoilé du désert marocain. Boucles Célestes 18 carats.',
    tag: '#PreciousMoments'
  },
  {
    id: 'ig-6',
    image: '/src/assets/images/product_imperial_parure_1794500276126.jpg',
    likes: 894,
    caption: 'Pièce maîtresse de notre collection impériale. L’art joaillier à son apogée.',
    tag: '#RoyalElegance'
  }
];
