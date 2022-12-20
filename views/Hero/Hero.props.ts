import { ClassAttributes, DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface ImageType extends StaticImageData {
  src: string;
  width: number;
  height: number;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
  imageAttributes?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > &
    ClassAttributes<HTMLImageElement>;
}
