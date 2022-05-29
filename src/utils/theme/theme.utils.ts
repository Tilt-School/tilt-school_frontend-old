import { ThemeEnum } from 'src/types/enum';
import { IGetThemesMotionArrayOptions, IGetThemesMotionArrayReturn, ThemeMotion } from 'src/utils/theme/theme.types';

/**
 * Returns an array to handle animations in the <ThemeSelector /> component
 *
 * @param {string} activeTheme                    Current active theme
 * @param {Object} options
 * @param {number} options.defaultThemeItemSize   Not active theme item size
 * @param {number} options.activeThemeItemSize    Active theme item size
 * @param {number} options.gap                    Space between theme items
 * @returns {{totalSize: number, themes: {position: number, name: string, width: number, marginLeft: number, height: number}[]}}
 */
export const getThemesMotionArray = (
  activeTheme: ThemeEnum,
  { defaultThemeItemSize = 18, activeThemeItemSize = 30, gap = 10 }: IGetThemesMotionArrayOptions,
): IGetThemesMotionArrayReturn => {
  let totalSize = 0;
  const themes = Object.values(ThemeEnum)
    .sort((theme) => (theme === activeTheme ? -1 : 1))
    .map((theme): ThemeMotion => {
      const isThemeActive = theme === activeTheme;
      const themeItemSize = isThemeActive ? activeThemeItemSize : defaultThemeItemSize;
      const position = totalSize;

      totalSize = totalSize + themeItemSize + gap;

      return {
        position,
        name: theme,
        width: themeItemSize,
        height: themeItemSize,
        marginForCentering: isThemeActive ? 0 : (activeThemeItemSize - defaultThemeItemSize) / 2,
      };
    });

  /**
   * Subtract the indent of the last element
   */
  totalSize -= gap;

  return {
    totalSize,
    themes,
  };
};
