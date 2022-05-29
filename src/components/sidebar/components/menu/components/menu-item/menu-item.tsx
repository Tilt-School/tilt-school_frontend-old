import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import sidebarClasses from 'src/components/sidebar/sidebar.module.scss';
import { FlexBox } from 'src/components/UI/box';
import { Image } from 'src/components/UI/image';
import classes from './menu-item.module.scss';

interface MenuItemProps {
  icon: string;
  path: string;
  alt: string;
  title: string;
  tabIndex: number;
  className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ path, icon, alt, title, tabIndex, className }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => clsx(className, classes.menuItem, isActive && classes.active)}
      tabIndex={tabIndex}
      data-testid={`menu-item-${title}`}
    >
      <FlexBox alignItems='center' className={classes.menuItemContainer}>
        <FlexBox justifyContent='center' alignItems='center' className={classes.iconWrapper}>
          <Image src={icon} alt={alt} className={classes.icon} />
        </FlexBox>
        <div
          role='none'
          className={clsx(
            classes.body,
            sidebarClasses._sidebarClosedHide,
            sidebarClasses._sidebarClosedTranslate,
            sidebarClasses._sidebarClosedHideTranslate,
          )}
        >
          <h3 className={classes.title}>{title}</h3>
        </div>
      </FlexBox>
    </NavLink>
  );
};

MenuItem.defaultProps = {
  className: '',
};
