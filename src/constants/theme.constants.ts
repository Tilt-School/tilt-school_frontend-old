import { ThemeEnum } from 'src/types/enum';

type TSupportedTheme = {
  [key in ThemeEnum]: string;
};

export const supportedThemeMainColors: TSupportedTheme = {
  [ThemeEnum.DARK]: '#25282A',
  [ThemeEnum.LIGHT]: '#FFFFFF',
  [ThemeEnum.PURPLE]: '#6378E1',
  [ThemeEnum.BLUE]: '#314B71',
  [ThemeEnum.RED]: '#7D2F25',
};
