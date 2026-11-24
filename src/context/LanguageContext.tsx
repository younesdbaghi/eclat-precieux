import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'ar';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string; // Emoji flag 🇫🇷 / 🇲🇦
  countryName: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', countryName: 'France / Maroc' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦', countryName: 'المغرب' },
];

export interface Translations {
  // Navigation
  nav: {
    home: string;
    collections: string;
    jewelry: string;
    about: string;
    reviews: string;
    contact: string;
    concierge: string;
    cart: string;
  };
  // Hero
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaCollection: string;
    ctaContact: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  // Collections
  collections: {
    kicker: string;
    title: string;
    subtitle: string;
    explore: string;
    creationsCount: string;
    items: {
      bagues: { name: string; subtitle: string; quote: string };
      colliers: { name: string; subtitle: string; quote: string };
      bracelets: { name: string; subtitle: string; quote: string };
      boucles: { name: string; subtitle: string; quote: string };
    };
  };
  // Products
  products: {
    kicker: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      bagues: string;
      colliers: string;
      bracelets: string;
      boucles: string;
    };
    currency: string;
    priceLabel: string;
    freeShipping: string;
    orderWhatsApp: string;
    preview: string;
    addToCart: string;
    addedToCart: string;
    ringSizeLabel: string;
    specTitle: string;
    metal: string;
    weight: string;
    stones: string;
    carats: string;
    certifiedHallmark: string;
    freeBox: string;
    moroccoDelivery: string;
    names: Record<string, { name: string; description: string; badge?: string }>;
  };
  // Editorial / Experience
  experience: {
    kicker: string;
    title: string;
    text: string;
    point1Title: string;
    point1Text: string;
    point2Title: string;
    point2Text: string;
    storyBtn: string;
    badgeTitle: string;
    badgeSubtitle: string;
  };
  // Why choose us
  why: {
    kicker: string;
    title: string;
    subtitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
  // Reviews
  reviews: {
    kicker: string;
    title: string;
    subtitle: string;
    demoTag: string;
  };
  // Instagram
  instagram: {
    title: string;
    subtitle: string;
    followBtn: string;
  };
  // Contact
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappBtn: string;
    showroomTitle: string;
    showroomCity: string;
    showroomDemo: string;
    hoursTitle: string;
    hoursVal: string;
    hoursNote: string;
    phoneTitle: string;
    mailTitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    interestLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
  };
  // Cart
  cart: {
    title: string;
    freeShippingBanner: string;
    emptyTitle: string;
    emptyDesc: string;
    discoverBtn: string;
    sizeLabel: string;
    remove: string;
    shippingFormTitle: string;
    nameLabel: string;
    phoneLabel: string;
    cityLabel: string;
    addressLabel: string;
    addressPlaceholder: string;
    paymentNote: string;
    paymentSubNote: string;
    orderSuccessTitle: string;
    orderRef: string;
    orderSuccessDesc: string;
    recipient: string;
    city: string;
    totalAmount: string;
    sendWhatsAppBtn: string;
    subtotal: string;
    orderWhatsAppBtn: string;
    proceedAddressBtn: string;
    backBtn: string;
    confirmBtn: string;
  };
  // Story modal
  story: {
    kicker: string;
    title: string;
    subtitle: string;
    s1Title: string;
    s1Text: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    s2Title: string;
    s2Text: string;
    tagline: string;
    closeBtn: string;
  };
  // Footer
  footer: {
    description: string;
    navTitle: string;
    collectionsTitle: string;
    contactTitle: string;
    showroomCity: string;
    whatsappDisplay: string;
    shippingBadge: string;
    copyright: string;
    demoMention: string;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      collections: 'Collections',
      jewelry: 'Nos bijoux',
      about: 'À propos',
      reviews: 'Avis',
      contact: 'Contact',
      concierge: 'Conciergerie',
      cart: 'Panier',
    },
    hero: {
      kicker: 'Haute Joaillerie • Maison Fondée au Maroc',
      title: '« L\'élégance est un bijou qui ne se démode jamais. »',
      subtitle: 'Découvrez une collection exceptionnelle où chaque détail raconte une histoire d\'or fin, de lumière et d\'éternité.',
      ctaCollection: 'Découvrir la collection',
      ctaContact: 'Nous contacter',
      trust1: 'Or 18K & Diamants Certifiés',
      trust2: 'Poinçon Officiel de Garantie',
      trust3: 'Livraison Sécurisée au Maroc',
    },
    collections: {
      kicker: 'Maison Éclat Précieux',
      title: 'Nos Grandes Collections',
      subtitle: 'Quatre univers d’exception pensés pour sublimer chaque instant. Des créations où la pureté de l’or rencontre la perfection des diamants.',
      explore: 'Explorer la collection',
      creationsCount: 'créations',
      items: {
        bagues: {
          name: 'Bagues & Alliances',
          subtitle: 'Solitaires majestueux et anneaux précieux pavés de diamants',
          quote: 'Le symbole d’une promesse éternelle gravée dans l’or',
        },
        colliers: {
          name: 'Colliers & Pendentifs',
          subtitle: 'Cascades de lumière et pièces maîtresses haute joaillerie',
          quote: 'Une touche de splendeur au creux de votre décolleté',
        },
        bracelets: {
          name: 'Bracelets & Joncs',
          subtitle: 'Lignes épurées et manchettes somptueuses en or 18 carats',
          quote: 'La grâce absolue à chacun de vos gestes',
        },
        boucles: {
          name: 'Boucles d’Oreilles',
          subtitle: 'Puces étincelantes et pendants sculpturaux pour illuminer le visage',
          quote: 'Des scintillements délicats qui captent chaque regard',
        },
      },
    },
    products: {
      kicker: 'Catalogue Privé',
      title: 'Nos Bijoux d\'Exception',
      subtitle: 'Façonnés avec passion en or 18 carats et parés de pierres d’un éclat incomparable. Chaque bijou est livré avec son écrin de prestige et son certificat d’authenticité.',
      filters: {
        all: 'Toutes les créations',
        bagues: 'Bagues',
        colliers: 'Colliers',
        bracelets: 'Bracelets',
        boucles: 'Boucles d’oreilles',
      },
      currency: 'DH',
      priceLabel: 'Prix :',
      freeShipping: 'TTC · Livraison offerte',
      orderWhatsApp: 'Commander sur WhatsApp',
      preview: 'Aperçu',
      addToCart: 'Ajouter au panier',
      addedToCart: 'Ajouté au panier',
      ringSizeLabel: 'Tour de doigt (Taille FR) :',
      specTitle: 'Fiche Joaillère Officielle',
      metal: 'Métal :',
      weight: 'Poids moyen :',
      stones: 'Pierres :',
      carats: 'Poids carats :',
      certifiedHallmark: 'Poinçon certifié',
      freeBox: 'Écrin de luxe offert',
      moroccoDelivery: 'Livraison Maroc',
      names: {
        'bague-eternite': {
          name: 'Bague Éternité',
          description: 'Une alliance précieuse sertie d’une rangée continue de diamants taillés avec une perfection absolue en or champagne 18 carats.',
          badge: 'Coup de cœur',
        },
        'collier-lumiere': {
          name: 'Collier Lumière',
          description: 'Pendentif solitaire étincelant monté sur une délicate chaîne maille forçat en or 18K, conçu pour capturer et réfracter chaque rayon de lumière.',
          badge: 'Nouveau',
        },
        'bracelet-royal': {
          name: 'Bracelet Royal',
          description: 'Jonc rigide en or précieux sublimé d’un fin pavage de pierres étincelantes sur toute la courbe. Un équilibre parfait entre modernité et majesté.',
          badge: 'Coup de cœur',
        },
        'boucles-etoilees': {
          name: 'Boucles Étoilées',
          description: 'Paire de puces d’oreilles au motif céleste éclatant, façonnées comme des constellations d’or et de diamants scintillants.',
          badge: 'Nouveau',
        },
        'bague-solitaire': {
          name: 'Bague Solitaire',
          description: 'Le summum de l’amour éternel. Un diamant central exceptionnel monté sur un chaton six griffes en or pur 18 carats.',
          badge: 'Best-seller',
        },
        'collier-elegance': {
          name: 'Collier Élégance',
          description: 'Composition majestueuse de motifs floraux articulés en or et diamants, créant une cascade de lumière sur le décolleté.',
          badge: 'Édition Limitée',
        },
        'bracelet-prestige': {
          name: 'Bracelet Prestige',
          description: 'Bangle moderne pavé à la main de diamants sur trois rangées serrées, fermoir invisible à double cliquet de sécurité.',
          badge: 'Nouveau',
        },
        'parure-imperiale': {
          name: 'Parure Impériale',
          description: 'La quintessence de l’art joaillier. Une parure somptueuse composée d’un collier de reine, d’un bracelet articulé et de boucles pendantes.',
          badge: 'Coup de cœur',
        },
      },
    },
    experience: {
      kicker: 'Expérience & Joaillerie',
      title: '« Bien plus qu\'un bijou, une émotion éternelle. »',
      text: 'Chez Éclat Précieux, nous célébrons la beauté, le raffinement et les instants précieux. Chaque création est sélectionnée pour sublimer votre élégance.',
      point1Title: 'Métaux Nobles :',
      point1Text: 'Seuls l’or 18 carats et les diamants aux proportions parfaites sont admis dans nos collections.',
      point2Title: 'Finition Miroir :',
      point2Text: 'Un polissage manuel minutieux pour garantir une réflexion scintillante sous chaque éclairage.',
      storyBtn: 'Notre histoire',
      badgeTitle: 'Ateliers Éclat',
      badgeSubtitle: 'Sertissage & Poinçon d\'Art',
    },
    why: {
      kicker: 'Nos Engagements d\'Excellence',
      title: 'Pourquoi Choisir Éclat Précieux',
      subtitle: 'Les quatre piliers fondateurs d\'une expérience joaillière d\'exception.',
      p1Title: 'Élégance Intemporelle',
      p1Desc: 'Des créations pensées pour traverser les époques avec majesté, sans jamais perdre leur éclat d’origine ni leur grâce souveraine.',
      p2Title: 'Sélection Raffinée',
      p2Desc: 'Chaque pierre est inspectée à la loupe de joaillier pour sa pureté, sa taille et sa symétrie géométrique parfaite.',
      p3Title: 'Service Personnalisé',
      p3Desc: 'Conseils joailliers sur-mesure via notre conciergerie WhatsApp pour vous guider dans le choix de votre parure idéale.',
      p4Title: 'Livraison au Maroc',
      p4Desc: 'Expédition sécurisée et discrète dans tout le Royaume sous pli blindé, avec écrin velours de prestige offert.',
    },
    reviews: {
      kicker: 'Exemples de Retours Clients • Démonstration',
      title: 'Ce que nos clients imaginent de nous',
      subtitle: 'Avis fictifs présentés à titre indicatif pour illustrer l\'expérience d\'achat et le service de notre maison.',
      demoTag: 'Exemple de retour client',
    },
    instagram: {
      title: 'L\'univers Éclat Précieux',
      subtitle: 'Plongez dans les coulisses de notre atelier, nos créations joaillières et nos inspirations au quotidien.',
      followBtn: 'Suivez-nous sur Instagram',
    },
    contact: {
      kicker: 'Conciergerie Privée',
      title: '« Un bijou vous fait craquer ? Parlons-en. »',
      subtitle: 'Nos conseillers joailliers sont à votre disposition pour vous orienter, organiser un rendez-vous privé ou personnaliser votre parure d\'exception.',
      whatsappTitle: 'Conseiller WhatsApp Direct',
      whatsappDesc: 'Obtenez des photos supplémentaires, des vidéos sous lumière naturelle et passez commande en direct avec un interlocuteur dédié.',
      whatsappBtn: 'Ouvrir une discussion WhatsApp',
      showroomTitle: 'Showroom Privé',
      showroomCity: 'Boulevard d\'Anfa, Racine, Casablanca',
      showroomDemo: '(Adresse fictive d\'exemple — Démonstration)',
      hoursTitle: 'Horaires d\'accueil',
      hoursVal: 'Lundi au Samedi : 10h00 – 19h30',
      hoursNote: 'Sur rendez-vous personnalisé ou livraison directe',
      phoneTitle: 'Téléphone Conciergerie',
      mailTitle: 'Courriel Dédié',
      formTitle: 'Envoyer une demande privée',
      formSubtitle: 'Remplissez le formulaire ci-dessous. Un conseiller Éclat Précieux vous répondra sous 24 heures ouvrées.',
      nameLabel: 'Votre Nom complet *',
      namePlaceholder: 'Mme / M. ...',
      phoneLabel: 'Téléphone (Maroc ou International) *',
      phonePlaceholder: '+212 6... ou 06...',
      emailLabel: 'Adresse Email *',
      emailPlaceholder: 'votre.email@exemple.com',
      interestLabel: 'Création qui vous intéresse',
      messageLabel: 'Votre message ou vos souhaits *',
      messagePlaceholder: 'Précisez votre demande, vos délais souhaités ou vos questions sur le bijou...',
      submitBtn: 'Transmettre à la joaillerie',
      submittingBtn: 'Transmission en cours...',
      successTitle: 'Message transmis avec succès',
      successDesc: 'Merci. Votre demande a bien été enregistrée pour notre atelier. Vous pouvez également nous contacter directement via WhatsApp.',
      sendAnother: 'Envoyer un autre message',
    },
    cart: {
      title: 'Votre Panier Joaillier',
      freeShippingBanner: 'Livraison offerte sous pli scellé et sécurisé dans tout le Maroc.',
      emptyTitle: 'Votre panier est vide',
      emptyDesc: 'Explorez nos bagues, colliers et bracelets pour composer votre sélection sur-mesure.',
      discoverBtn: 'Découvrir la collection',
      sizeLabel: 'Taille :',
      remove: 'Supprimer',
      shippingFormTitle: 'Coordonnées de livraison au Maroc',
      nameLabel: 'Nom et Prénom *',
      phoneLabel: 'Téléphone joignable *',
      cityLabel: 'Ville de destination *',
      addressLabel: 'Adresse ou quartier de livraison *',
      addressPlaceholder: 'Quartier, résidence ou indication de livraison...',
      paymentNote: 'Paiement à la livraison ou Virement sécurisé',
      paymentSubNote: 'Règlement à la réception après vérification de votre écrin.',
      orderSuccessTitle: 'Merci pour votre confiance',
      orderRef: 'Référence :',
      orderSuccessDesc: 'Un conseiller joaillier vous contactera pour confirmer l\'horaire de remise de votre précieux écrin.',
      recipient: 'Destinataire :',
      city: 'Ville :',
      totalAmount: 'Montant total :',
      sendWhatsAppBtn: 'Envoyer la confirmation sur WhatsApp',
      subtotal: 'Sous-total estimé :',
      orderWhatsAppBtn: 'Commander sur WhatsApp',
      proceedAddressBtn: 'Valider avec adresse de livraison',
      backBtn: 'Retour',
      confirmBtn: 'Confirmer la commande',
    },
    story: {
      kicker: 'La Maison • Ateliers d\'Art',
      title: 'L\'Histoire d\'Éclat Précieux',
      subtitle: 'Héritage, passion de l\'or pur et recherche perpétuelle de l\'éclat parfait.',
      s1Title: 'Une vocation née de l\'émerveillement',
      s1Text: 'Fondée avec la volonté d\'offrir une joaillerie sans compromis, la maison Éclat Précieux puise son inspiration dans la lumière envoûtante du Royaume et la virtuosité des maîtres artisans joailliers. Chaque pièce est le fruit d’un travail d\'orfèvre méticuleux où le métal précieux est sculpté pour devenir une seconde peau.',
      pillar1Title: 'Or 18K Titré',
      pillar1Desc: 'Alliage noble 750/1000 frappé du poinçon légal d\'État.',
      pillar2Title: 'Taille Brillante',
      pillar2Desc: 'Sélection rigoureuse des gemmes selon les normes 4C.',
      pillar3Title: 'Garantie à Vie',
      pillar3Desc: 'Suivi, nettoyage et polissage offerts pour chaque client.',
      s2Title: 'L\'engagement d\'une signature éternelle',
      s2Text: 'Pour nous, un bijou n\'est pas un simple ornement : c\'est le gardien de vos souvenirs les plus précieux — fiançailles, naissances, réussites et déclarations d\'amour. Nous croyons que le vrai luxe réside dans l\'émotion intemporelle qu\'il procure dès l\'ouverture de son écrin.',
      tagline: 'Conçu avec passion et raffinement',
      closeBtn: 'Fermer la fenêtre',
    },
    footer: {
      description: 'Maison de haute joaillerie et d’orfèvrerie contemporaine. Créations exclusives en or pur 18 carats et diamants étincelants, façonnées pour immortaliser vos plus précieux instants.',
      navTitle: 'Navigation',
      collectionsTitle: 'Collections',
      contactTitle: 'Atelier & Contact',
      showroomCity: 'Showroom Privé — Casablanca, Maroc',
      whatsappDisplay: 'WhatsApp : 06 75 14 82 08',
      shippingBadge: 'Expéditions sécurisées au Maroc',
      copyright: 'Tous droits réservés. Haute Joaillerie & Orfèvrerie.',
      demoMention: 'Site vitrine de démonstration réalisé par Studio Digital',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      collections: 'المجموعات',
      jewelry: 'مجوهراتنا',
      about: 'عن الدار',
      reviews: 'آراء الزبائن',
      contact: 'اتصل بنا',
      concierge: 'خدمة الزبائن',
      cart: 'السلة',
    },
    hero: {
      kicker: 'مجوهرات فاخرة • دار مغربية أصيلة',
      title: '« الأناقة جوهرة لا تفقد بريقها أبداً. »',
      subtitle: 'اكتشفوا تشكيلة استثنائية من الذهب الخالص والألماس حيث تروي كل قطعة قصة خالدة من النقاء والبريق الأبدي.',
      ctaCollection: 'اكتشف المجموعة',
      ctaContact: 'تواصل معنا',
      trust1: 'ذهب 18 قيراط وألماس معتمد',
      trust2: 'طابع رسمي للضمان',
      trust3: 'توصيل آمن لجميع مدن المغرب',
    },
    collections: {
      kicker: 'دار إكلات بريسيو',
      title: 'مجموعاتنا الكبرى',
      subtitle: 'أربعة عوالم استثنائية صُممت لتخليد كل لحظة. إبداعات يلتقي فيها نقاء الذهب بسحر الألماس.',
      explore: 'استكشف المجموعة',
      creationsCount: 'قطعة',
      items: {
        bagues: {
          name: 'خواتم ودبالم فاخرة',
          subtitle: 'سوليتير مهيب وخواتم زفاف مرصعة بالألماس البراق',
          quote: 'رمز الوعد الأبدي المحفور في الذهب الخالص',
        },
        colliers: {
          name: 'قلادات وسلاسل راقية',
          subtitle: 'شلالات من النور وقطع مركزية من الذهب والألماس',
          quote: 'لمسة من السحر الملكي تُزين إطلالتك',
        },
        bracelets: {
          name: 'أساور وأطواق ذهبية',
          subtitle: 'خطوط هندسية عصرية وأساور صلبة عيار 18 قيراط',
          quote: 'جمال مطلق ورقة في كل حركة من حركاتك',
        },
        boucles: {
          name: 'أقراط مرصعة بالألماس',
          subtitle: 'أقراط دقيقة ومتدلية مصممة لتضيء ملامح الوجه',
          quote: 'بريق ساحر يجذب كل الأنظار',
        },
      },
    },
    products: {
      kicker: 'الدليل الخاص',
      title: 'مجوهراتنا الاستثنائية',
      subtitle: 'صُممت بكل شغف من الذهب عيار 18 قيراط ورُصعت بأحجار ذات بريق لا مثيل له. تصلك كل قطعة في علبة فاخرة مع شهادة الأصالة.',
      filters: {
        all: 'جميع الإبداعات',
        bagues: 'خواتم',
        colliers: 'قلادات',
        bracelets: 'أساور',
        boucles: 'أقراط',
      },
      currency: 'د.م',
      priceLabel: 'السعر :',
      freeShipping: 'شامل للضريبة · توصيل مجاني',
      orderWhatsApp: 'اطلب عبر واتساب',
      preview: 'معاينة',
      addToCart: 'أضف إلى السلة',
      addedToCart: 'تمت الإضافة للسلة',
      ringSizeLabel: 'مقاس الخاتم (المقاس الفرنسي) :',
      specTitle: 'بطاقة المواصفات الرسمية',
      metal: 'المعدن :',
      weight: 'الوزن التقريبي :',
      stones: 'الأحجار :',
      carats: 'وزن القيراط :',
      certifiedHallmark: 'طابع معتمد',
      freeBox: 'علبة فاخرة مهداة',
      moroccoDelivery: 'توصيل في المغرب',
      names: {
        'bague-eternite': {
          name: 'خاتم الأبدية',
          description: 'دبلة مرصعة بصف متصل من الألماس المقطوع بدقة متناهية من الذهب الشمبانيا عيار 18 قيراط.',
          badge: 'الأكثر إعجاباً',
        },
        'collier-lumiere': {
          name: 'قلادة النور',
          description: 'قلادة سوليتير متلألئة مع سلسلة ناعمة من الذهب عيار 18 قيراط، تعكس كل خيط من أشعة الضوء.',
          badge: 'جديد',
        },
        'bracelet-royal': {
          name: 'سوار ملكي',
          description: 'سوار صلب فاخر من الذهب مرصع بصف أنيق من الأحجار اللامعة على كامل المحيط.',
          badge: 'الأكثر إعجاباً',
        },
        'boucles-etoilees': {
          name: 'أقراط النجوم',
          description: 'زوج من الأقراط المستوحاة من بريق النجوم في السماء، مصنوعة من الذهب والألماس البراق.',
          badge: 'جديد',
        },
        'bague-solitaire': {
          name: 'خاتم سوليتير',
          description: 'قمة التعبير عن الحب الأبدي. ألماسة مركزية استثنائية مثبتة على قاعدة من الذهب النقي عيار 18 قيراط.',
          badge: 'الأكثر مبيعاً',
        },
        'collier-elegance': {
          name: 'قلادة الأناقة',
          description: 'تكوين ملوكي مستوحى من الأزهار بالذهب الأبيض والأصفر والألماس الفاخر.',
          badge: 'إصدار محدود',
        },
        'bracelet-prestige': {
          name: 'سوار بريستيج',
          description: 'سوار عصري مرصع يدوياً بثلاثة صفوف متراصة من الألماس مع قفل أمان مزدوج غير مرئي.',
          badge: 'جديد',
        },
        'parure-imperiale': {
          name: 'طقم إمبراطوري',
          description: 'قمة الإبداع في صياغة المجوهرات. طقم فاخر مكوّن من قلادة ملوكية، سوار متناسق وأقراط متدلية.',
          badge: 'الأكثر إعجاباً',
        },
      },
    },
    experience: {
      kicker: 'تجربة وفن المجوهرات',
      title: '« أكثر من مجرد مجوهرة، إحساس خالد. »',
      text: 'في دار إكلات بريسيو، نحتفي بالجمال والرقي واللحظات الثمينة. يتم اختيار وتصميم كل قطعة لتُبرز أناقتك وتمنحك إطلالة ملكية ساحرة.',
      point1Title: 'معادن نفيسة :',
      point1Text: 'نعتمد حصرياً الذهب عيار 18 قيراط والأحجار ذات التناسب الهندسي الكامل والمثالي.',
      point2Title: 'صقل يدوي متقن :',
      point2Text: 'تلميع يدوي دقيق يضمن بريقاً استثنائياً يدوم إلى الأبد ويعكس الضوء من كل زاوية.',
      storyBtn: 'قصة الدار',
      badgeTitle: 'ورشات إكلات',
      badgeSubtitle: 'صياغة وطابع رسمي',
    },
    why: {
      kicker: 'التزاماتنا بالتميز',
      title: 'لماذا تختار إكلات بريسيو',
      subtitle: 'الركائز الأربع التي تبني تجربة مجوهرات استثنائية.',
      p1Title: 'أناقة خالدة',
      p1Desc: 'إبداعات صُممت لتعبر الأجيال بكل هيبة وفخامة دون أن تفقد رونقها الأصيل.',
      p2Title: 'تشكيلة راقية',
      p2Desc: 'فحص مجهري دقيق لكل ألماسة لضمان أقصى درجات النقاء واللمعان والقطع المتوازن.',
      p3Title: 'خدمة مخصصة',
      p3Desc: 'استشارات فردية متواصلة عبر واتساب لمرافقتكم في اختيار وتنسيق مجوهراتكم.',
      p4Title: 'توصيل في المغرب',
      p4Desc: 'شحن آمن وسريع في طرد محكم لجميع مدن المملكة مع علبة مخملية فاخرة مجانية.',
    },
    reviews: {
      kicker: 'نماذج من آراء الزبائن • تجربة توضيحية',
      title: 'ما يقوله زبائننا عن تجربتهم',
      subtitle: 'آراء توضيحية تعكس جودة الإبداع ومستوى العناية الخاصة بكل عميل.',
      demoTag: 'نموذج لرأي زبون',
    },
    instagram: {
      title: 'عالم إكلات بريسيو',
      subtitle: 'انضموا إلينا خلف كواليس الورشات لاكتشاف أحدث الإبداعات والمجوهرات الحصرية.',
      followBtn: 'تابعونا على إنستغرام',
    },
    contact: {
      kicker: 'خدمة الاستقبال الخاصة',
      title: '« هل نالت إحدى قطعنا إعجابك؟ لنتحدث عنها. »',
      subtitle: 'مستشارونا رهن إشارتكم لتزويدكم بكافة التفاصيل، حجز موعد خاص أو تخصيص طلبكم وفق رغبتكم.',
      whatsappTitle: 'محادثة مباشرة عبر واتساب',
      whatsappDesc: 'تواصلوا مباشرة مع مستشارنا للحصول على صور وفيديوهات إضافية وطلب قطعتكم بسهولة.',
      whatsappBtn: 'فتح محادثة عبر واتساب',
      showroomTitle: 'صالة عرض خاصة',
      showroomCity: 'شارع أنفا، راسين، الدار البيضاء',
      showroomDemo: '(عنوان توضيحي للتجربة)',
      hoursTitle: 'أوقات العمل',
      hoursVal: 'من الاثنين إلى السبت : 10:00 – 19:30',
      hoursNote: 'عبر موعد خاص أو طلب توصيل مباشر',
      phoneTitle: 'هاتف الاستقبال',
      mailTitle: 'البريد الإلكتروني المخصص',
      formTitle: 'إرسال طلب خاص',
      formSubtitle: 'املأ الاستمارة وسيجيبك مستشار دار إكلات بريسيو خلال أقل من 24 ساعة.',
      nameLabel: 'الاسم الكامل *',
      namePlaceholder: 'السيد(ة) ...',
      phoneLabel: 'رقم الهاتف (المغرب أو دولي) *',
      phonePlaceholder: '06... أو 212+ ...',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'votre.email@exemple.com',
      interestLabel: 'القطعة التي تهمكم',
      messageLabel: 'رسالتكم أو تفاصيل طلبكم *',
      messagePlaceholder: 'اكتب تفاصيل طلبك أو استفسارك حول القطعة أو موعد التوصيل المطلوب...',
      submitBtn: 'إرسال الطلب إلى الدار',
      submittingBtn: 'جاري الإرسال...',
      successTitle: 'تم إرسال طلبكم بنجاح',
      successDesc: 'شكراً لكم. تم تسجيل طلبكم وسيتواصل معكم مستشارنا في أقرب وقت. يمكنكم أيضاً مراسلتنا مباشرة عبر واتساب.',
      sendAnother: 'إرسال طلب آخر',
    },
    cart: {
      title: 'سلة المجوهرات الخاصة بك',
      freeShippingBanner: 'توصيل مجاني في طرد محكم ومؤمن في جميع أنحاء المغرب.',
      emptyTitle: 'سلتك فارغة حالياً',
      emptyDesc: 'تصفح تشكيلة الخواتم والقلادات والأساور لاختيار قطعتك المفضلة.',
      discoverBtn: 'استكشف التشكيلة',
      sizeLabel: 'المقاس :',
      remove: 'حذف',
      shippingFormTitle: 'معلومات التوصيل بالمغرب',
      nameLabel: 'الاسم الكامل *',
      phoneLabel: 'رقم الهاتف للتواصل *',
      cityLabel: 'مدينة التوصيل *',
      addressLabel: 'العنوان أو الحي *',
      addressPlaceholder: 'الحي، الإقامة أو تفاصيل التوصيل...',
      paymentNote: 'الدفع عند الاستلام أو عبر تحويل بنكي مؤمن',
      paymentSubNote: 'يتم الأداء بعد معاينة العلبة والتأكد من القطعة.',
      orderSuccessTitle: 'شكراً لثقتكم الغالية',
      orderRef: 'رقم الطلب :',
      orderSuccessDesc: 'سيتصل بكم مستشارنا لتأكيد موعد وساعة تسليم علبتكم الفاخرة.',
      recipient: 'المستلم :',
      city: 'المدينة :',
      totalAmount: 'المبلغ الإجمالي :',
      sendWhatsAppBtn: 'إرسال تأكيد الطلب عبر واتساب',
      subtotal: 'المجموع التقريبي :',
      orderWhatsAppBtn: 'اطلب عبر واتساب',
      proceedAddressBtn: 'تأكيد معلومات التوصيل',
      backBtn: 'رجوع',
      confirmBtn: 'تأكيد الطلب الآن',
    },
    story: {
      kicker: 'الدار • ورشات الصياغة الفاخرة',
      title: 'قصة دار إكلات بريسيو',
      subtitle: 'تراث أصيل، شغف بالذهب النقي وبحث دائم عن الإشراقة الأبدية.',
      s1Title: 'رسالة وُلدت من الشغف والجمال',
      s1Text: 'تأسست دار إكلات بريسيو بهدف تقديم مجوهرات استثنائية دون أي مساومة على الجودة، مستلهمة روحها من نور المملكة الساحر وخبرة كبار الصاغة والحرفيين. كل قطعة هي ثمرة ساعات من العمل الدقيق حيث يُشكل الذهب الخالص ليصبح قطعة فنية تفيض بالأنوثة والرقي.',
      pillar1Title: 'ذهب 18 قيراط رسمي',
      pillar1Desc: 'سبيكة نقية 750/1000 تحمل طابع الضمان القانوني الرسمي.',
      pillar2Title: 'قطع بريلينت متألق',
      pillar2Desc: 'انتقاء صارم لأحجار الألماس وفق أعلى المعايير العالمية.',
      pillar3Title: 'ضمان دائم',
      pillar3Desc: 'خدمات التلميع والتنظيف المجانية لجميع عملائنا الكرام.',
      s2Title: 'التزام ببصمة خالدة لا تزول',
      s2Text: 'بالنسبة لنا، المجوهرة ليست مجرد حلية عادية؛ بل هي حافظة لأجمل لحظات العمر — خطوبة، زواج، احتفال بنجاح أو هدية حب لا تُنسى. نؤمن بأن الفخامة الحقيقية تكمن في البهجة التي تُشعر بها لحظة فتح العلبة المخملية.',
      tagline: 'صُنعت بحب وعناية فائقة',
      closeBtn: 'إغلاق النافذة',
    },
    footer: {
      description: 'دار لصياغة المجوهرات الراقية والتصاميم الحصرية من الذهب الخالص عيار 18 قيراط والألماس البراق، صُممت لتخليد أثمن اللحظات.',
      navTitle: 'روابط سريعة',
      collectionsTitle: 'المجموعات',
      contactTitle: 'الورشة والتواصل',
      showroomCity: 'صالة العرض الخاصة — الدار البيضاء، المغرب',
      whatsappDisplay: 'واتساب : 06 75 14 82 08',
      shippingBadge: 'شحن آمن لجميع مدن المغرب',
      copyright: 'جميع الحقوق محفوظة. دار إكلات بريسيو للمجوهرات الفاخرة.',
      demoMention: 'موقع تجريبي من إنجاز Studio Digital',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('eclat_precieux_lang') as Language;
      return saved === 'ar' || saved === 'fr' ? saved : 'fr';
    } catch {
      return 'fr';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('eclat_precieux_lang', lang);
    } catch {
      // ignore
    }
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language],
        dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
