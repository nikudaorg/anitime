import { Locale, Messages, getMessages } from '@/i18n';
import locales from '@/locales';
import { Metadata } from 'next';

type SEO = {
  title: string;
  description: string;
};

export const metadataGen =
  (path: `/${string}`, getSEO: (messages: Messages) => SEO) =>
  async ({
    params
  }: {
    params: Promise<{ locale: Locale }>;
  }): Promise<Metadata> => {
    const myLocale = (await params).locale;
    const messages = getMessages(myLocale);
    const seo = getSEO(messages);

    return {
      title: seo.title,
      description: seo.description,
      alternates: {
        canonical: `https://anitimefest.com/${myLocale}${path}`,
        languages: Object.fromEntries(
          locales.map((locale) => [
            locale,
            `https://anitimefest.com/${locale}${path}`
          ])
        )
      }
    };
  };
