import { FC } from 'react';
import classNames from 'classnames';
import { NavbarProps } from './Navbar.props';

const navLink = [
  { id: 'about-us', title: 'про нас' },
  { id: 'service', title: 'послуги' },
  { id: 'our-team', title: 'наша команда' },
  { id: 'gallery', title: 'галерея' },
  { id: 'news', title: 'новини' },
  { id: 'contacts', title: 'контакти' },
];

export const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  return (
    <nav className={classNames(className)} {...props}>
      <ul className="flex gap-9">
        {navLink.map(({ id, title }) => (
          <li key={id}>
            <a
              href="#"
              className=" text-sm font-medium text-neutral-900 transition-colors first-letter:uppercase hover:text-sky-700 focus:text-sky-700"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
