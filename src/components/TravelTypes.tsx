import {
  Center,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import React from 'react';
import { BsDot } from 'react-icons/bs';

export function TravelTypes() {
  const isWide = useBreakpointValue({
    base: true,
    sm: false,
    md: false
  });

  return (
    <SimpleGrid
      mt={[9, 20]}
      mb={[5, 20]}
      mx={[9, 9, 36]}
      flex="1"
      gap=""
      minChildWidth="150px"
      align="flex-start"
    >
      <Center flexDir={['row', 'column']}>
        <Image display={['none', 'flex']} src="images/nightlife.svg" />
        {isWide && <BsDot size="36px" color="#FFBA08" />}
        <Text
          fontSize={['xl', '2xl']}
          fontWeight="semibold"
          lineHeight="4xl"
          color="gray.300"
          mt={['none', '6']}
        >
          Vida noturna
        </Text>
      </Center>
      <Center flexDir={['row', 'column']} alignContent="center">
        <Image display={['none', 'flex']} src="images/beach.svg" />
        {isWide && <BsDot size="36px" color="#FFBA08" />}
        <Text
          fontSize={['xl', '2xl']}
          fontWeight="semibold"
          lineHeight="4xl"
          color="gray.300"
          mt={['none', '6']}
        >
          praia
        </Text>
      </Center>
      <Center flexDir={['row', 'column']} alignItems="center">
        <Image display={['none', 'flex']} src="images/modern.svg" />
        {isWide && <BsDot size="36px" color="#FFBA08" />}
        <Text
          fontSize={['xl', '2xl']}
          fontWeight="semibold"
          lineHeight="4xl"
          color="gray.300"
          mt={['none', '6']}
        >
          moderno
        </Text>
      </Center>
      <Center flexDir={['row', 'column']} alignItems="center">
        <Image display={['none', 'flex']} src="images/classic.svg" />
        {isWide && <BsDot size="36px" color="#FFBA08" />}
        <Text
          fontSize={['xl', '2xl']}
          fontWeight="semibold"
          lineHeight="4xl"
          color="gray.300"
          mt={['none', '6']}
        >
          clássico
        </Text>
      </Center>
      <Center flexDir={['row', 'column']} alignItems="center">
        <Image display={['none', 'flex']} src="images/more.svg" />
        {isWide && <BsDot size="36px" color="#FFBA08" />}
        <Text
          fontSize={['xl', '2xl']}
          fontWeight="semibold"
          lineHeight="4xl"
          color="gray.300"
          mt={['none', '6']}
        >
          e mais...
        </Text>
      </Center>
    </SimpleGrid>
  );
}
