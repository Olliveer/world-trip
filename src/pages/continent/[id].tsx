import {
  Center,
  Flex,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

type ContinentPropsData = {
  id: string;
  name: string;
  image: string;
  description: string;
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

      <SimpleGrid
        maxW="1160px"
        mt={['6', '20']}
        mx={['4', '4', '4', '4', 'auto']}
        mb={['8', '20']}
        gap={['4', '4rem']}
        minChildWidth="320px"
        align="center"
      >
        <GridItem>
          <Center
            fontSize={['sm', '2xl']}
            fontWeight="normal"
            lineHeight="9"
            color="gray.300"
            textAlign="justify"
          >
            {continent.description}
          </Center>
        </GridItem>
        <GridItem>
          <HStack
            mt={['4', '4', '14']}
            h="99px"
            mx={[0, 'auto']}
            justify="center"
            spacing="10"
          >
            <Flex textAlign={['left', 'center']} flexDir="column">
              <Text
                color="yellow.1000"
                fontWeight="semibold"
                fontSize="5xl"
                lineHeight="4.5rem"
              >
                50
              </Text>
              <Text
                color="gray.300"
                fontWeight="semibold"
                fontSize="2xl"
                lineHeight="9"
              >
                países
              </Text>
            </Flex>
            <Flex textAlign={['left', 'center']} w="98px" flexDir="column">
              <Text
                color="yellow.1000"
                fontWeight="semibold"
                fontSize="5xl"
                lineHeight="4.5rem"
              >
                60
              </Text>
              <Text
                color="gray.300"
                fontWeight="semibold"
                fontSize="2xl"
                lineHeight="9"
              >
                línguas
              </Text>
            </Flex>
            <Flex textAlign={['left', 'center']} w="130" flexDir="column">
              <Text
                color="yellow.1000"
                fontWeight="semibold"
                fontSize="5xl"
                lineHeight="4.5rem"
              >
                27
              </Text>
              <Text
                color="gray.300"
                fontWeight="semibold"
                fontSize="2xl"
                lineHeight="9"
              >
                cidades +100
              </Text>
            </Flex>
          </HStack>
        </GridItem>
      </SimpleGrid>

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
        <SimpleGrid gap={['1', '5']} minChildWidth="320px" align="flex-start">
          {countries.map((item) => (
            <Flex
              key={item.id}
              flexDir="column"
              mx={['14', 0]}
              mb={['5', '12']}
              w="2xs"
              h="17.438rem"
            >
              <Image borderRadius="4px 4px 0 0" src={item.image} />

              <HStack
                border="1px solid #FFBA08"
                borderTopWidth={0}
                justifyContent="space-between"
                px="6"
                borderRadius="0 0 4px 4px"
              >
                <Flex flexDir="column">
                  <Text
                    fontFamily="Barlow"
                    fontWeight={600}
                    fontSize="xl"
                    lineHeight="6"
                    color="gray.300"
                    mt="5"
                    mb="3"
                  >
                    {item.capital}
                  </Text>
                  <Text
                    color="gray.200"
                    fontFamily="Barlow"
                    fontSize="md"
                    lineHeight="6"
                    fontWeight="medium"
                    mb="6"
                  >
                    {item.name}
                  </Text>
                </Flex>
                <Image w="30px" h="30px" borderRadius="full" src={item.flag} />
              </HStack>
            </Flex>
          ))}
        </SimpleGrid>
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
      countries: countrys.data
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
