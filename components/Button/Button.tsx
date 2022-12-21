import { FC } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.props';
import s from './Button.module.css';

export const Button: FC<ButtonProps> = ({
  appearance = 'primary',
  color = 'red',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(s.button, className, {
        [s.primary]: appearance == 'primary',
        [s.ghost]: appearance == 'ghost',
        [s.red]: color == 'red' && appearance == 'primary',
        [s.blue]: color == 'blue' && appearance == 'primary',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
