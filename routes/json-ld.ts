import { Locale } from '@/i18n';

const en = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANITIME',
    url: 'https://anitimefest.com/en',
    logo: 'https://anitimefest.com/main-icon.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'ANITIME Animation Festival',
    description:
      'ANITIME is a new animation festival in Tel Aviv, created by a team of young volunteers as a space where animation becomes a bridge between cultures and people.',
    startDate: '2025-11-20T17:00:00+02:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'ANU Museum of the Jewish People',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tel Aviv University Campus',
        addressLocality: 'Tel Aviv',
        addressCountry: 'IL',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'ANITIME',
      url: 'https://anitimefest.com/en',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.anumuseum.org.il/he/events/animation-films/',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ANITIME Animation Festival',
    url: 'https://anitimefest.com/en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://anitimefest.com/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Movies',
        item: 'https://anitimefest.com/en/movies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Movies — Israeli',
        item: 'https://anitimefest.com/en/movies/israeli',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Movies — International',
        item: 'https://anitimefest.com/en/movies/international',
      },
    ],
  },
];

const he = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANITIME',
    url: 'https://anitimefest.com/he',
    logo: 'https://anitimefest.com/main-icon.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'פסטיבל האנימציה ANITIME',
    description:
      'ANITIME הוא פסטיבל אנימציה חדש בתל אביב, שנוצר על ידי צוות צעיר של מתנדבים מתוך רצון לבנות מרחב שבו האנימציה הופכת לגשר בין תרבויות ואנשים.',
    startDate: '2025-11-20T17:00:00+02:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'מוזיאון העם היהודי ANU',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'קמפוס אוניברסיטת תל אביב',
        addressLocality: 'תל אביב',
        addressCountry: 'IL',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'ANITIME',
      url: 'https://anitimefest.com/he',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.anumuseum.org.il/he/events/animation-films/',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'פסטיבל האנימציה ANITIME',
    url: 'https://anitimefest.com/he',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'בית',
        item: 'https://anitimefest.com/he',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'סרטים',
        item: 'https://anitimefest.com/he/movies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'סרטים — ישראליים',
        item: 'https://anitimefest.com/he/movies/israeli',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'סרטים — בינלאומיים',
        item: 'https://anitimefest.com/he/movies/international',
      },
    ],
  },
];

const ru = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANITIME',
    url: 'https://anitimefest.com/ru',
    logo: 'https://anitimefest.com/main-icon.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Фестиваль анимации ANITIME',
    description:
      'ANITIME — новый фестиваль анимации в Тель-Авиве, создан командой молодых волонтёров как пространство, где анимация становится мостом между культурами и людьми.',
    startDate: '2025-11-20T17:00:00+02:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'АНУ — музей еврейского народа',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Кампус Тель-Авивского университета',
        addressLocality: 'Тель-Авив',
        addressCountry: 'IL',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'ANITIME',
      url: 'https://anitimefest.com/ru',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.anumuseum.org.il/ru/events/animation-films/',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Фестиваль анимации ANITIME',
    url: 'https://anitimefest.com/ru',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://anitimefest.com/ru',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Фильмы',
        item: 'https://anitimefest.com/ru/movies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Фильмы — Израильские',
        item: 'https://anitimefest.com/ru/movies/israeli',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Фильмы — Международные',
        item: 'https://anitimefest.com/ru/movies/international',
      },
    ],
  },
];

const getJsonLd = (locale: Locale) => {
  return locale === 'en' ? en : locale === 'he' ? he : locale === 'ru' ? ru : (undefined as never);
};

export default getJsonLd;
