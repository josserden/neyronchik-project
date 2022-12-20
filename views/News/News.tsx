import { FC } from 'react';
import { Post, Container, Heading } from '@/components';
import { PostsProps } from './News.props';
import s from './News.module.css';

export const News: FC<PostsProps> = ({ posts, title }) => {
  return <section className={s.section}>
    <Container>
      <Heading tag="h2" className='mb-10 md:mb-[60px] xl:mb-20'>
       {title}
      </Heading>
      <ul className={s.list}>
        {posts?.map((post) => (
          <Post
            key={post.id}
            caption={post.caption }
            media_url={post.media_url }
            permalink={post.permalink}
            media={post.media_type}
          />
        ))}
      </ul>
      </Container>
    </section>;
};