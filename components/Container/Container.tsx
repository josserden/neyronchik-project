import { FC } from 'react';
import classNames from 'classnames';
import { ContainerProps } from './Container.props';
import s from './Container.module.css';

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classNames(s.wrapper, className)} {...props}>
      {children}
    </div>
  );
};
