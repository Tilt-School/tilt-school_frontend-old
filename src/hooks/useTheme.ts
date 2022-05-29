import { useEffect } from 'react';
import { useBodyClass } from 'src/hooks/useBodyClass';
import { useTypedDispatch } from 'src/hooks/useTypedDispatch';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { toggleTheme } from 'src/store/slices/common.slice';
import { ThemeEnum } from 'src/types/enum';

type IUseThemeHook = readonly [ThemeEnum, (themeToSet: ThemeEnum) => void];

export const useTheme = (): IUseThemeHook => {
  const { activeTheme } = useTypedSelector((state) => state.commonReducer);
  const dispatch = useTypedDispatch();
  const bodyClass = useBodyClass();

  const getUserTheme = (): ThemeEnum.DARK | ThemeEnum.LIGHT => {
    const isDarkModeActive = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    if (isDarkModeActive) return ThemeEnum.DARK;

    return ThemeEnum.LIGHT;
  };

  const setTheme = (themeToSet: ThemeEnum) => {
    bodyClass.removeClass(activeTheme);
    bodyClass.addClass(themeToSet);
    localStorage.setItem('theme', themeToSet);
    dispatch(toggleTheme(themeToSet));
  };

  useEffect(() => {
    let themeToSet = localStorage.getItem('theme') as ThemeEnum;

    if (!themeToSet) themeToSet = getUserTheme();

    setTheme(themeToSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [activeTheme, setTheme] as const;
};
