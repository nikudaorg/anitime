import { getMessages, Locale } from '@/i18n';
import { metadataGen } from '../generateMetadata';
import styles from './index.module.css';
import designScheme from '../HomeClient/designScheme.module.css';
import banner from './banner/original.png';
import small from './banner/small.webp';
import medium from './banner/medium.webp';
import large from './banner/large.webp';
import xl from './banner/xl.webp';
import Link from 'next/link';
import MovieCard from './MovieCard';
import { movies } from './data/object';
import locales from '@/locales';
import { R } from '@/routes';

const israeliPath = 'israeli';
const internationalPath = 'international';

function MoviesPage({
  locale,
  category,
  baseUrl,
}: {
  locale: Locale;
  category: 'israeli' | 'international' | undefined;
  baseUrl: string;
}) {
  const messages = getMessages(locale);
  let internationalHref: string;
  let israeliHref: string;
  if (category === 'international') {
    internationalHref = './';
    israeliHref = `./${israeliPath}`;
  } else if (category === 'israeli') {
    internationalHref = `./${internationalPath}`;
    israeliHref = './';
  } else {
    internationalHref = `/${locale}${baseUrl}${internationalPath}`;
    israeliHref = `/${locale}${baseUrl}${israeliPath}`;
  }
  return (
    <div className={`${styles.root} ${designScheme.designScheme}`} id={baseUrl}>
      <div className={styles.decos}>
        <picture>
          <source srcSet={`${xl.src}`} media="(min-width: 1600px)" type="image/webp" />
          <source srcSet={`${large.src}`} media="(min-width: 1024px)" type="image/webp" />
          <source srcSet={`${medium.src}`} media="(min-width: 640px)" type="image/webp" />
          <img src={small.src} alt="" />
        </picture>
      </div>
      <div className={styles.content}>
        <div className={styles.banner}>
          <h1>{messages.movies.title}</h1>
          <div className={styles.titleBg} />
        </div>
        <div className={styles.menu}>
          <Link href={israeliHref} className={category === 'israeli' ? styles.active : undefined}>
            {messages.movies.israeli}
          </Link>
          <Link
            href={internationalHref}
            className={category === 'international' ? styles.active : undefined}
          >
            {messages.movies.international}
          </Link>
        </div>
        <div className={styles.movies}>
          {(category ? movies[category] : movies.common).map((movie, i) => (
            <MovieCard
              imgSrc={movie.poster?.src}
              author={movie.author[locale]}
              duration={movie.duration[locale]}
              synopsis={movie.synopsis[locale].join('\n')}
              title={movie.title[locale]}
              locale={locale}
              key={i}
            />
          ))}
          {/* <MovieCard imgSrc={banner.src} /> */}
        </div>
      </div>
    </div>
  );
}
const getMetadata = (locale: Locale) =>
  metadataGen('movies', (messages) => messages.movies.seo)(locale);

export const rMovies: R = (route, page) => {
  const metadata = Object.fromEntries(locales.map((locale) => [locale, getMetadata(locale)]));
  return {
    page: page((locale, basePath) => ({
      Component: () => <MoviesPage locale={locale} baseUrl={basePath} category={undefined} />,
      metadata: metadata[locale],
    })),
    routes: {
      ...route(`${israeliPath}/`, (route, page) => ({
        page: page((locale, basePath) => ({
          Component: () => <MoviesPage locale={locale} baseUrl={basePath} category="israeli" />,
          metadata: metadata[locale],
        })),
      })),
      ...route(`${internationalPath}/`, (route, page) => ({
        page: page((locale, basePath) => ({
          Component: () => (
            <MoviesPage locale={locale} baseUrl={basePath} category="international" />
          ),
          metadata: metadata[locale],
        })),
      })),
    },
  };
};
