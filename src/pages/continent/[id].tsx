import { Flex, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Cities } from '../../components/Cities';
import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { api } from '../../services/api';

type ContinentPropsData = {
  id: string;
  name: string;
  image: string;
  description: string;
  countries: string;
  languages: string;
};

type Country = {
  id: string;
  name: string;
  image: string;
  capital: string;
  description: string;
  flag: string;
  category: string;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

interface ContinentProps {
  countries: Country[];
  continent: ContinentPropsData;
}

export default function Continent({ countries, continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div style={{ margin: 'auto auto' }}>Carregando...</div>;
  }

  return (
    <Flex flexDir="column">
      <Head>
        <title>{`${continent.name} | Worldtrip`}</title>
      </Head>
      <Header backButton />

      <Flex
        w="100%"
        h={['150px', 'lg']}
        bgImage={`url('${continent.image}')`}
        bgSize="cover"
        bgPos="center"
        justifyContent={['center', 'left']}
      >
        <Text
          py={['14', '23.125rem']}
          fontWeight={600}
          fontSize={['3xl', '5xl']}
          color="gray.100"
          ml={['0', '32']}
          lineHeight="10"
        >
          {continent.name}
        </Text>
      </Flex>

      <Info
        description={continent.description}
        totalContries={continent.countries}
        totalLanguages={continent.languages}
        cities={countries.length}
      />

      <Flex flexDir="column" mt={['8', '20']} mb="9" mx={['4', '36']} h="2xl">
        <Text
          w="100%"
          fontWeight="medium"
          fontSize={['2xl', '4xl']}
          lineHeight={['9', '3.3rem']}
          textAlign="left"
          color="gray.300"
          mb={['5', '10']}
        >
          Cidades +100
        </Text>
        <Cities countries={countries} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await api.get(`/continent`);

  const paths = countries.data.map((country: Country) => ({
    params: { id: country.id }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Params;
  const continent = await api.get(`/continent/${id}`);

  const countrys = await api.get(`/continent/${id}/country`);

  return {
    props: {
      continent: continent.data,
      countries: countrys.data,
      count: countrys.data.length
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
