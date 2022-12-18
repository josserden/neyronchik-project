import { FC } from 'react';
import { NavLinkProps } from './NavLink.props';
import s from './NavLink.module.css';

const navLink = [
  { id: 'about-us', title: 'Про нас' },
  { id: 'service', title: 'Послуги' },
  { id: 'our-team', title: 'Наша команда' },
  { id: 'gallery', title: 'Галерея' },
  { id: 'news', title: 'Новини' },
  { id: 'contacts', title: 'Контакти' },
];

export const NavLink: FC = () => {
  return (
    <nav>
      <ul className={s.linkList}>
        {navLink.map(({ id, title }: NavLinkProps) => (
          <li key={id} className={s.linkItem}>
            <a href="#" className={s.navLink}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
