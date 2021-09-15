import { Box, Center, Divider, Flex, Heading, Spinner } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { api } from '../services/api';

type Continent = {
  id: string;
  name: string;
  image: string;
  description: string;
  callText: string;
};
interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex flexDir="column">
      <Head>
        <title>Home | World Trip</title>
      </Head>

      <Header />

      <Banner />

      <TravelTypes />

      <Divider w="90px" m="auto" border="2px solid" borderColor="gray.300" />

      <Center
        mx={['10', '5', '5', '72']}
        mt={['6', '10']}
        mb={['5', '10']}
        textAlign="center"
      >
        <Heading
          fontSize={['xl', '4xl']}
          fontWeight="medium"
          color="gray.300"
          lineHeight={['7', '3.375rem']}
        >
          Vamos nessa? <Flex /> Então escolha seu continente
        </Heading>
      </Center>

      <Box maxW="7xl" mx={[0, 0, 0, 'auto']} mt={['5', '12']} mb={['5', '10']}>
        {!continents ? <Spinner /> : <Carousel data={continents} />}
      </Box>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continent');

  return {
    props: { continents: response.data }
  };
};
