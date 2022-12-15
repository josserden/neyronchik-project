import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Layout } from '@/layout';
import '@/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
