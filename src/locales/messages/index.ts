import { LOCALES } from 'src/locales/locales';
import { englishMessages } from 'src/locales/messages/en';
import { ukrainianMessages } from 'src/locales/messages/ua';

export const messages = {
  [LOCALES.UKRAINIAN]: { ...ukrainianMessages },
  [LOCALES.ENGLISH]: { ...englishMessages },
};
