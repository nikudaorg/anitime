import { Locale } from '@/i18n';
import HomeClient from './HomeClient';
import Information from './Information';

import { metadataGen } from './generateMetadata';
import { rMovies } from './movies/Page';
import { type R } from '@/routes';
import Script from 'next/script';
import getJsonLd from './json-ld';

function HomePage({ locale, baseUrl }: { locale: Locale; baseUrl: string }) {
  return (
    <>
      <HomeClient information={<Information locale={locale} />} locale={locale} baseUrl={baseUrl} />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd(locale)),
        }}
      />
    </>
  );
}

export const rHome: R = (route, page) => ({
  page: page((locale, baseUrl) => ({
    Component: () => <HomePage locale={locale} baseUrl={baseUrl} />,
    metadata: metadataGen('/', (messages) => messages.seo)(locale),
  })),
  routes: {
    ...route('movies/', rMovies),
  },
});
