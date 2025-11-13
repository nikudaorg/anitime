import { Locale, Messages, getMessages } from '@/i18n';
import locales from '@/locales';
import { Metadata } from 'next';

type SEO = {
  title: string;
  description: string;
};

export const metadataGen =
  (path: `/${string}`, getSEO: (messages: Messages) => SEO) =>
  (myLocale: Locale): Metadata => {
    const messages = getMessages(myLocale);
    const seo = getSEO(messages);

    return {
      title: seo.title,
      description: seo.description,
      alternates: {
        canonical: `https://anitimefest.com/${myLocale}${path}`,
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `https://anitimefest.com/${locale}${path}`])
        ),
      },
    };
  };
