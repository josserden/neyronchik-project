import { FC } from 'react';
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { Container, Heading } from '@/components';
import Map from '@/components/Map/Map';

import Instagram from '@/public/images/social-icons/instagram_noborders.svg';
import s from './Contacts.module.css';

const contacts = {
  title: 'Зв’яжіться з нами або завітайте у гості',
  contacts: [
    {
      type: 'tel',
      value: '+38 (068) 822 16 62',
    },
    {
      type: 'mailto',
      value: 'sdfvffd@gmail.com',
    },
  ],
  social: [
    {
      type: 'telegram',
      value: 'https://telegram.org/',
    },
    {
      type: 'whatsapp',
      value: 'https://www.whatsapp.com/',
    },
  ],
  socialTitle: 'Ми у соціальних мережах:',
  socialIcons: [
    {
      type: 'facebook',

      value: 'https://www.facebook.com/',
    },
    {
      type: 'instagram',
      value: 'https://www.instagram.com/',
    },
  ],
  address: {
    title: 'Адреса',
    value: 'м. Ірпінь, вул. Садова 94, 2й поверх',
    href: 'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F,+94,+%D0%98%D1%80%D0%BF%D0%B5%D0%BD%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08200/@50.5208434,30.2196167,19z/data=!4m5!3m4!1s0x472b317b8377e027:0x748e502a5356f1da!8m2!3d50.521326!4d30.219172',
  },
  time: {
    title: 'Часи роботи:',
    value: 'З 9:00 до 17:00',
  },
};

export const Contacts: FC = () => {
  return (
    <Container className={s.container}>
      <Heading tag="h2" className={s.heading}>
        Контакти
      </Heading>

      <div className={s.contactsWrapper}>
        <div className={s.contactsInfoWrapper}>
          <div className={s.contactsInfo}>
            <h4 className={s.contactUs}>{contacts.title}</h4>

            <div className={s.mainContactContent}>
              <div>
                <div className={s.mailPhone}>
                  {contacts.contacts.map(({ type, value }) => (
                    <a key={type} href={`${type}:${value.split(' ').join('')}`}>
                      {value}
                    </a>
                  ))}
                </div>

                <ul className={s.list}>
                  {contacts.social.map(({ type, value }) => (
                    <li key={type}>
                      <a
                        className={s.socialLink}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {type === 'telegram' && (
                          <FaTelegramPlane className="h-5 w-5" />
                        )}
                        {type === 'whatsapp' && (
                          <FaWhatsapp className="h-5 w-5" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>

                <h4 className={s.socialTitle}>{contacts.socialTitle}</h4>
                <ul className={s.list}>
                  {contacts.socialIcons.map(({ type, value }) => (
                    <li key={type}>
                      <a
                        className={s.socialLink}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {type === 'facebook' && (
                          <FaFacebookF className="h-5 w-5" />
                        )}
                        {type === 'instagram' && (
                          <Instagram className="h-5 w-5" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={s.addressBlock}>
                <address>
                  <a
                    href={contacts.address.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    м. Ірпінь <br /> вул. Садова 94,{' '}
                    <br className="hidden md:block" /> 2й поверх
                  </a>
                </address>
                <div>
                  <h4>{contacts.time.title}</h4>
                  <p>{contacts.time.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.mapStyle}>
          <Map />
        </div>
      </div>
    </Container>
  );
};
