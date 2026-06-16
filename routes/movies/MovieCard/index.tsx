import { getMessages, Locale } from '@/i18n';
import styles from './index.module.css';

export default function MovieCard({
  locale,
  imgSrc,
  title,
  duration,
  author,
  synopsis,
}: {
  locale: Locale;
  imgSrc: string;
  title: string;
  duration: string;
  author: string;
  synopsis: string;
}) {
  const messages = getMessages(locale);
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Posters are pre-optimized static files; avoid next/image runtime on this route. */}
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.right} style={locale === 'he' ? { direction: 'rtl' } : undefined}>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
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
