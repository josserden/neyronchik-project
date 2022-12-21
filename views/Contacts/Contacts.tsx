import { FC } from 'react';
import Map from '@/components/Map/Map';
import { Heading } from '@/components/Heading/Heading';
import { Container } from '@/components';

import s from './Contacts.module.css';
import { FaTelegramPlane, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import Instagram from '@/public/images/social-icons/instagram_noborders.svg';

export const Contacts: FC = () => {
  return (
    <Container className={s.container}>
      <Heading tag="h2" className={s.heading}>
        Контакти
      </Heading>
      <div className={s.contactsWrapper}>
        <div className={s.contactsInfoWrapper}>
          <div className={s.contactsInfo}>
            <h4 className={s.contactUs}>
              Зв’яжіться з нами або завітайте у гості
            </h4>
            <div className={s.mainContactContent}>
              <div>
                <div className={s.mailPhone}>
                  <a href="tel:+380688221662">+38 (068) 822 16 62</a>
                  <a href="mailto:sdfvffd@gmail.com">sdfvffd@gmail.com</a>
                </div>

                <ul className={s.list}>
                  <li>
                    <a
                      className={s.socialLink}
                      href="https://telegram.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegramPlane size={18} />
                    </a>
                  </li>
                  <li>
                    <a
                      className={s.socialLink}
                      href="https://www.whatsapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp size={22} />
                    </a>
                  </li>
                </ul>
                <h4 className={s.socialTitle}>Ми у соціальних мережах:</h4>
                <ul className={s.list}>
                  <li>
                    <a
                      className={s.socialLink}
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF size={17} />
                    </a>
                  </li>
                  <li>
                    <a
                      className={s.socialLink}
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram width="20px" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={s.addressBlock}>
                <address>
                  <a
                    href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F,+94,+%D0%98%D1%80%D0%BF%D0%B5%D0%BD%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08200/@50.5208434,30.2196167,19z/data=!4m5!3m4!1s0x472b317b8377e027:0x748e502a5356f1da!8m2!3d50.521326!4d30.219172"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    м. Ірпінь <br /> вул. Садова 94,{' '}
                    <br className="hidden md:block" /> 2й поверх
                  </a>
                </address>
                <div>
                  <h4>Часи роботи:</h4>
                  <p>З 9:00 до 17:00</p>
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
