import { FC } from 'react'
import classNames from 'classnames'
import { BsX } from 'react-icons/bs'
import { CloseBtnProps } from './CloseBtn.props'
import s from './CloseBtn.module.css'

export const CloseBtn: FC<CloseBtnProps> = ({ appearance = 'dark', className, ...props }) => {
  return (
    <button
      className={classNames(
        s.closeBtn,
        {
          [s.closeBtnDark]: appearance == 'dark',
          [s.closeBtnWhite]: appearance == 'white',
        },
        className
      )}
      type="button"
      {...props}
    >
      <BsX className={s.closeBtnIcon} />
    </button>
  )
}
