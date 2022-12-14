import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '@/styles/global.css'
import { Layout } from '@/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)
