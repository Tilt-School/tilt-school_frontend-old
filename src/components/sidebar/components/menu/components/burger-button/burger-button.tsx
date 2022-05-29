import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { closeSidebarMenu, openSidebarMenu } from 'src/store/slices/common.slice';
import classes from './burger-button.module.scss';

interface BurgerButtonProps {
  className?: string;
}

const tabletEndpoint = 767.98;

export const BurgerButton: React.FC<BurgerButtonProps> = ({ className }) => {
  const { isSidebarMenuActive } = useTypedSelector((state) => state.commonReducer);
  const dispatch = useTypedDispatch();
  const [menuHasBeenToggledDueToResizing, setMenuHasBeenToggledDueToResizing] = useState(false);
  const isTouchScreenDevice = window.innerWidth < tabletEndpoint;

  const closeMenu = () => {
    if (window.innerWidth < tabletEndpoint) document.body.style.overflow = 'auto';

    dispatch(closeSidebarMenu());
  };

  const openMenu = () => {
    if (window.innerWidth < tabletEndpoint) document.body.style.overflow = 'hidden';

    dispatch(openSidebarMenu());
  };

  const toggleMenu = () => {
    return isSidebarMenuActive ? closeMenu() : openMenu();
  };

  /**
   * Switching the menu status when the window size changes
   */
  useEffect(() => {
    const onResize = (e: UIEvent) => {
      /**
       * * If the user opens the menu,
       * * then resizes the screen to more than 767.98px and
       * * then back again, the menu automatically closes
       */
      if (window.innerWidth < tabletEndpoint) {
        if (isSidebarMenuActive && menuHasBeenToggledDueToResizing) {
          setMenuHasBeenToggledDueToResizing(false);

          return closeMenu();
        }

        return e.preventDefault();
      }

      /**
       * Here window.innerWidth > 767.98
       *
       * * We need to make the menu state open (isSidebarMenuActive === true),
       * * so that the menu item is accessible from the keyboard via tabIndex
       * * <MenuItem ... tabIndex={isSidebarMenuActive ? 0 : -1} />
       */
      setMenuHasBeenToggledDueToResizing(true);

      if (document.body.style.overflow === 'hidden') document.body.style.overflow = 'auto';

      if (isSidebarMenuActive) return e.preventDefault();

      return openMenu();
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <div
      role='button'
      className={clsx(classes.burger, className, (isSidebarMenuActive || !isTouchScreenDevice) && classes.active)}
      onClick={toggleMenu}
      onKeyDown={(e) => e.code === 'Enter' && toggleMenu()}
      aria-label={`${isSidebarMenuActive || !isTouchScreenDevice ? 'Close' : 'Open'} menu`}
      tabIndex={0}
      data-testid='menu-burger-button'
    >
      {[1, 2, 3].map((elem) => (
        <span key={elem} className={clsx(classes.line, classes[`line_${elem}`])} />
      ))}
    </div>
  );
};

BurgerButton.defaultProps = {
  className: '',
};
