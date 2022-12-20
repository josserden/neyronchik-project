import { FC } from 'react';
import { Banner, Footer, Header } from '..';
import { LayoutProps } from './Layout.props';
import s from './Layout.module.css';

export const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className={s.pageWrapper} {...props}>
      <Banner>
        АКЦІЯ МІСЯЦЯ!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Banner>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};
