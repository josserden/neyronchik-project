import { FC } from 'react'
import { BannerProps } from './Banner.props'

export const Banner: FC<BannerProps> = ({ children }) => {
  return (
    <div className="bg-blue-400 py-2">
      <div className="container">
        <strong className="text-base font-semibold uppercase text-white">{children}</strong>
      </div>
    </div>
  )
}
