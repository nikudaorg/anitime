'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const detectPreferredLocale = () => {
  const supported = ['en', 'ru', 'he'];
  try {
    return (
      navigator.languages.find((l) => supported.includes(l.split('-')[0]))?.split('-')[0] || 'en'
    );
  } catch {
    return 'en';
  }
};

export default function InsertLocalePage({ parts }: { parts: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const query = searchParams.toString();

    router.replace(
      `${detectPreferredLocale()}/${parts.join('/')}${query ? `?${query}` : ''}`
    );
  }, [searchParams, router, parts]);
  return null;
}
