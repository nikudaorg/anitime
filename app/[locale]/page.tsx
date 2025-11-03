import { Locale } from '@/i18n';
import HomeClient from './HomeClient';
import Information from './Information';

import { metadataGen } from './metadataGen';
import locales from '@/locales';
export const generateMetadata = metadataGen('/', (messages) => messages.seo);

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const locale = (await params).locale;
  return (
    <HomeClient information={<Information locale={locale} />} locale={locale} />
  );
}

export const dynamic = 'force-static';
export const revalidate = false;
