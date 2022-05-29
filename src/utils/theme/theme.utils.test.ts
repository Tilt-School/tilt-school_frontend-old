import { ThemeEnum } from 'src/types/enum';
import { getThemesMotionArray, IGetThemesMotionArrayOptions, IGetThemesMotionArrayReturn } from 'src/utils';

describe('Theme Utils Tests', () => {
  let themesMotionArray: IGetThemesMotionArrayReturn;
  let themesMotionArrayWithCustomOptions: IGetThemesMotionArrayReturn;

  beforeAll(() => {
    themesMotionArray = getThemesMotionArray(ThemeEnum.DARK, {});
    themesMotionArrayWithCustomOptions = getThemesMotionArray(ThemeEnum.DARK, {
      defaultThemeItemSize: 27,
      activeThemeItemSize: 53,
      gap: 2,
    } as Required<IGetThemesMotionArrayOptions>);
  });

  test('test that the total size has been calculated correctly', () => {
    expect(themesMotionArray.totalSize).toBe(142);
    expect(themesMotionArrayWithCustomOptions.totalSize).toBe(169);
  });

  test('test that the position has been calculated correctly', () => {
    expect(themesMotionArray.themes.map((theme) => theme.position)).toEqual([0, 40, 68, 96, 124]);
    expect(themesMotionArrayWithCustomOptions.themes.map((theme) => theme.position)).toEqual([0, 55, 84, 113, 142]);
  });
});
