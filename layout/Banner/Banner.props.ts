import React, { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react'

export interface BannerProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}
