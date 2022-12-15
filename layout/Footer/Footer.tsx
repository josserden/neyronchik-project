import { FC } from 'react'
import { FooterProps } from './Footer.props'
import s from './Footer.module.css'

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={s.footer} {...props}>
      <div className={s.footerWrapper}>
        <p className={s.footerText}>
          &#169; {new Date().getFullYear()} Нейрончики - логопедичний центр. Усі права захищені
        </p>
      </div>
    </footer>
  )
}
