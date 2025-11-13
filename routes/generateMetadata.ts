import { Locale, Messages, getMessages } from '@/i18n';
import locales from '@/locales';
import { Metadata } from 'next';

type SEO = {
  title: string;
  description: string;
};

export const metadataGen =
  (path: string | '', getSEO: (messages: Messages) => SEO) =>
  (myLocale: Locale): Metadata => {
    const messages = getMessages(myLocale);
    const seo = getSEO(messages);

    return {
      title: seo.title,
      description: seo.description,
      alternates: {
        canonical: `https://anitimefest.com/${myLocale}/${path}`,
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `https://anitimefest.com/${locale}/${path}`])
        ),
      },
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: `https://anitimefest.com/${myLocale}/${path}`,
        siteName: messages.seo.title,
        images: [
          {
            url: 'https://anitimefest.com/main-icon.png',
            width: 512,
            height: 512,
            alt: 'Anitime Festival',
          },
        ],
        locale: myLocale,
        alternateLocale: locales.filter((locale) => locale !== myLocale),
        type: 'website',
      },

      twitter: {
        card: 'summary_large_image',
        title: seo.title,
        description: seo.description,
        images: ['https://anitimefest.com/main-icon.png'],
      },
      themeColor: '#2c1c51',
    };
  };
