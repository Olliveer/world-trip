import React from 'react';
import { Container, Flex, Text, Image, Heading } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex flexDir="row" h={368} maxWidth={1920}>
      <Flex
        w="100vw"
        h={335}
        bgImage="url('images/home-banner.png')"
        objectFit="cover"
        bgPos="top"
        direction={['column', 'row']}
        alignItems="center"
      >
        <Container ml={140}>
          <Heading color="gray.100" mb={5} lineHeight="54px">
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text color="gray.50" fontWeight="normal" lineHeight="30px">
            Chegou a hora de tirar do papel a viagem que você <Flex /> sempre
            sonhou.
          </Text>
        </Container>

        <Container pt={107} display={['none', 'flex']}>
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
