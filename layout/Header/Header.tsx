import { FC } from 'react';
import { HeaderProps } from './Header.props';
import Logo from '../../public/images/logo.svg';
import { IconBtn, LangToggle, Navbar } from '@/components';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className="bg-cyan-100 py-1" {...props}>
      <div className="container flex items-center justify-between">
        <IconBtn variant="burger" className="xl:hidden" />
        <Logo className=" w-[164px]" />
        <Navbar />
        <LangToggle />
      </div>
    </header>
  );
};
