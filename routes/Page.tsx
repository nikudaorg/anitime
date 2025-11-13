import { Locale } from '@/i18n';
import HomeClient from './HomeClient';
import Information from './Information';

import { metadataGen } from './generateMetadata';
import Script from 'next/script';
import getJsonLd from './json-ld';

export const generateMetadata = metadataGen('', (messages) => messages.seo);

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HomeClient information={<Information locale={locale} />} locale={locale} />
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
