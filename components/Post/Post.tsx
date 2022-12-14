import Image from 'next/image';
import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import LinesEllipsis from 'react-lines-ellipsis';
import s from './Post.module.css';
import { PostProps } from './Post.props';

export const Post: FC<PostProps> = ({
  caption,
  media_url,
  permalink,
  media,
}) => {
  const imgAlt = caption?.split('.')[0];

  return (
    <li className={s.item}>
      <div className={s.imgWrapper}>
        {media !== 'VIDEO' ? (
          <Image
            src={media_url}
            alt={imgAlt ?? ''}
            width={132}
            height={132}
            className={s.img}
          />
        ) : (
          <video
            controls
            src={media_url}
            width={132}
            height={132}
            className={s.img}
          >
            Sorry, your browser doesn&apos;t support embedded videos, but
            don&apos;t worry, you can <a href={media_url}>download it</a>
            and watch it with your favorite video player!
          </video>
        )}
        {caption && (
          <LinesEllipsis
            maxLine="3"
            ellipsis="..."
            trimRight
            className={s.text}
            text={caption}
          />
        )}
      </div>
      <a
        href={permalink}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={s.button}
      >
        Дізнатися більше{' '}
        <BsArrowRight className={s.buttonArrow} size="1.5rem" />
      </a>
    </li>
  );
};
