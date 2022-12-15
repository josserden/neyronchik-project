import { FC } from 'react'

import { Banner, Footer, Header } from '..'
import { LayoutProps } from './Layout.props'
import classNames from 'classnames'

export const Layout: FC<LayoutProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={classNames('flex h-full min-h-screen flex-col bg-amber-50', className)}
      {...props}
    >
      <Banner>АКЦІЯ МІСЯЦЯ!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Banner>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
