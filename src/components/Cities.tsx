import { Flex, SimpleGrid, Image, HStack, Text } from '@chakra-ui/react';
import React from 'react';

type Country = {
  id: string;
  name: string;
  image: string;
  capital: string;
  description: string;
  flag: string;
  category: string;
};

interface CitiesProps {
  countries: Country[];
}

export function Cities({ countries }: CitiesProps) {
  return (
    <SimpleGrid gap={['1', '5']} minChildWidth="280px" align="flex-start">
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
  );
}
