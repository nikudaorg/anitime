'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { getMessages, Locale } from '@/i18n';
import Schedule from './Schedule';
import { Globe } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';

const useLinks = (
  locale: Locale,
  onShowScheduleClick: () => void,
  onChangeLanguageClick: () => void,
  baseUrl: string
) => {
  const messages = getMessages(locale);
  return (
    <div className={styles.root}>
      <div className={styles.firstLine}>
        <a href="https://filmfreeway.com/anitime" target="_blank" rel="noopener noreferrer">
          {messages.menu.submitYourFilm}
        </a>
        <a
          href={messages.buyTicketsLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buyTickets}
        >
          {messages.menu.buyTickets}
        </a>
      </div>

      <div className={styles.secondLine}>
        {/* <a>{messages.menu.films}</a> */}
        <a href="#" onClick={onChangeLanguageClick} className={styles.globeLink}>
          <Globe className={styles.globe} />
        </a>
        <Link href={`/${locale}${baseUrl}movies`}>{messages.menu.films}</Link>
        <a href="#" onClick={onShowScheduleClick}>
          {messages.menu.schedule}
        </a>
        <a href="#anitimeAbout">{messages.menu.aboutFestival}</a>
        {/* <a>{messages.menu.marketParticipants}</a> */}
        {/* <a>{messages.menu.team}</a> */}
        <a href="#anitimeSponsors">{messages.menu.ourSponsors}</a>
        <a href="#anitimeContacts">{messages.menu.contacts}</a>
      </div>
    </div>
  );
};

/**
 * Always embed the Links component into a container with `position: relative`.
 */
const Links = ({
  listenScroll,
  locale,
  baseUrl,
}: {
  listenScroll: (cb: () => void) => () => void;
  locale: Locale;
  baseUrl: string;
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const isFixedRef = useRef(false);

  const plugRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    if (!plugRef.current) return () => undefined;
    const rect = plugRef.current!.getBoundingClientRect();
    if (!isFixedRef.current! && rect.top < 10) {
      setIsFixed(true);
      isFixedRef.current = true;
    } else if (isFixedRef.current && rect.top > 10) {
      setIsFixed(false);
      isFixedRef.current = false;
    }
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      onScroll();
    });
    const off = listenScroll(onScroll);
    return () => {
      off();
      cancelAnimationFrame(id);
    };
  }, [listenScroll, onScroll]);
  const [isScheduleShown, setIsScheduleShown] = useState<boolean>(false);
  const [isLanguageSwitchShown, setIsLanguageSwitchShown] = useState<boolean>(false);
  return (
    <>
      <div className={`${styles.visible}${isFixed ? ` ${styles.fixed}` : ''}`}>
        {useLinks(
          locale,
          () => setIsScheduleShown(true),
          () => setIsLanguageSwitchShown(true),
          baseUrl
        )}
      </div>
      <div className={styles.plug} ref={plugRef}>
        {useLinks(
          locale,
          () => {},
          () => {},
          baseUrl
        )}
      </div>
      <div style={{ display: 'contents', visibility: isScheduleShown ? 'visible' : 'hidden' }}>
        <Schedule onClose={() => setIsScheduleShown(false)} locale={locale} />
      </div>
      {isLanguageSwitchShown ? (
        <LanguageSwitch locale={locale} onClose={() => setIsLanguageSwitchShown(false)} url="" />
      ) : null}
    </>
  );
};

export default Links;
