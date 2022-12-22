import { Container, Heading, Scrollbar } from '@/components';
import Image from 'next/image';
import { FC, useState } from 'react';

export const OurTeam: FC = () => {
  const [certificates] = useState(new Array(6).fill(0));

  return (
    <section className=" pt-20 md:pt-[100px] xl:pt-[140px]">
      <Container>
        <Heading tag="h2">Наша команда</Heading>

        <ul>
          <li className="bg-glass px-3 pt-5 pb-7">
            <div className="relative overflow-hidden rounded-[20px]">
              <Image
                src="/images/bytesize_photo.png"
                alt="bytesize_photo"
                width={300}
                height={300}
              />
            </div>

            <div className="grid grid-cols-1 gap-2 pt-4 pb-6 text-neutral-900">
              <h3 className="text-xl font-bold leading-6 tracking-[0.04em]">
                {'Ланова Марія Вікторівна'.split(' ').map((word, index) => {
                  if (index == 0) {
                    return (
                      <span key={index} className="block">
                        {word}
                      </span>
                    );
                  }

                  return (
                    <span className="mr-1 inline" key={index}>
                      {word}
                    </span>
                  );
                })}
              </h3>
              <h4 className="text-sm font-bold tracking-thick">
                Логопед, дефектолог
              </h4>

              <Scrollbar scrollbarSize="200px">
                <p className="text-sm font-normal tracking-thick">
                  Стаж, та ін. інформація Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Стаж, та ін. інформація Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
              </Scrollbar>
            </div>

            <div className="">
              <h4 className="text-sm font-bold tracking-thick">Сертифікати:</h4>

              <ul className="">
                {certificates.map((_, index) => (
                  <li className="relative inline-block w-24" key={index}>
                    <Image
                      src="/images/certificate.png"
                      alt="certificate"
                      width={83}
                      height={108}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};
