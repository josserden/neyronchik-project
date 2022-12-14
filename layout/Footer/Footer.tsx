import classNames from 'classnames'
import { FC } from 'react'
import { FooterProps } from './Footer.props'

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={classNames('border-t-2 border-slate-200 py-6', className)} {...props}>
      <div className="container flex items-center justify-center">
        <p className=" text-base font-light leading-6 text-gray-700">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
