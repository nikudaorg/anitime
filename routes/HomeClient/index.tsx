'use client';

import { Locale } from '@/i18n';
import designScheme from './designScheme.module.css';
import styles from './page.module.css';

import TitleScreen from './TitleScreen';
import { ReactNode, useRef } from 'react';

export default function HomeClient({
  information,
  locale
}: {
  information: ReactNode;
  locale: Locale;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${designScheme.designScheme} ${styles.container}`}
      ref={ref}
    >
      <TitleScreen
        listenScroll={(cb: () => void) => {
          if (!ref.current) return () => undefined;
          ref.current!.addEventListener('scroll', cb);
          return () => {
            if (!ref.current) return () => undefined;
            ref.current!.removeEventListener('scroll', cb);
          };
        }}
        locale={locale}
      />
      {information}
    </div>
  );
}
