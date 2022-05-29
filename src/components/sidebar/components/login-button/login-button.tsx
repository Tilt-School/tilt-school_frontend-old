import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import UserInCircleIcon from 'src/assets/icons/user-in-circle.svg';
import { FlexBox } from 'src/components/UI/box';
import { Image } from 'src/components/UI/image';
import { RoutesEnum } from 'src/router/routes.enum';
import classes from './login-button.module.scss';

interface LoginButtonProps {
  className?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ className }) => {
  return (
    <FlexBox alignItems='center' className={clsx(classes.auth, className)}>
      <Link to={RoutesEnum.AUTH} className={classes.container}>
        <FlexBox alignItems='center' justifyContent='center' className={classes.iconContainer}>
          <Image className={classes.icon} src={UserInCircleIcon} alt='user in circle' />
        </FlexBox>
      </Link>
    </FlexBox>
  );
};

LoginButton.defaultProps = {
  className: '',
};
