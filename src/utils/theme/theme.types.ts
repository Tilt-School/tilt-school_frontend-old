import { ThemeEnum } from 'src/types/enum';

export interface ThemeMotion {
  name: ThemeEnum;
  width: number;
  height: number;
  position: number; // can be used as x/y coordinate
  marginForCentering: number;
}
export interface IGetThemesMotionArrayOptions {
  defaultThemeItemSize?: number;
  activeThemeItemSize?: number;
  gap?: number;
}

export interface IGetThemesMotionArrayReturn {
  totalSize: number;
  themes: Array<ThemeMotion>;
}
