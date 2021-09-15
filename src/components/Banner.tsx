import React from 'react';
import { Container, Flex, Text, Image, Heading } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex flexDir={['column', 'row']} maxWidth={1920}>
      <Flex
        w="100vw"
        h={['10rem', 'xs']}
        bgImage="url('images/home-banner.png')"
        bgSize="cover"
        objectFit="cover"
        bgPos="top"
        direction={['column', 'row']}
        alignItems="center"
      >
        <Container
          justifyContent="center"
          ml={['none', 'none', '8.75rem']}
          p="28px"
        >
          <Heading
            fontSize={['xl', '4xl']}
            color="gray.100"
            mb={['2', '5']}
            lineHeight={['7', '3.375rem']}
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            fontSize={['sm', 'xl']}
            color="gray.50"
            fontWeight="normal"
            lineHeight={['5', '7']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Container>

        <Container pt={107} display={['none', 'none', 'flex']}>
          <Image
            transform="rotate(3deg)"
            src="images/airplane.svg"
            w={417}
            h={270}
          />
        </Container>
      </Flex>
    </Flex>
  );
}
