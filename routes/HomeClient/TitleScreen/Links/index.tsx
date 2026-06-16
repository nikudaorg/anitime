'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { getMessages, Locale } from '@/i18n';
import Schedule from './Schedule';
import { Globe } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import useUrlState from './useUrlState';
import Movies from './Movies';

const useLinks = (
  locale: Locale,
  onShowScheduleClick: () => void,
  onChangeLanguageClick: () => void,
  onShowMoviesClick: () => void,
  baseUrl: string
) => {
  const messages = getMessages(locale);
  return (
    <div className={styles.root}>
      <div className={styles.firstLine}>
        <a href={`/${locale}${baseUrl}movies`}>{messages.menu.films}</a>
        <a onClick={onShowMoviesClick} className={styles.buyTickets}>
          {locale === 'en'
            ? 'Find a film'
            : locale === 'he'
              ? 'תוכנית סרט'
              : 'Распределение фильмов'}
        </a>
      </div>

      <div className={styles.secondLine}>
        {/* <a>{messages.menu.films}</a> */}
        <a onClick={onChangeLanguageClick} className={styles.globeLink}>
          <Globe className={styles.globe} />
        </a>
        <a href="https://filmfreeway.com/anitime" target="_blank" rel="noopener noreferrer">
          {messages.menu.submitYourFilm}
        </a>
        <a onClick={onShowScheduleClick}>{messages.menu.schedule}</a>
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
  const [isScheduleShown, setIsScheduleShown] = useUrlState(
    'schedule',
    false as const,
    (value, toDefault) => (value === 'shown' ? (true as const) : toDefault()),
    () => 'shown'
  );
  const [isLanguageSwitchShown, setIsLanguageSwitchShown] = useUrlState(
    'langSwitch',
    false as const,
    (value, toDefault) => (value === 'shown' ? (true as const) : toDefault()),
    () => 'shown'
  );

  const [isMoviesShown, setIsMoviesShown] = useUrlState(
    'movies-program',
    false as const,
    (value, toDefault) => (value === 'shown' ? (true as const) : toDefault()),
    () => 'shown'
  );

  const onChangeLanguageClick = useCallback(() => {
    setIsLanguageSwitchShown(true);
  }, [setIsLanguageSwitchShown]);

  const onShowScheduleClick = useCallback(() => {
    setIsScheduleShown(true);
  }, [setIsScheduleShown]);

  const onShowMoviesClick = useCallback(() => {
    setIsMoviesShown(true);
  }, [setIsMoviesShown]);
  return (
    <>
      <div className={`${styles.visible}${isFixed ? ` ${styles.fixed}` : ''}`}>
        {useLinks(locale, onShowScheduleClick, onChangeLanguageClick, onShowMoviesClick, baseUrl)}
      </div>
      <div className={styles.plug} ref={plugRef}>
        {useLinks(
          locale,
          () => {},
          () => {},
          () => {},
          baseUrl
        )}
      </div>
      <div style={{ display: 'contents', visibility: isScheduleShown ? 'visible' : 'hidden' }}>
        <Schedule onClose={() => setIsScheduleShown(false)} locale={locale} />
      </div>
      <div style={{ display: 'contents', visibility: isMoviesShown ? 'visible' : 'hidden' }}>
        <Movies onClose={() => setIsMoviesShown(false)} locale={locale} />
      </div>
      {isLanguageSwitchShown ? (
        <LanguageSwitch locale={locale} onClose={() => setIsLanguageSwitchShown(false)} url="" />
      ) : null}
    </>
  );
};

export default Links;
