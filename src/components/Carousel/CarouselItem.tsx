import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface CarouselItemProps {
  urlImage: string;
  continent: string;
  callText: string;
}

export function CarouselItem({
  urlImage,
  continent,
  callText
}: CarouselItemProps) {
  return (
    <Box
      h="450px"
      w="1240px"
      bgPos="center"
      bgRepeat="no-repeat"
      bgImage={`url('${urlImage}')`}
      bgSize="cover"
      bgPosition="center"
      textAlign="center"
      py="180px"
    >
      <Text
        mb="16px"
        color="gray.100"
        lineHeight="36px"
        fontWeight="bold"
        fontSize="24px"
      >
        {continent}
      </Text>
      <Text
        color="gray.100"
        fontWeight="bold"
        fontSize="24px"
        lineHeight="36px"
      >
        {callText}
      </Text>
    </Box>
  );
}
