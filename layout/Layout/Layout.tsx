import { FC } from 'react'
import { useSessionStorage } from '@/hooks'
import { Banner, Footer, Header } from '..'
import { LayoutProps } from './Layout.props'

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isHidden, handleClick } = useSessionStorage()

  return (
    <div className="flex h-full min-h-screen flex-col bg-slate-50">
      {isHidden && (
        <Banner>
          <strong>Text</strong>
          <button type="button" onClick={handleClick}>
            close
          </button>
        </Banner>
      )}

      <Header />
      <main className="flex-grow bg-gray-100">{children}</main>
      <Footer />
    </div>
  )
}
