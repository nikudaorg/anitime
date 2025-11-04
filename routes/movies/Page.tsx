import { getMessages, Locale } from '@/i18n';
import { metadataGen } from '../generateMetadata';

export const generateMetadata = metadataGen(
  '/movies',
  (messages) => messages.movies.seo
);

export const dynamic = 'force-static';
export const revalidate = false;

export default function MoviesPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  return <>{messages.seo.title}</>;
}
