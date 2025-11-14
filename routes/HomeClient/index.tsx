'use client';

import { Locale } from '@/i18n';
import designScheme from './designScheme.module.css';
import styles from './page.module.css';

import TitleScreen from './TitleScreen';
import { ReactNode, useRef } from 'react';

export default function HomeClient({
  information,
  locale,
  baseUrl,
}: {
  information: ReactNode;
  locale: Locale;
  baseUrl: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${designScheme.designScheme} ${styles.container}`}
      ref={ref}
      style={locale === 'he' ? { direction: 'rtl' } : undefined}
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
        baseUrl={baseUrl}
      />
      {information}
    </div>
  );
}
