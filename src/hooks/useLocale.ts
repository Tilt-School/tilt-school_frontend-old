import { useEffect, useState } from 'react';
import { LOCALES } from 'src/locales/locales';

interface IUseLocaleHook {
  chosenLocale: LOCALES;
  setLocale: (language: LOCALES) => void;
}

export const useLocale = (): IUseLocaleHook => {
  const [chosenLocale, setChosenLocale] = useState<LOCALES>(LOCALES.UKRAINIAN);
  const LOCAL_STORAGE_KEY_FOR_LOCALE = 'preferred-locale';

  const getLocale = (): LOCALES => (localStorage.getItem(LOCAL_STORAGE_KEY_FOR_LOCALE) as LOCALES) || LOCALES.UKRAINIAN;

  const setLocale = (language: LOCALES) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_FOR_LOCALE, language);
    setChosenLocale(language);
  };

  useEffect(() => {
    const locale = getLocale();

    setLocale(locale);
  }, []);

  return { chosenLocale, setLocale };
};
