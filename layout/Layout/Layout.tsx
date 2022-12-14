import { FC } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { LayoutProps } from './Layout.prop'

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-grow bg-gray-100">{children}</main>
      <Footer />
    </div>
  )
}
