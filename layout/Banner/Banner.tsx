import { FC } from 'react'
import { CloseBtn } from '@/components'
import { useSessionStorage } from '@/hooks'
import s from './Banner.module.css'
import { BannerProps } from './Banner.props'

export const Banner: FC<BannerProps> = ({ children, ...props }) => {
  const { isHidden, handleClick } = useSessionStorage()

  return (
    <>
      {isHidden && (
        <div className={s.banner} {...props}>
          <div className={s.bannerWrapper}>
            <strong className={s.bannerText}>{children}</strong>
            <CloseBtn appearance="white" onClick={handleClick} />
          </div>
        </div>
      )}
    </>
  )
}
