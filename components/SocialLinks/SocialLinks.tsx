import { FC } from 'react';
import { SocialLinksProps } from './SocialLinks.props';
import s from './SocialLinks.module.css';

import Facebook from '@/public/images/social-icons/facebook.svg';
import Instagram from '@/public/images/social-icons/instagram.svg';
import Telegram from '@/public/images/social-icons/telegram.svg';

const socialLinks = [
  { id: 'facebook', icon: <Facebook />, href: 'https://www.facebook.com/' },
  { id: 'facebook', icon: <Instagram />, href: 'https://www.instagram.com/' },
  { id: 'facebook', icon: <Telegram />, href: 'https://telegram.org/' },
];

export const SocialLinks: FC = () => {
  return (
    <div className={s.linkWrapper}>
      <a className={s.tel} href="tel:+38(068)8221662">
        +38 (068) 822 16 62
      </a>

      <ul className={s.socialLinks}>
        {socialLinks.map(({ id, icon, href }: SocialLinksProps) => (
          <li key={id}>
            <a
              className={s.socialLink}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={id}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
