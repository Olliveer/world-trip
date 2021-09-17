import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  Tooltip
} from '@chakra-ui/react';
import React from 'react';

interface InfoProps {
  description: string;
  totalContries: string;
  totalLanguages: string;
  cities: number;
}

export function Info({
  description,
  totalContries,
  totalLanguages,
  cities
}: InfoProps) {
  return (
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
          {description}
        </Center>
      </GridItem>
      <GridItem>
        <HStack
          mt={['0', '0', '12', '12']}
          spacing="8"
          ml={['4', '16']}
          mmr={['4', '32']}
        >
          <Box textAlign={['left', 'center']}>
            <Text
              color="yellow.1000"
              fontWeight="semibold"
              fontSize={['4xl', '5xl']}
              lineHeight="4.5rem"
            >
              {totalContries}
            </Text>
            <Text
              color="gray.300"
              fontWeight="semibold"
              fontSize={['sm', '2xl']}
              lineHeight={['sm', '9']}
              mr="2"
            >
              países
            </Text>
          </Box>
          <Box textAlign={['left', 'center']}>
            <Text
              color="yellow.1000"
              fontWeight="semibold"
              fontSize={['4xl', '5xl']}
              lineHeight="4.5rem"
            >
              {totalLanguages}
            </Text>
            <Text
              color="gray.300"
              fontWeight="semibold"
              fontSize={['sm', '2xl']}
              lineHeight={['sm', '9']}
              mr="2"
            >
              línguas
            </Text>
          </Box>
          <Box textAlign={['left', 'center']}>
            <Text
              color="yellow.1000"
              fontWeight="semibold"
              fontSize={['4xl', '5xl']}
              lineHeight="4.5rem"
            >
              {cities}
            </Text>
            <Flex align="center">
              <Text
                color="gray.300"
                fontWeight="semibold"
                fontSize={['sm', '2xl']}
                lineHeight={['sm', '9']}
                mr="2"
              >
                cidades +100
              </Text>
              <Tooltip
                hasArrow
                label={`${cities} países mais visitados`}
                fontSize="md"
              >
                <InfoOutlineIcon />
              </Tooltip>
            </Flex>
          </Box>
        </HStack>
      </GridItem>
    </SimpleGrid>
  );
}
