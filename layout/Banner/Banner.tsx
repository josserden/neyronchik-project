import cn from 'classnames'
import { FC } from 'react'
import { BannerProps } from './Banner.props'

export const Banner: FC<BannerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('opacity bg-blue-400 py-2', className)} {...props}>
      <div className="container">{children}</div>
    </div>
  )
}
