import {
  chakra,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useToast
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsDot } from 'react-icons/bs';

export function TravelTypes() {
  const toast = useToast();
  const isWide = useBreakpointValue({
    base: true,
    sm: false,
    md: false
  });

  const notify = () =>
    toast({
      title: 'Oooops.',
      description: 'Nothing here yet 😅.',
      status: 'info',
      duration: 3000,
      isClosable: true,
      position: 'top'
    });

  return (
    <SimpleGrid
      mt={['9', '20']}
      mb={['5', '20']}
      mx={['2', '9', '36']}
      flex="1"
      gap=""
      minChildWidth="150px"
      align="flex-start"
    >
      <Link href="/" passHref>
        <chakra.a as="button" onClick={notify}>
          <Flex flexDir={['row', 'column']} alignItems="center">
            <Image display={['none', 'flex']} src="images/nightlife.svg" />
            {isWide && <BsDot size="36px" color="#FFBA08" />}
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="semibold"
              lineHeight="4xl"
              color="gray.300"
              mt={['none', '6']}
              mb={['2.5', '5']}
            >
              Vida noturna
            </Text>
          </Flex>
        </chakra.a>
      </Link>
      <Link href="/" passHref>
        <chakra.a as="button" onClick={notify}>
          <Flex flexDir={['row', 'column']} alignItems="center">
            <Image display={['none', 'flex']} src="images/beach.svg" />
            {isWide && <BsDot size="36px" color="#FFBA08" />}
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="semibold"
              lineHeight="4xl"
              color="gray.300"
              mt={['none', '6']}
              mb={['2.5', '5']}
            >
              Praia
            </Text>
          </Flex>
        </chakra.a>
      </Link>
      <Link href="/" passHref>
        <chakra.a as="button" onClick={notify}>
          <Flex flexDir={['row', 'column']} alignItems="center">
            <Image display={['none', 'flex']} src="images/modern.svg" />
            {isWide && <BsDot size="36px" color="#FFBA08" />}
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="semibold"
              lineHeight="4xl"
              color="gray.300"
              mt={['none', '6']}
              mb={['2.5', '5']}
            >
              Moderno
            </Text>
          </Flex>
        </chakra.a>
      </Link>
      <Link href="/" passHref>
        <chakra.a as="button" onClick={notify}>
          <Flex flexDir={['row', 'column']} alignItems="center">
            <Image display={['none', 'flex']} src="images/classic.svg" />
            {isWide && <BsDot size="36px" color="#FFBA08" />}
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="semibold"
              lineHeight="4xl"
              color="gray.300"
              mt={['none', '6']}
              mb={['2.5', '5']}
            >
              Clássico
            </Text>
          </Flex>
        </chakra.a>
      </Link>
      <Link href="/" passHref>
        <chakra.a as="button" onClick={notify}>
          <Flex
            ml={['50%', '0']}
            w={['150px', 'auto']}
            flexDir={['row', 'column']}
            alignItems="center"
          >
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
          </Flex>
        </chakra.a>
      </Link>
    </SimpleGrid>
  );
}
