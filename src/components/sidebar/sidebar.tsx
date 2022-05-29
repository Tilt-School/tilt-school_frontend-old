import React from 'react';
import clsx from 'clsx';
import { LoginButton } from 'src/components/sidebar/components/login-button';
import { Logotype } from 'src/components/sidebar/components/logo/logo';
import { Menu } from 'src/components/sidebar/components/menu';
import { FlexBox } from 'src/components/UI/box';
import classes from './sidebar.module.scss';

export const Sidebar: React.FC = () => {
  return (
    <FlexBox className={classes.sidebar}>
      <FlexBox justifyContent='center' alignItems='center' className={classes.container}>
        <Logotype className={clsx(classes.headerChild, classes.logoContainer)} />
        <Menu className={classes.menu} burgerClassName={classes.headerChild} />
        <LoginButton className={clsx(classes.headerChild, classes.loginButton)} />
      </FlexBox>
    </FlexBox>
  );
};
