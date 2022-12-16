import Head from 'next/head';
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

const Home = () => {
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
      <News />
      <Contacts />
    </>
  );
};

export default Home;
