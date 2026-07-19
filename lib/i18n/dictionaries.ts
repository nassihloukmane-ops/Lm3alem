export type Locale = "fr" | "ar" | "en";

export const LOCALES: Locale[] = ["fr", "ar", "en"];
export const LOCALE_STORAGE_KEY = "lmaalem-locale";

export const localeMeta: Record<
  Locale,
  { label: string; htmlLang: string; dir: "ltr" | "rtl" }
> = {
  fr: { label: "FR", htmlLang: "fr-MA", dir: "ltr" },
  ar: { label: "ع", htmlLang: "ar-MA", dir: "rtl" },
  en: { label: "EN", htmlLang: "en", dir: "ltr" },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "fr" || value === "ar" || value === "en";
}

export type Dictionary = {
  nav: {
    aria: string;
    home: string;
    demande: string;
    features: string;
    how: string;
    trades: string;
    artisans: string;
    faq: string;
    download: string;
    downloadApp: string;
    themeLight: string;
    themeDark: string;
    lang: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    brandAr: string;
    title: string;
    subtitle: string;
    ctaDownload: string;
    ctaHow: string;
  };
  trust: {
    title: string;
    items: [string, string, string, string];
  };
  forWho: {
    title: string;
    subtitle: string;
    clientTitle: string;
    clientText: string;
    clientCta: string;
    artisanTitle: string;
    artisanText: string;
    artisanCta: string;
  };
  demande: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
    ctaTry: string;
    ctaHow: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  how: {
    title: string;
    subtitle: string;
    tabClient: string;
    tabArtisan: string;
    clientSteps: { title: string; description: string }[];
    artisanSteps: { title: string; description: string }[];
    cta: string;
  };
  trades: {
    title: string;
    subtitle: string;
    names: string[];
    footer: string;
  };
  artisans: {
    title: string;
    text: string;
    cta: string;
    whyTitle: string;
    whyItems: { title: string; text: string }[];
    whyCta: string;
  };
  download: {
    title: string;
    subtitle: string;
    scan: string;
    available: string;
    appStoreAria: string;
    playAria: string;
    appStoreTop: string;
    appStoreName: string;
    playTop: string;
    playName: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    ctaTitle: string;
    ctaText: string;
    ctaDownload: string;
    ctaArtisan: string;
    tagline: string;
    location: string;
    product: string;
    legal: string;
    download: string;
    about: string;
    privacy: string;
    terms: string;
    contact: string;
    arabicTag: string;
    rights: string;
    madeFor: string;
  };
  phone: {
    aria: string;
    header: string;
    categoriesTitle: string;
    descTitle: string;
    descPlaceholder: string;
    voice: string;
    confirm: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    nav: {
      aria: "Navigation principale",
      home: "Accueil",
      demande: "Demande",
      features: "Fonctionnalités",
      how: "Parcours",
      trades: "Métiers",
      artisans: "Artisans",
      faq: "FAQ",
      download: "Télécharger",
      downloadApp: "Télécharger l'app",
      themeLight: "Passer en mode clair",
      themeDark: "Passer en mode sombre",
      lang: "Changer de langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      brandAr: "المْعَلَّم",
      title: "La solution rapide pour vos services à domicile",
      subtitle:
        "Réservez des professionnels vérifiés près de chez vous en quelques minutes.",
      ctaDownload: "Télécharger lm3alem",
      ctaHow: "Voir comment ça marche",
    },
    trust: {
      title: "Des pros vérifiés, près de chez toi",
      items: [
        "Artisans vérifiés",
        "Avis clients authentiques",
        "Matching par proximité",
        "Missions confirmées (QR)",
      ],
    },
    forWho: {
      title: "Pour qui est lm3alem ?",
      subtitle:
        "Une app, deux expériences — trouver un expert ou recevoir des missions.",
      clientTitle: "Tu as besoin d’un pro",
      clientText:
        "Urgence ou chantier planifié, sans perdre de temps. Trouve un artisan vérifié près de chez toi et réserve en quelques minutes.",
      clientCta: "Trouver un pro",
      artisanTitle: "Tu es artisan ou employé",
      artisanText:
        "Visibilité locale, missions qualifiées, coordination in-app. Développe ta réputation avec des avis réels.",
      artisanCta: "Devenir artisan",
    },
    demande: {
      eyebrow: "Page demande",
      title: "Créez une demande, trouvez un expert près de chez vous",
      subtitle:
        "Décrivez votre besoin, choisissez le métier, comparez les pros vérifiés à proximité, puis réservez en un tap.",
      steps: [
        {
          title: "Nouvelle demande",
          text: "Indiquez le métier et la ville (ex. Plombier · Casablanca).",
        },
        {
          title: "Décrivez le besoin",
          text: "Ex. « Fuite sous l’évier — intervention rapide ».",
        },
        {
          title: "Choisissez la catégorie",
          text: "Plombier, Électricien, Nettoyage…",
        },
        {
          title: "Réservez votre expert",
          text: "Distance + note visibles — puis un tap sur Réserver.",
        },
      ],
      ctaTry: "Essayer maintenant",
      ctaHow: "Voir comment ça marche",
    },
    features: {
      title: "Tout pour réserver en confiance",
      subtitle:
        "De la demande au QR de fin de mission, lm3alem simplifie chaque étape.",
      items: [
        {
          title: "Demande en quelques minutes",
          description: "Catégorie, description, localisation — c’est parti.",
        },
        {
          title: "Matching local",
          description: "Des artisans vérifiés près de chez toi.",
        },
        {
          title: "Chat & appels",
          description: "Coordonne la mission sans quitter l’app.",
        },
        {
          title: "Notes & avis",
          description: "Profils avec notes, avis et missions réalisées.",
        },
        {
          title: "Fin de mission QR",
          description: "Confirme la prestation en un scan.",
        },
        {
          title: "FR · AR · EN",
          description: "Une app pensée pour le Maghreb.",
        },
      ],
    },
    how: {
      title: "Comment ça marche",
      subtitle:
        "Trois étapes pour trouver un pro — ou pour recevoir des missions.",
      tabClient: "Client",
      tabArtisan: "Artisan",
      clientSteps: [
        {
          title: "Choisir un métier",
          description: "Plombier, électricien, nettoyage…",
        },
        {
          title: "Décrire ton besoin",
          description: "Quelques mots + ta localisation.",
        },
        {
          title: "Choisir un pro",
          description: "Compare notes, avis, proximité — réserve.",
        },
      ],
      artisanSteps: [
        {
          title: "Crée ton profil vérifié",
          description: "Identité, métiers, zone d’intervention.",
        },
        {
          title: "Reçois des demandes",
          description: "Des missions près de chez toi.",
        },
        {
          title: "Réalise et confirme",
          description: "Discute, intervient, valide au QR.",
        },
      ],
      cta: "Télécharger lm3alem",
    },
    trades: {
      title: "Les métiers disponibles",
      subtitle: "Du dépannage urgent au chantier planifié.",
      names: [
        "Mécanique",
        "Menuisier",
        "Nettoyage",
        "Plombier",
        "Électricien",
        "Peintre",
        "Jardinage",
        "Climatisation",
        "Vitrerie",
      ],
      footer:
        "Trouver un plombier ou un électricien près de moi n’a jamais été aussi simple. Réservez un professionnel vérifié avec lm3alem.",
    },
    artisans: {
      title: "Artisans : soyez visibles, soyez choisis",
      text: "Recevez des missions près de chez vous, échangez in-app, et développez votre réputation avec des avis réels. Connexion Google ou Apple disponible.",
      cta: "Devenir artisan",
      whyTitle: "Pourquoi rejoindre lm3alem ?",
      whyItems: [
        {
          title: "Missions près de chez toi",
          text: "Le matching local te propose des demandes dans ta zone.",
        },
        {
          title: "Chat & appels intégrés",
          text: "Coordonne chaque mission sans quitter l’application.",
        },
        {
          title: "Avis qui font ta réputation",
          text: "Des notes authentiques pour être choisi plus souvent.",
        },
        {
          title: "Confirmation par QR",
          text: "Valide la fin de mission clairement, côté client et pro.",
        },
      ],
      whyCta: "Voir le parcours artisan",
    },
    download: {
      title: "Télécharge lm3alem",
      subtitle:
        "Disponible sur iOS et Android. Scanne le QR ou choisis ton store.",
      scan: "Scanner pour télécharger",
      available: "Disponible iOS & Android",
      appStoreAria: "Télécharger lm3alem sur l'App Store",
      playAria: "Télécharger lm3alem sur Google Play",
      appStoreTop: "Télécharger sur",
      appStoreName: "App Store",
      playTop: "Disponible sur",
      playName: "Google Play",
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir sur lm3alem",
      items: [
        {
          question: "lm3alem est-il gratuit ?",
          answer:
            "Oui. Le téléchargement et l'inscription sont gratuits. Vous ne payez que le service de l'artisan que vous choisissez.",
        },
        {
          question: "Comment sont vérifiés les professionnels ?",
          answer:
            "Chaque professionnel passe une vérification d'identité et de profil. Les avis clients authentiques vous aident à choisir en confiance.",
        },
        {
          question: "Quelles zones sont couvertes ?",
          answer:
            "lm3alem se déploie progressivement au Maroc. Les disponibilités près de chez vous s'affichent directement dans l'application.",
        },
        {
          question: "Comment devenir artisan sur lm3alem ?",
          answer:
            "Téléchargez l'app, inscrivez-vous en tant que professionnel, complétez votre profil et la vérification, puis recevez des missions près de chez vous.",
        },
        {
          question: "Puis-je discuter avec l'artisan avant la mission ?",
          answer:
            "Oui. Le chat in-app et les appels vous permettent de coordonner la mission sans quitter lm3alem.",
        },
        {
          question: "L'application est-elle disponible en arabe ?",
          answer:
            "Oui. lm3alem est disponible en français, en arabe (interface RTL) et en anglais.",
        },
      ],
    },
    footer: {
      ctaTitle: "Prêt à trouver ton artisan ?",
      ctaText:
        "Télécharge lm3alem et réserve un pro vérifié près de chez toi en quelques minutes.",
      ctaDownload: "Télécharger l'app",
      ctaArtisan: "Devenir artisan",
      tagline:
        "La marketplace des services à domicile au Maroc — clients et artisans, au même endroit.",
      location: "Maroc · Maghreb",
      product: "Produit",
      legal: "Légal",
      download: "Télécharger",
      about: "À propos",
      privacy: "Confidentialité",
      terms: "CGU",
      contact: "Contact",
      arabicTag: "المْعَلَّم — خدمات منزلية موثوقة",
      rights: "Tous droits réservés",
      madeFor: "Fait pour le Maroc",
    },
    phone: {
      aria: "Écran lm3alem — Créer une demande",
      header: "Trouvez l'artisan qu'il vous faut",
      categoriesTitle: "Catégories",
      descTitle: "Description",
      descPlaceholder: "Décrivez votre besoin…",
      voice: "Vocal",
      confirm: "Confirmer la demande",
    },
  },
  en: {
    nav: {
      aria: "Main navigation",
      home: "Home",
      demande: "Request",
      features: "Features",
      how: "How it works",
      trades: "Trades",
      artisans: "Pros",
      faq: "FAQ",
      download: "Download",
      downloadApp: "Download the app",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      lang: "Change language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      brandAr: "المْعَلَّم",
      title: "The fast way to book home services",
      subtitle:
        "Book verified professionals near you in just a few minutes.",
      ctaDownload: "Download lm3alem",
      ctaHow: "See how it works",
    },
    trust: {
      title: "Verified pros, near you",
      items: [
        "Verified artisans",
        "Authentic client reviews",
        "Proximity matching",
        "QR-confirmed jobs",
      ],
    },
    forWho: {
      title: "Who is lm3alem for?",
      subtitle:
        "One app, two experiences — find an expert or receive jobs.",
      clientTitle: "You need a pro",
      clientText:
        "Urgent fix or planned work, without wasting time. Find a verified artisan near you and book in minutes.",
      clientCta: "Find a pro",
      artisanTitle: "You’re an artisan or worker",
      artisanText:
        "Local visibility, qualified jobs, in-app coordination. Grow your reputation with real reviews.",
      artisanCta: "Become a pro",
    },
    demande: {
      eyebrow: "Request flow",
      title: "Create a request, find an expert near you",
      subtitle:
        "Describe your need, pick a trade, compare nearby verified pros, then book in one tap.",
      steps: [
        {
          title: "New request",
          text: "Enter the trade and city (e.g. Plumber · Casablanca).",
        },
        {
          title: "Describe the need",
          text: "E.g. “Leak under the sink — quick visit”.",
        },
        {
          title: "Choose a category",
          text: "Plumber, Electrician, Cleaning…",
        },
        {
          title: "Book your expert",
          text: "See distance + rating — then tap Book.",
        },
      ],
      ctaTry: "Try now",
      ctaHow: "See how it works",
    },
    features: {
      title: "Everything to book with confidence",
      subtitle:
        "From request to end-of-job QR, lm3alem simplifies every step.",
      items: [
        {
          title: "Request in minutes",
          description: "Category, description, location — you’re set.",
        },
        {
          title: "Local matching",
          description: "Verified artisans near you.",
        },
        {
          title: "Chat & calls",
          description: "Coordinate without leaving the app.",
        },
        {
          title: "Ratings & reviews",
          description: "Profiles with scores, reviews and completed jobs.",
        },
        {
          title: "QR job completion",
          description: "Confirm the service with one scan.",
        },
        {
          title: "FR · AR · EN",
          description: "Built for the Maghreb.",
        },
      ],
    },
    how: {
      title: "How it works",
      subtitle: "Three steps to find a pro — or to receive jobs.",
      tabClient: "Client",
      tabArtisan: "Pro",
      clientSteps: [
        {
          title: "Pick a trade",
          description: "Plumber, electrician, cleaning…",
        },
        {
          title: "Describe your need",
          description: "A few words + your location.",
        },
        {
          title: "Choose a pro",
          description: "Compare ratings, reviews, distance — book.",
        },
      ],
      artisanSteps: [
        {
          title: "Create a verified profile",
          description: "ID, trades, service area.",
        },
        {
          title: "Receive requests",
          description: "Jobs near you.",
        },
        {
          title: "Deliver & confirm",
          description: "Chat, work, validate with QR.",
        },
      ],
      cta: "Download lm3alem",
    },
    trades: {
      title: "Available trades",
      subtitle: "From urgent repairs to planned projects.",
      names: [
        "Mechanics",
        "Carpenter",
        "Cleaning",
        "Plumber",
        "Electrician",
        "Painter",
        "Gardening",
        "AC / HVAC",
        "Glazier",
      ],
      footer:
        "Finding a plumber or electrician near you has never been easier. Book a verified pro with lm3alem.",
    },
    artisans: {
      title: "Pros: get seen, get chosen",
      text: "Receive nearby jobs, chat in-app, and grow your reputation with real reviews. Google or Apple sign-in available.",
      cta: "Become a pro",
      whyTitle: "Why join lm3alem?",
      whyItems: [
        {
          title: "Jobs near you",
          text: "Local matching suggests requests in your area.",
        },
        {
          title: "Built-in chat & calls",
          text: "Coordinate every job without leaving the app.",
        },
        {
          title: "Reviews that build trust",
          text: "Authentic ratings help you get chosen more often.",
        },
        {
          title: "QR confirmation",
          text: "Clear job completion for both client and pro.",
        },
      ],
      whyCta: "See the pro journey",
    },
    download: {
      title: "Download lm3alem",
      subtitle: "Available on iOS and Android. Scan the QR or pick your store.",
      scan: "Scan to download",
      available: "Available on iOS & Android",
      appStoreAria: "Download lm3alem on the App Store",
      playAria: "Download lm3alem on Google Play",
      appStoreTop: "Download on the",
      appStoreName: "App Store",
      playTop: "Get it on",
      playName: "Google Play",
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Everything you need to know about lm3alem",
      items: [
        {
          question: "Is lm3alem free?",
          answer:
            "Yes. Download and signup are free. You only pay the artisan you choose.",
        },
        {
          question: "How are professionals verified?",
          answer:
            "Each pro goes through identity and profile verification. Authentic client reviews help you choose with confidence.",
        },
        {
          question: "Which areas are covered?",
          answer:
            "lm3alem is rolling out across Morocco. Availability near you shows directly in the app.",
        },
        {
          question: "How do I become a pro on lm3alem?",
          answer:
            "Download the app, sign up as a professional, complete your profile and verification, then receive jobs near you.",
        },
        {
          question: "Can I talk to the artisan before the job?",
          answer:
            "Yes. In-app chat and calls let you coordinate without leaving lm3alem.",
        },
        {
          question: "Is the app available in Arabic?",
          answer:
            "Yes. lm3alem is available in French, Arabic (RTL) and English.",
        },
      ],
    },
    footer: {
      ctaTitle: "Ready to find your artisan?",
      ctaText:
        "Download lm3alem and book a verified pro near you in minutes.",
      ctaDownload: "Download the app",
      ctaArtisan: "Become a pro",
      tagline:
        "The home-services marketplace in Morocco — clients and artisans, in one place.",
      location: "Morocco · Maghreb",
      product: "Product",
      legal: "Legal",
      download: "Download",
      about: "About",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      arabicTag: "المْعَلَّم — خدمات منزلية موثوقة",
      rights: "All rights reserved",
      madeFor: "Made for Morocco",
    },
    phone: {
      aria: "lm3alem screen — Create a request",
      header: "Find the artisan you need",
      categoriesTitle: "Categories",
      descTitle: "Description",
      descPlaceholder: "Describe your need…",
      voice: "Voice",
      confirm: "Confirm request",
    },
  },
  ar: {
    nav: {
      aria: "التنقل الرئيسي",
      home: "الرئيسية",
      demande: "طلب",
      features: "الميزات",
      how: "كيف يعمل",
      trades: "الحرف",
      artisans: "الحرفيون",
      faq: "أسئلة",
      download: "تحميل",
      downloadApp: "تحميل التطبيق",
      themeLight: "الوضع الفاتح",
      themeDark: "الوضع الداكن",
      lang: "تغيير اللغة",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      brandAr: "المْعَلَّم",
      title: "الحل السريع لخدماتك المنزلية",
      subtitle:
        "احجز محترفين موثقين بالقرب منك في بضع دقائق.",
      ctaDownload: "تحميل المْعَلَّم",
      ctaHow: "شاهد كيف يعمل",
    },
    trust: {
      title: "محترفون موثقون، بالقرب منك",
      items: [
        "حرفيون موثقون",
        "آراء عملاء حقيقية",
        "مطابقة حسب القرب",
        "مهام مؤكدة (QR)",
      ],
    },
    forWho: {
      title: "لمن تطبيق المْعَلَّم؟",
      subtitle: "تطبيق واحد، تجربتان — ابحث عن خبير أو استقبل مهامًا.",
      clientTitle: "تحتاج إلى محترف",
      clientText:
        "طارئ أو عمل مخطط، دون إضاعة وقت. اعثر على حرفي موثق بالقرب منك واحجز في دقائق.",
      clientCta: "ابحث عن محترف",
      artisanTitle: "أنت حرفي أو عامل",
      artisanText:
        "ظهور محلي، مهام مؤهلة، وتنسيق داخل التطبيق. طوّر سمعتك بآراء حقيقية.",
      artisanCta: "انضم كحرفي",
    },
    demande: {
      eyebrow: "مسار الطلب",
      title: "أنشئ طلبًا، واعثر على خبير بالقرب منك",
      subtitle:
        "صف حاجتك، اختر الحرفة، قارن المحترفين الموثقين القريبين، ثم احجز بضغطة.",
      steps: [
        {
          title: "طلب جديد",
          text: "حدد الحرفة والمدينة (مثال: سباك · الدار البيضاء).",
        },
        {
          title: "صف الحاجة",
          text: "مثال: «تسرب تحت الحوض — تدخل سريع».",
        },
        {
          title: "اختر الفئة",
          text: "سباك، كهربائي، تنظيف…",
        },
        {
          title: "احجز خبيرك",
          text: "المسافة والتقييم ظاهران — ثم اضغط احجز.",
        },
      ],
      ctaTry: "جرّب الآن",
      ctaHow: "شاهد كيف يعمل",
    },
    features: {
      title: "كل ما تحتاجه للحجز بثقة",
      subtitle:
        "من الطلب إلى رمز QR لنهاية المهمة، المْعَلَّم يبسّط كل خطوة.",
      items: [
        {
          title: "طلب في دقائق",
          description: "فئة، وصف، موقع — انطلق.",
        },
        {
          title: "مطابقة محلية",
          description: "حرفيون موثقون بالقرب منك.",
        },
        {
          title: "دردشة ومكالمات",
          description: "نسّق المهمة دون مغادرة التطبيق.",
        },
        {
          title: "تقييمات وآراء",
          description: "ملفات بتقييمات وآراء ومهام منجزة.",
        },
        {
          title: "إنهاء المهمة بـ QR",
          description: "أكّد الخدمة بمسح واحد.",
        },
        {
          title: "FR · AR · EN",
          description: "تطبيق مصمم للمغرب الكبير.",
        },
      ],
    },
    how: {
      title: "كيف يعمل",
      subtitle: "ثلاث خطوات لإيجاد محترف — أو لاستقبال مهام.",
      tabClient: "عميل",
      tabArtisan: "حرفي",
      clientSteps: [
        {
          title: "اختر حرفة",
          description: "سباك، كهربائي، تنظيف…",
        },
        {
          title: "صف حاجتك",
          description: "كلمات قليلة + موقعك.",
        },
        {
          title: "اختر محترفًا",
          description: "قارن التقييمات والآراء والقرب — احجز.",
        },
      ],
      artisanSteps: [
        {
          title: "أنشئ ملفًا موثقًا",
          description: "الهوية، الحرف، منطقة التدخل.",
        },
        {
          title: "استقبل الطلبات",
          description: "مهام بالقرب منك.",
        },
        {
          title: "نفّذ وأكّد",
          description: "تواصل، تدخّل، أكّد بـ QR.",
        },
      ],
      cta: "تحميل المْعَلَّم",
    },
    trades: {
      title: "الحرف المتوفرة",
      subtitle: "من الإصلاح العاجل إلى المشروع المخطط.",
      names: [
        "ميكانيك",
        "نجار",
        "تنظيف",
        "سباك",
        "كهربائي",
        "دهان",
        "بستنة",
        "تكييف",
        "زجاج",
      ],
      footer:
        "البحث عن سباك أو كهربائي بالقرب منك لم يكن أسهل. احجز محترفًا موثقًا مع المْعَلَّم.",
    },
    artisans: {
      title: "للحرفيين: كونوا مرئيين ومختارين",
      text: "استقبلوا مهامًا بالقرب منكم، تواصلوا داخل التطبيق، وطوروا سمعتكم بآراء حقيقية. تسجيل عبر Google أو Apple متاح.",
      cta: "انضم كحرفي",
      whyTitle: "لماذا تنضم إلى المْعَلَّم؟",
      whyItems: [
        {
          title: "مهام بالقرب منك",
          text: "المطابقة المحلية تقترح طلبات في منطقتك.",
        },
        {
          title: "دردشة ومكالمات مدمجة",
          text: "نسّق كل مهمة دون مغادرة التطبيق.",
        },
        {
          title: "آراء تبني سمعتك",
          text: "تقييمات حقيقية لتُختار أكثر.",
        },
        {
          title: "تأكيد عبر QR",
          text: "إنهاء واضح للمهمة للعميل والحرفي.",
        },
      ],
      whyCta: "شاهد مسار الحرفي",
    },
    download: {
      title: "حمّل المْعَلَّم",
      subtitle: "متوفر على iOS وAndroid. امسح رمز QR أو اختر متجرك.",
      scan: "امسح للتحميل",
      available: "متوفر على iOS وAndroid",
      appStoreAria: "تحميل المْعَلَّم من App Store",
      playAria: "تحميل المْعَلَّم من Google Play",
      appStoreTop: "تحميل من",
      appStoreName: "App Store",
      playTop: "متوفر على",
      playName: "Google Play",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته عن المْعَلَّم",
      items: [
        {
          question: "هل المْعَلَّم مجاني؟",
          answer:
            "نعم. التحميل والتسجيل مجانيان. تدفع فقط مقابل خدمة الحرفي الذي تختاره.",
        },
        {
          question: "كيف يتم التحقق من المحترفين؟",
          answer:
            "يمر كل محترف بتحقق من الهوية والملف. آراء العملاء الحقيقية تساعدك على الاختيار بثقة.",
        },
        {
          question: "ما هي المناطق المغطاة؟",
          answer:
            "ينتشر المْعَلَّم تدريجيًا في المغرب. التوفر بالقرب منك يظهر مباشرة في التطبيق.",
        },
        {
          question: "كيف أصبح حرفيًا على المْعَلَّم؟",
          answer:
            "حمّل التطبيق، سجّل كمحترف، أكمل ملفك والتحقق، ثم استقبل مهامًا بالقرب منك.",
        },
        {
          question: "هل يمكنني التحدث مع الحرفي قبل المهمة؟",
          answer:
            "نعم. الدردشة والمكالمات داخل التطبيق تسمحان بالتنسيق دون مغادرة المْعَلَّم.",
        },
        {
          question: "هل التطبيق متوفر بالعربية؟",
          answer:
            "نعم. المْعَلَّم متوفر بالفرنسية والعربية (واجهة RTL) والإنجليزية.",
        },
      ],
    },
    footer: {
      ctaTitle: "جاهز لإيجاد حرفيك؟",
      ctaText:
        "حمّل المْعَلَّم واحجز محترفًا موثقًا بالقرب منك في دقائق.",
      ctaDownload: "تحميل التطبيق",
      ctaArtisan: "انضم كحرفي",
      tagline:
        "سوق الخدمات المنزلية في المغرب — العملاء والحرفيون في مكان واحد.",
      location: "المغرب · المغرب الكبير",
      product: "المنتج",
      legal: "قانوني",
      download: "تحميل",
      about: "من نحن",
      privacy: "الخصوصية",
      terms: "الشروط",
      contact: "اتصل بنا",
      arabicTag: "المْعَلَّم — خدمات منزلية موثوقة",
      rights: "جميع الحقوق محفوظة",
      madeFor: "صُنع للمغرب",
    },
    phone: {
      aria: "شاشة المْعَلَّم — إنشاء طلب",
      header: "اعثر على الحرفي الذي تحتاجه",
      categoriesTitle: "الفئات",
      descTitle: "الوصف",
      descPlaceholder: "صف حاجتك…",
      voice: "صوتي",
      confirm: "تأكيد الطلب",
    },
  },
};
