import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IconBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance?: 'white' | 'dark';
  variant: 'close' | 'burger';
}
