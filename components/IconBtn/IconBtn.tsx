import { FC } from 'react';
import classNames from 'classnames';
import { BsX, BsList } from 'react-icons/bs';
import { IconBtnProps } from './IconBtn.props';
import s from './IconBtn.module.css';

export const IconBtn: FC<IconBtnProps> = ({
  appearance = 'dark',
  variant,
  className,
  ...props
}) => {
  switch (variant) {
    case 'close':
      return (
        <button
          className={classNames(
            s.closeBtn,
            {
              [s.closeBtnDark]: appearance == 'dark',
              [s.closeBtnWhite]: appearance == 'white',
            },
            className,
          )}
          type="button"
          {...props}
        >
          <BsX className={s.closeBtnIcon} />
        </button>
      );

    case 'burger':
      return (
        <button
          className={classNames(s.burgerBtn, className)}
          type="button"
          {...props}
        >
          <BsList className={s.burgerBtnIcon} />
        </button>
      );

    default:
      return <></>;
  }
};
