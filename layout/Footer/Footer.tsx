import { FC } from 'react';
import { FooterProps } from './Footer.props';
import s from './Footer.module.css';
import { Container } from '@/components';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={s.footer} {...props}>
      <Container className={s.footerWrapper}>
        <p className={s.footerText}>
          &#169; {new Date().getFullYear()} Нейрончики - логопедичний центр. Усі
          права захищені
        </p>
      </Container>
    </footer>
  );
};
