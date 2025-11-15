'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const toDefaultSymbol = Symbol();

export default function useUrlState<Default, Value>(
  key: string,
  default_: Default,
  parse: (value: string, toDefault: () => typeof toDefaultSymbol) => Value | typeof toDefaultSymbol,
  stringify: (value: Value) => string
) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateUrl = useCallback(
    (next: string | null) => {
      const params = new URLSearchParams(searchParams.toString());

      if (next === null) params.delete(key);
      else params.set(key, next);

      router.push(`?${params.toString()}`);
    },
    [router, searchParams, key]
  );

  const paramValue = searchParams.get(key);
  let value: Value | Default;

  if (paramValue === null) {
    value = default_;
  } else {
    const parseResult = parse(paramValue, () => toDefaultSymbol);
    if (parseResult === toDefaultSymbol) {
      value = default_;
      updateUrl(null);
    } else {
      value = parseResult;
    }
  }

  return [
    value,
    useCallback(
      (value: Value | Default) => updateUrl(value === default_ ? null : stringify(value as Value)),
      [default_, stringify, updateUrl]
    ),
  ] as const;
}
