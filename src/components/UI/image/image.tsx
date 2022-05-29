import React from 'react';
import clsx from 'clsx';
import classes from './image.module.scss';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={clsx(className, classes.image)} data-testid={`image-component-${alt}`} />;
};

Image.defaultProps = {
  className: '',
};
