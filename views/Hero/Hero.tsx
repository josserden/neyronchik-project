import { FC, useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'nuka-carousel/lib/carousel';
import { useMediaQuery } from 'react-responsive';
import { rgbDataURL } from '@/utils';
import { Button, Container, Heading } from '@/components';

import mobImage1 from '@/public/images/hero/img1-mob.png';
import pcImage1 from '@/public/images/hero/img1-pc.png';
import tabImage1 from '@/public/images/hero/img1-tab.png';

import mobImage2 from '@/public/images/hero/img2-mob.png';
import pcImage2 from '@/public/images/hero/img2-pc.png';
import tabImage2 from '@/public/images/hero/img2-tab.png';

import mobImage3 from '@/public/images/hero/img3-mob.png';
import pcImage3 from '@/public/images/hero/img3-pc.png';
import tabImage3 from '@/public/images/hero/img3-tab.png';

const INITIAL_STATE = [
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

export const Hero: FC = () => {
  // const [data, setData] = useState(INITIAL_STATE);

  // const [width, setWidth] = useState(pcImage1.width);
  // const [height, setHeight] = useState(pcImage1.height);
  const [image, setImage] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1278 });
  const isPc = useMediaQuery({ minWidth: 1279 });

  useEffect(() => {
    if (isMobile) {
      setImage(mobImage1);
    } else if (isTablet) {
      setImage(tabImage1);
    } else if (isPc) {
      setImage(pcImage1);
    }
  }, [isMobile, isTablet, isPc]);

  // useEffect(() => {
  //   setWidth(image.width);
  //   setHeight(image.height);
  // }, [image]);

  return (
    <section className="relative z-20 h-[576px] overflow-hidden pt-8 md:h-[584px] md:pt-[77px] xl:h-[668px] xl:pt-[100px]">
      <Container className="h-full">
        <div className="flex h-full max-w-xs flex-col md:max-w-md xl:max-w-xl xl:pl-[86px]">
          <Heading tag="h1" className="mb-1 md:mb-3 xl:mb-4">
            НЕЙРОНЧИКИ
          </Heading>

          <h2 className="mb-3 text-base font-bold leading-6 tracking-thick text-rose-600 md:mb-6 md:text-xl xl:mb-5 xl:text-2xl xl:leading-9">
            Логопедичний центр
          </h2>

          <p className="text-sm font-medium leading-[21px] tracking-thick text-neutral-900 md:mb-[60px] md:text-base">
            Допомагаємо дітям: з алалією, агнозією, диспраксією, дизартрією,
            дислексією, дискалькулією, РАС, СД, когнітивними порушеннями, з
            порушеннями обробки сенсорної інформації, гіперактивністю.
          </p>

          <Button
            className="mt-auto self-start md:mt-0"
            appearance="primary"
            color="red"
          >
            Записатися на прийом
          </Button>

          {image && (
            <div className="absolute -top-8 -left-1/2 -z-10 h-full w-full translate-x-1/2">
              <Carousel
                cellAlign="center"
                wrapAround={true}
                adaptiveHeight
                autoplay
                speed={800}
                autoplayInterval={5000}
                withoutControls
              >
                <Image
                  src={image}
                  alt="hero image"
                  placeholder="blur"
                  blurDataURL={rgbDataURL(111, 198, 240)}
                  style={{
                    margin: '0 auto',
                    objectFit: 'cover',
                  }}
                  priority
                />
                <Image
                  src={image}
                  alt="hero image"
                  placeholder="blur"
                  blurDataURL={rgbDataURL(111, 198, 240)}
                  style={{
                    margin: '0 auto',
                    objectFit: 'cover',
                  }}
                  priority
                />
              </Carousel>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
