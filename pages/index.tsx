import { Heading } from '@/components';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>НЕЙРОНЧИКИ</title>
        <link rel="icon" href="/favicon.svg" type="svg" />
      </Head>

      <Heading tag="h1">Hello</Heading>
      <Heading tag="h2">About Us</Heading>
      <Heading tag="h3">Про нас</Heading>
    </div>
  );
};

export default Home;
