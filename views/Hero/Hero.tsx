import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'nuka-carousel/lib/carousel';
import { rgbDataURL } from '@/utils';
import { useHeroSliderImage } from '@/hooks';
import { Button, Container, Heading } from '@/components';
import s from './Hero.module.css';

export const Hero: FC = () => {
  const { data, image } = useHeroSliderImage();

  return (
    <section className={s.section}>
      <Container className="h-full">
        <div className={s.sectionWrapper}>
          <Heading tag="h1" className={s.heading}>
            НЕЙРОНЧИКИ
          </Heading>

          <h2 className={s.subHeading}>Логопедичний центр</h2>

          <p className={s.description}>
            Допомагаємо дітям: з алалією, агнозією, диспраксією, дизартрією,
            дислексією, дискалькулією, РАС, СД, когнітивними порушеннями, з
            порушеннями обробки сенсорної інформації, гіперактивністю.
          </p>

          <Button className={s.button} appearance="primary" color="red">
            Записатися на прийом
          </Button>

          {image && (
            <div className={s.imageWrapper}>
              <Carousel
                cellAlign="center"
                wrapAround={true}
                adaptiveHeight
                autoplay
                speed={800}
                autoplayInterval={5000}
                withoutControls
              >
                {data.map((image, index) => {
                  return (
                    <Image
                      key={index}
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
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
