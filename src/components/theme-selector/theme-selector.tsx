import React from 'react';
import clsx from 'clsx';
import { animated, useTransition } from 'react-spring';
import { supportedThemeMainColors } from 'src/constants';
import { useTheme, useTypedSelector } from 'src/hooks';
import { ThemeEnum } from 'src/types/enum';
import { getThemesMotionArray } from 'src/utils';
import classes from './theme-selector.module.scss';

interface ThemeSelectorProps {
  className?: string;
  activeClassName?: string;
  nonActiveClassName?: string;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className, activeClassName, nonActiveClassName }) => {
  const { isSidebarMenuActive } = useTypedSelector((state) => state.commonReducer);
  const [activeTheme, setActiveTheme] = useTheme();
  const { themes: themesList, totalSize: parentBlockWidth } = getThemesMotionArray(activeTheme, {});
  const [transitions] = useTransition(
    themesList,
    {
      key: (theme: { name: ThemeEnum }) => theme.name,
      from: { scale: 0, opacity: 0 },
      leave: { scale: 0, opacity: 0 },
      enter: ({ position: x, width, height, marginForCentering: marginTop }) => ({
        x,
        width,
        height,
        marginTop,
        scale: 1,
        opacity: 1,
      }),
      update: ({ position: x, width, height, marginForCentering: marginTop }) => ({ x, width, height, marginTop }),
    },
    [activeTheme],
  );

  const changeTheme = (selectedTheme: ThemeEnum) => setActiveTheme(selectedTheme);

  return (
    <div className={clsx(classes.themeSelector, className)} data-testid='theme-selector'>
      <ul className={classes.themesList} style={{ width: parentBlockWidth }}>
        {transitions((style, { name }, t, index: number) => (
          <animated.li
            style={{
              zIndex: 5 - index,
              backgroundColor: supportedThemeMainColors[name],
              ...style,
            }}
            className={clsx(classes.themeItem, name === activeTheme ? activeClassName : nonActiveClassName)}
            onClick={() => changeTheme(name)}
            onKeyDown={(e) => e.code === 'Enter' && changeTheme(name)}
            aria-label={`Select ${name} theme`}
            tabIndex={isSidebarMenuActive ? 0 : -1}
            data-testid={`theme-selector-item-${name}`}
          />
        ))}
      </ul>
    </div>
  );
};

ThemeSelector.defaultProps = {
  className: '',
  activeClassName: '',
  nonActiveClassName: '',
};
