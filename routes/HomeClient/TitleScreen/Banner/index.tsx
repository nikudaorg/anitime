import banner2560x978 from './banner/2560x978.webp';
import banner1560x1074 from './banner/1560x1074.webp';
import banner640x600 from './banner/640x600.webp';
import styles from './index.module.css';
import { getMessages, Locale } from '@/i18n';

const AnitimeBanner = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);

  return (
    <div className={styles.root}>
      <picture>
        <source media="(min-width: 75rem)" srcSet={banner2560x978.src} />
        <source media="(min-width: 48rem)" srcSet={banner1560x1074.src} />
        <img src={banner640x600.src} alt="Hero banner" />
      </picture>
      <h1>{messages.title}</h1>
      <div className={styles.titleShadow}>{messages.title}</div>
      <div className={styles.date}>{messages.banner.time}</div>
      <div
        className={styles.address}
        style={locale === 'en' ? { transform: 'translateX(-2rem)' } : undefined}
      >
        {messages.banner.address}
      </div>
    </div>
  );
};

export default AnitimeBanner;
