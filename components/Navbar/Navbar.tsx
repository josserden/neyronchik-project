import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from '../NavLink/NavLink';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import s from './Navbar.module.css';
import { NavbarProps } from './Navbar.props';

export const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  return (
    <div className={classNames(s.navbar, className)} {...props}>
      <NavLink />
      <SocialLinks />
    </div>
  );
};
