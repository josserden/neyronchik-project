import classNames from 'classnames'
import { FC } from 'react'
import { HeaderProps } from './Header.props'

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={classNames('border py-5', className)} {...props}>
      <div className="container flex items-center justify-between">
        <p className="text-4xl font-black">Neuronchik.</p>
      </div>
    </header>
  )
}
