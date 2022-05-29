import React from 'react';
import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { animated, useTransition } from 'react-spring';
import { BurgerButton } from 'src/components/sidebar/components/menu/components/burger-button';
import { MenuItem } from 'src/components/sidebar/components/menu/components/menu-item';
import sidebarClasses from 'src/components/sidebar/sidebar.module.scss';
import { ThemeSelector } from 'src/components/theme-selector';
import { useTypedSelector } from 'src/hooks';
import { routesInSidebarMenu } from 'src/router/routes';
import classes from './menu.module.scss';

interface MenuProps {
  className?: string;
  burgerClassName?: string;
}

export const Menu: React.FC<MenuProps> = ({ className, burgerClassName }) => {
  const { isSidebarMenuActive } = useTypedSelector((state) => state.commonReducer);
  const { isAuthenticated } = useTypedSelector((state) => state.authReducer);
  const intl = useIntl();
  const overlayTransition = useTransition(isSidebarMenuActive, {
    from: { opacity: 0 },
    enter: { opacity: 0.6 },
    leave: { opacity: 0 },
    delay: 300,
  });
  const filteredRoutes = React.useMemo(
    () =>
      routesInSidebarMenu.filter((route) => {
        return isAuthenticated ? route.sidebarType.authorized : route.sidebarType.default;
      }),
    [isAuthenticated],
  );

  return (
    <nav className={clsx(classes.menu, isSidebarMenuActive && classes.active, className)} data-testid='menu-component'>
      <BurgerButton className={burgerClassName} />
      <div className={classes.menuBody} data-testid='menu-body'>
        <div className={classes.menuList}>
          {filteredRoutes.map(({ path, icon, titleInMenu }) => (
            <MenuItem
              key={path}
              className={classes.menuItem}
              path={path}
              title={intl.formatMessage({ id: titleInMenu, defaultMessage: titleInMenu })}
              icon={icon.icon}
              alt={icon.alt}
              tabIndex={isSidebarMenuActive ? 0 : -1}
            />
          ))}
        </div>
        <div className={clsx(classes.themeSelector)}>
          <ThemeSelector nonActiveClassName={sidebarClasses._sidebarClosedHide} />
        </div>
      </div>
      {overlayTransition((style, item) => item && <animated.div style={style} className={classes.overlay} />)}
    </nav>
  );
};

Menu.defaultProps = {
  className: '',
  burgerClassName: '',
};
