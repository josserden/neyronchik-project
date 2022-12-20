import Image from "next/image";
import EllipsisText from "react-ellipsis-text";
import s from './Post.module.css';
import { BsArrowRight } from "react-icons/bs";
import { FC } from 'react';
import { PostProps } from './Post.props';

export const Post: FC<PostProps> = ({ caption, media_url, permalink, media }) => {
    return (<li className={s.item}>
        <div className={s.imgWrapper}>
            {media !== "VIDEO" ? <Image src={media_url} alt="фото з instagram" width={132} height={132} className={s.img} /> : <video controls src={media_url} width={132} height={132} className={s.img}>Sorry, your browser doesn&apos;t support embedded videos,
                but don&apos;t worry, you can <a href={media_url}>download it</a>
  and watch it with your favorite video player!  
            </video>}
            {caption && <EllipsisText length={40} className={s.text} text={caption} />}
        </div>
        <a href={permalink} target="_blank" rel='noopener noreferrer nofollow' className={s.button}>Дізнатися більше <BsArrowRight className={s.buttonArrow} size="1.2rem"/></a>
    </li>)
}