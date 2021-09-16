import { Button, Flex, IconButton, Image } from '@chakra-ui/react';
import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

interface HeaderProps {
  backButton?: boolean;
}

export function Header({ backButton = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      justify="center"
      maxWidth={1920}
      h="100px"
    >
      {backButton && (
        <Link href="/">
          <IconButton
            pos="absolute"
            left={['4', '36']}
            aria-label="Back"
            variant="unstyled"
            color="gray.300"
            fontSize={32}
            icon={<RiArrowLeftSLine />}
          />
        </Link>
      )}
      <Link href="/" passHref>
        <Button as="a" cursor="pointer" variant="unstyled">
          <Image w="46" h="10" src="/images/logo.svg" alt="World Trip" />
        </Button>
      </Link>
    </Flex>
  );
}
