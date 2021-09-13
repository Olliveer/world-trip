import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex flexDir="column">
      <Head>
        <title>Home | World Trip</title>
      </Head>

      <Header />

      <Banner />

      <HStack px="140px" py="80px" spacing="auto">
        <Image src="images/nightlife.svg" />
        <Image src="images/beach.svg" />
        <Image src="images/modern.svg" />
        <Image src="images/classic.svg" />
        <Image src="images/more.svg" />
      </HStack>

      <Divider w="90px" m="auto" border="2px solid" borderColor="gray.300" />

      <Center mx="300px" my="52px" textAlign="center">
        <Heading fontWeight="medium" color="gray.300" lineHeight="54px">
          Vamos nessa? <Flex /> Então escolha seu continente
        </Heading>
      </Center>

      <Box
        w={['375px', '1240px']}
        h="450px"
        mx={[0, 'auto']}
        mt="52px"
        mb="42px"
      >
        <Carousel />
      </Box>
    </Flex>
  );
}
