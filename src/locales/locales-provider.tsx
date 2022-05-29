import React from 'react';
import { IntlProvider } from 'react-intl';
import { useLocale } from 'src/hooks';
import { messages } from 'src/locales/messages';
import { LOCALES } from './locales';

type LocalesProviderProps = React.PropsWithChildren<Record<string, unknown>>;

export const LocalesProvider: React.FC<LocalesProviderProps> = ({ children }) => {
  const { chosenLocale } = useLocale();

  return (
    <IntlProvider messages={messages[chosenLocale]} locale={chosenLocale} defaultLocale={LOCALES.ENGLISH}>
      {children}
    </IntlProvider>
  );
};
