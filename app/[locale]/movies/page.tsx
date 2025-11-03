import { metadataGen } from '../metadataGen';

export const generateMetadata = metadataGen(
  '/movies',
  (messages) => messages.movies.seo
);

export const dynamic = 'force-static';
export const revalidate = false;

export default function MoviesPage() {
  return <>Movies</>;
}
