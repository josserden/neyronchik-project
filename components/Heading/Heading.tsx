import { FC } from 'react';
import classNames from 'classnames';
import { HeadingBtnProps } from './Heading.props';
import s from './Heading.module.css';

export const Heading: FC<HeadingBtnProps> = ({
  tag,
  children,
  className,
  ...props
}) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={classNames(className, s.h1)} {...props}>
          {children}
        </h1>
      );

    case 'h2':
      return (
        <h2 className={classNames(className, s.h2)} {...props}>
          {children}
        </h2>
      );

    case 'h3':
      return (
        <h3 className={classNames(className, s.h3)} {...props}>
          {children}
        </h3>
      );

    default:
      return null;
  }
};
