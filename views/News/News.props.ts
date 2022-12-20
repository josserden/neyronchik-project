import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface Post extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  id: string
  caption?: string
  media_url: string
  permalink: string
  media_type:string
}

export interface PostsProps {
    posts: Post[],
    title: string
}