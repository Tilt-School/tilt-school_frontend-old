import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/icons/logo.svg';
import sidebarClasses from 'src/components/sidebar/sidebar.module.scss';
import { FlexBox } from 'src/components/UI/box';
import { Image } from 'src/components/UI/image';
import { RoutesEnum } from 'src/router/routes.enum';
import classes from './logo.module.scss';

interface LogotypeProps {
  className?: string;
}

export const Logotype: React.FC<LogotypeProps> = ({ className }) => {
  return (
    <Link to={RoutesEnum.HOME} className={clsx(classes.logoContainer, className)}>
      <FlexBox alignItems='center'>
        <div className={classes.logo}>
          <Image className={classes.logoIcon} src={Logo} alt='logo' />
        </div>
        <div
          className={clsx(
            classes.logoBody,
            sidebarClasses._sidebarClosedHide,
            sidebarClasses._sidebarClosedTranslate,
            sidebarClasses._sidebarClosedHideTranslate,
          )}
        >
          <h1 className={classes.logoTitle}>Tilt School</h1>
        </div>
      </FlexBox>
    </Link>
  );
};

Logotype.defaultProps = {
  className: '',
};
