import { Locale } from '@/i18n';
import HomeClient from './HomeClient';
import Information from './Information';

import { metadataGen } from './generateMetadata';

export const generateMetadata = metadataGen('/', (messages) => messages.seo);

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <HomeClient information={<Information locale={locale} />} locale={locale} />
  );
}
