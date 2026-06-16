import { getMessages, Locale } from '@/i18n';
import { R } from '@/routes';
import { Metadata } from 'next';
import Link from 'next/link';
import MovieCard from '../movies/MovieCard';
import pageStyles from '../movies/index.module.css';
import cardStyles from '../movies/MovieCard/index.module.css';
import designScheme from '../HomeClient/designScheme.module.css';
import small from '../movies/banner/small.webp';
import medium from '../movies/banner/medium.webp';
import large from '../movies/banner/large.webp';
import xl from '../movies/banner/xl.webp';
import { movies } from '../movies/data/object';

type Category = 'israeli' | 'international';
type Variant = 'full' | 'no-banner' | 'no-posters' | 'posters-only' | 'plain';

const categories: Category[] = ['international', 'israeli'];
const variants: Variant[] = ['full', 'no-banner', 'no-posters', 'posters-only', 'plain'];

const metadata: Metadata = {
  title: 'Movies Debug',
  robots: {
    index: false,
    follow: false,
  },
};

function MovieTextCard({
  locale,
  title,
  duration,
  author,
  synopsis,
}: {
  locale: Locale;
  title: string;
  duration: string;
  author: string;
  synopsis: string;
}) {
  const messages = getMessages(locale);

  return (
    <div className={cardStyles.root}>
      <div className={cardStyles.right} style={locale === 'he' ? { direction: 'rtl' } : undefined}>
        <div className={cardStyles.title}>{title}</div>
        <div className={cardStyles.info}>
          <strong>
            {messages.movies.by} {author}
          </strong>
          <br />
          <strong>{duration}</strong>
          <br />
          <br />
          {synopsis}
          <br />
        </div>
      </div>
    </div>
  );
}

function MoviePosterCard({ imgSrc, title }: { imgSrc: string; title: string }) {
  return (
    <div className={cardStyles.root}>
      <div className={cardStyles.img}>
        {/* Diagnostic route: compare browser behavior without Next image runtime. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '100%' }}
        />
      </div>
      <div className={cardStyles.right}>
        <div className={cardStyles.title}>{title}</div>
      </div>
    </div>
  );
}

function DebugLinks({
  locale,
  category,
  variant,
}: {
  locale: Locale;
  category?: Category;
  variant?: Variant;
}) {
  return (
    <div className={pageStyles.menu}>
      {categories.flatMap((nextCategory) =>
        variants.map((nextVariant) => {
          const active = nextCategory === category && nextVariant === variant;
          return (
            <Link
              key={`${nextCategory}-${nextVariant}`}
              href={`/${locale}/movies-debug/${nextCategory}/${nextVariant}`}
              className={active ? pageStyles.active : undefined}
            >
              {nextCategory} {nextVariant}
            </Link>
          );
        })
      )}
    </div>
  );
}

function MoviesDebugPage({
  locale,
  category,
  variant,
}: {
  locale: Locale;
  category?: Category;
  variant?: Variant;
}) {
  const messages = getMessages(locale);
  const selectedMovies = category && variant ? movies[category] : [];
  const showBanner = variant !== 'no-banner' && variant !== 'plain';
  const showCards = Boolean(category && variant);

  return (
    <div className={`${pageStyles.root} ${designScheme.designScheme}`}>
      {showBanner ? (
        <div className={pageStyles.decos}>
          <picture>
            <source srcSet={`${xl.src}`} media="(min-width: 1600px)" type="image/webp" />
            <source srcSet={`${large.src}`} media="(min-width: 1024px)" type="image/webp" />
            <source srcSet={`${medium.src}`} media="(min-width: 640px)" type="image/webp" />
            <img src={small.src} alt="" draggable="false" />
          </picture>
        </div>
      ) : null}
      <div className={pageStyles.content}>
        <div className={pageStyles.banner}>
          <h1>{messages.movies.title}</h1>
          <div className={pageStyles.titleBg} />
        </div>
        <DebugLinks locale={locale} category={category} variant={variant} />
        <div className={pageStyles.movies}>
          {showCards
            ? selectedMovies.map((movie, i) => {
                const props = {
                  author: movie.author[locale],
                  duration: movie.duration[locale],
                  synopsis: movie.synopsis[locale].join('\n'),
                  title: movie.title[locale],
                  locale,
                };

                if (variant === 'no-posters' || variant === 'plain') {
                  return <MovieTextCard {...props} key={i} />;
                }

                if (variant === 'posters-only') {
                  return <MoviePosterCard imgSrc={movie.poster.src} title={props.title} key={i} />;
                }

                return <MovieCard imgSrc={movie.poster.src} {...props} key={i} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

const getPage = (locale: Locale, category?: Category, variant?: Variant) => ({
  Component: () => <MoviesDebugPage locale={locale} category={category} variant={variant} />,
  metadata,
});

export const rMoviesDebug: R = (route, page) => ({
  page: page((locale) => getPage(locale)),
  routes: Object.fromEntries(
    categories.map((category) => [
      `${category}/`,
      {
        routes: Object.fromEntries(
          variants.map((variant) => [
            `${variant}/`,
            {
              page: page((locale) => getPage(locale, category, variant)),
            },
          ])
        ),
      },
    ])
  ) as never,
});
