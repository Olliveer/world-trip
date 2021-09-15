import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface CarouselItemProps {
  id: string;
  urlImage: string;
  continent: string;
  callText: string;
}

export function CarouselItem({
  id,
  urlImage,
  continent,
  callText
}: CarouselItemProps) {
  return (
    <Box
      w="100%"
      bgPos="center"
      bgRepeat="no-repeat"
      bgImage={`url('${urlImage}')`}
      bgSize="cover"
      bgPosition="center"
      textAlign="center"
      h={['3xs', 'md']}
    >
      <Text
        color="gray.100"
        lineHeight={['9', '4.5rem']}
        fontWeight="bold"
        fontSize={['2xl', '5xl']}
        value={id}
        pt={['20', '44']}
      >
        {continent}
      </Text>
      <Text
        color="gray.100"
        fontWeight="bold"
        fontSize="sm"
        lineHeight={['5', '9']}
      >
        {callText}
      </Text>
    </Box>
  );
}
