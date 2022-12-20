import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { ImageType } from '@/views/Hero/Hero.props';

import mobImage1 from '@/public/images/hero/img1-mob.png';
import pcImage1 from '@/public/images/hero/img1-pc.png';
import tabImage1 from '@/public/images/hero/img1-tab.png';

import mobImage2 from '@/public/images/hero/img2-mob.png';
import pcImage2 from '@/public/images/hero/img2-pc.png';
import tabImage2 from '@/public/images/hero/img2-tab.png';

import mobImage3 from '@/public/images/hero/img3-mob.png';
import pcImage3 from '@/public/images/hero/img3-pc.png';
import tabImage3 from '@/public/images/hero/img3-tab.png';

const state = [
  {
    mob: mobImage1,
    pc: pcImage1,
    tab: tabImage1,
  },
  {
    mob: mobImage2,
    pc: pcImage2,
    tab: tabImage2,
  },
  {
    mob: mobImage3,
    pc: pcImage3,
    tab: tabImage3,
  },
];

export const useHeroSliderImage = () => {
  const [data, setData] = useState<ImageType[]>([]);
  const [image, setImage] = useState<StaticImageData>();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isPc = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    if (isMobile) {
      setImage(mobImage1);

      setData(state.map(({ mob }): ImageType => mob) as ImageType[]);
    } else if (isTablet) {
      setImage(tabImage1);
      setData(state.map(({ tab }): ImageType => tab) as ImageType[]);
    } else if (isPc) {
      setImage(pcImage1);
      setData(state.map(({ pc }): ImageType => pc) as ImageType[]);
    }
  }, [isMobile, isTablet, isPc]);

  return { image, data };
};
