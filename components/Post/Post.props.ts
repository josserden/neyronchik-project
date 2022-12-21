import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface PostProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  caption?: string;
  media_url: string;
  permalink: string;
  media: string;
}
