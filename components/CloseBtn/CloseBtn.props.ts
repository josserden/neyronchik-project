import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface CloseBtnProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: 'white' | 'dark'
}
