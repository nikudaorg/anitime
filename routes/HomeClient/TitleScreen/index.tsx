'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Banner from './Banner';
import styles from './index.module.css';
import Links from './Links';
import { Locale } from '@/i18n';

const TitleScreen = ({
  listenScroll,
  locale,
}: {
  listenScroll: (cb: () => void) => () => void;
  locale: Locale;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const getForceHeight = useCallback(() => {
    // if (!ref.current) return () => undefined;
    const linksHeight = linksRef.current!.getBoundingClientRect().height;
    if (
      window.innerHeight / linksHeight > 2.5 &&
      window.innerWidth > parseFloat(getComputedStyle(document.documentElement).fontSize) * 30
    ) {
      return '100vh';
    } else {
      return undefined;
    }
  }, []);

  const [forceHeight, setForceHeight] = useState<string | undefined>('100vh');

  const onResize = useCallback(() => {
    setForceHeight(getForceHeight());
  }, [getForceHeight]);

  useEffect(() => {
    const id = requestAnimationFrame(onResize);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(id);
    };
  }, [onResize]);

  return (
    <div
      className={styles.root}
      style={forceHeight ? { height: forceHeight } : undefined}
      ref={ref}
    >
      <div className={styles.banner}>
        <Banner locale={locale} />
      </div>
      <div className={styles.links} ref={linksRef}>
        <Links listenScroll={listenScroll} locale={locale} />
      </div>
    </div>
  );
};
export default TitleScreen;
