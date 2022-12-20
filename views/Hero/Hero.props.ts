import { StaticImageData } from 'next/image';

export interface ImageType extends StaticImageData {
  src: string;
  width: number;
  height: number;
}
