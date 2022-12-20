import Head from 'next/head';
import { useEffect, useState } from 'react'
import {
  AboutUs,
  Choice,
  Contacts,
  Gallery,
  Hero,
  News,
  OurTeam,
  Practice,
  Price,
} from '@/views';
import {fetchInstagramPosts} from '@/utils'

const Home = () => {
  const [posts, setPosts] = useState([]);
   useEffect(() => {
    (async()=>{
    const data = await fetchInstagramPosts()
  setPosts(data.data.data)})()
  }, [])
  return (
    <>
      <Head>
        <title>НЕЙРОНЧИКИ</title>
        <link rel="icon" href="/favicon.svg" type="svg" />
      </Head>

      <Hero />
      <AboutUs />
      <Choice />
      <Practice />
      <Price />
      <OurTeam />
      <Gallery />
      <News posts={posts} title="Останні новини" />
      <Contacts />
    </>
  );
};

export default Home;
