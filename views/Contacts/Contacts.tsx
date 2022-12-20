import { FC } from 'react';
import Map from '@/components/Map/Map';
import { Heading } from '@/components/Heading/Heading';
import Boy from '../../public/images/contacts_boy.svg';
import s from './Contacts.module.css';
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

export const Contacts: FC = () => {
  return (
    <div>
      Contacts
      <Heading tag="h2" className={s.heading}>
        Контакты
      </Heading>
      <div className={s.contactsWrapper}>
        <div className={s.contactsInfoWrapper}>
          <div className={s.contactsInfo}>
            <h4>Зв’яжіться з нами або завітайте у гості</h4>
            <a href="tel:+380688221662">+38 (068) 822 16 62</a>
            <a href="mailto:sdfvffd@gmail.com">sdfvffd@gmail.com</a>
            <ul>
              <li>
                <FaTelegramPlane />
              </li>
              <li>
                <FaWhatsapp />
              </li>
            </ul>
            <h4>Ми у соціальних мережах:</h4>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
            <div>
              <address>
                <h4>Адреса:</h4>
                <a
                  href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F,+94,+%D0%98%D1%80%D0%BF%D0%B5%D0%BD%D1%8C,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+08200/@50.5208434,30.2196167,19z/data=!4m5!3m4!1s0x472b317b8377e027:0x748e502a5356f1da!8m2!3d50.521326!4d30.219172"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  м. Ірпінь вул. Садова 94, 2й поверх
                </a>
              </address>
              <h4>Часи роботи:</h4>
              <p>З 9:00 до 17:00</p>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};
