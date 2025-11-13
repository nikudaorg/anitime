import type en from './messages/en';
import type ru from './messages/ru';
import type he from './messages/he';

export type Messages = typeof en | typeof ru | typeof he;
