import en from './messages/en';
import ru from './messages/ru';
import he from './messages/he';
import type locales from '@/locales';
import type { Messages } from './Messages';

export type Locale = (typeof locales)[number];

const i18n = { en, ru, he } satisfies { [K in Locale]: Messages };
// export const I18NProvider = I18NContext.Provider;

export const getMessages = (locale: Locale) => {
  return i18n[locale];
};

export type { Messages };
