export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  date: string;
  rating: number;
  productPurchased: string;
  comment: string;
  verifiedDemoBadge: string;
  commentAr?: string;
  nameAr?: string;
  cityAr?: string;
  productPurchasedAr?: string;
}

export const DEMO_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Sophia B.',
    city: 'Casablanca',
    date: 'Octobre 2026',
    rating: 5,
    productPurchased: 'Bague Solitaire 18K',
    comment: 'La Bague Solitaire est tout simplement époustouflante. La lumière qu’elle projette est magique, et le sertissage est d’une finesse digne des plus grands joailliers de la place Vendôme. Livraison rapide à Casablanca dans un superbe écrin.',
    verifiedDemoBadge: 'Exemple de retour client',
    nameAr: 'صوفيا ب.',
    cityAr: 'الدار البيضاء',
    productPurchasedAr: 'خاتم سوليتير 18 قيراط',
    commentAr: 'خاتم السوليتير مذهل بكل المقاييس. البريق الذي يشع منه ساحر والصياغة في غاية الدقة كأرقى دور المجوهرات العالمية. تم التوصيل بسرعة في الدار البيضاء في علبة فاخرة للغاية.'
  },
  {
    id: 'rev-2',
    name: 'Mehdi A.',
    city: 'Rabat',
    date: 'Septembre 2026',
    rating: 5,
    productPurchased: 'Collier Lumière & Pendentif',
    comment: 'Commandé directement via WhatsApp pour l’anniversaire de mariage de mon épouse. L’équipe m’a conseillé avec un professionnalisme rare et des photos détaillées. Le résultat a dépassé toutes mes espérances.',
    verifiedDemoBadge: 'Exemple de retour client',
    nameAr: 'مهدي ع.',
    cityAr: 'الرباط',
    productPurchasedAr: 'قلادة النور وسلسلة ذهبية',
    commentAr: 'طلبتها مباشرة عبر واتساب بمناسبة ذكرى زواجي. فريق العمل قدّم لي استشارة بمهنية عالية مع صور تفصيلية. النتيجة فاقت كل توقعاتي وكانت المفاجأة رائعة.'
  },
  {
    id: 'rev-3',
    name: 'Kenza L.',
    city: 'Marrakech',
    date: 'Août 2026',
    rating: 5,
    productPurchased: 'Bracelet Royal & Boucles Étoilées',
    comment: 'L’harmonie de l’or champagne et le scintillement des pierres sont incomparables. Porter ces créations apporte une sensation d’élégance immédiate. Très belle découverte joaillière.',
    verifiedDemoBadge: 'Exemple de retour client',
    nameAr: 'كنزة ل.',
    cityAr: 'مراكش',
    productPurchasedAr: 'سوار ملكي وأقراط النجوم',
    commentAr: 'التناغم بين لون الذهب الشمبانيا وبريق الأحجار لا مثيل له. ارتداء هذه القطع يمنح شعوراً فورياً بالرقي والفخامة الملكية. اكتشاف مميز جداً.'
  },
  {
    id: 'rev-4',
    name: 'Yasmine M.',
    city: 'Tanger',
    date: 'Juillet 2026',
    rating: 5,
    productPurchased: 'Parure Impériale',
    comment: 'Une pièce d’exception reçue sous pli scellé et sécurisé avec son certificat d’authenticité. L’attention portée aux moindres finitions témoigne d’un véritable amour du métier.',
    verifiedDemoBadge: 'Exemple de retour client',
    nameAr: 'ياسمين م.',
    cityAr: 'طنجة',
    productPurchasedAr: 'الطقم الإمبراطوري الفاخر',
    commentAr: 'تحفة استثنائية وصلتني في طرد مؤمن مع شهادة الأصالة الرسمية. العناية بأدق التفاصيل والتشطيب تبرز الشغف الحقيقي بفن الصياغة الراقية.'
  }
];
