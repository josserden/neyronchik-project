import { FC } from 'react';
import { useCurrentNavbar } from '@/hooks';
import { Container, LangToggle, MobileMenu, Navbar } from '@/components';
import s from './Header.module.css';
import Logo from '@/public/images/logo.svg';

export const Header: FC = () => {
  const { showMenu, showNavbar } = useCurrentNavbar();

  return (
    <header className={s.header}>
      <Container className={s.headerWrapper}>
        {showMenu && <MobileMenu />}
        <Logo className={s.headerLogo} />
        {showNavbar && <Navbar className={s.headerNav} />}
        <LangToggle />
      </Container>
    </header>
  );
};
