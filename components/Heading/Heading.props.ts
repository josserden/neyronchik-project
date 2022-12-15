import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

export interface HeadingBtnProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode
  tag: 'h1' | 'h2' | 'h3'
  type?: 'cursive' | 'normal'
}
