import React from 'react';
import clsx from 'clsx';
import classes from './flexbox.module.scss';

type AlignItemsValues = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';

type JustifyContentValues =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

type FlexDirectionValues = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type FlexWrapValues = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial';

interface IFlexBox extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignItems?: AlignItemsValues;
  justifyContent?: JustifyContentValues;
  flexDirection?: FlexDirectionValues;
  flexWrap?: FlexWrapValues;
  className?: string;
}

export const FlexBox: React.FC<React.PropsWithChildren<IFlexBox>> = ({
  children,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  className,
  ...props
}) => {
  const classNames = clsx(
    classes.flexBox,
    alignItems && classes[`alignItems-${alignItems}`],
    justifyContent && classes[`justifyContent-${justifyContent}`],
    flexDirection && classes[`flexDirection-${flexDirection}`],
    flexWrap && classes[`flexWrap-${flexWrap}`],
    className,
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

FlexBox.defaultProps = {
  alignItems: undefined,
  justifyContent: undefined,
  flexDirection: undefined,
  flexWrap: undefined,
  className: undefined,
};
