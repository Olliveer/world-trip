import { Flex, Image } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';

interface HeaderProps {
  backButton?: boolean;
}

export function Header({ backButton = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1920}
      h="100px"
      align="center"
      justify="center"
    >
      {backButton && <RiArrowLeftSLine />}
      <Image w="46" h="10" src="images/logo.svg" alt="World Trip" />
    </Flex>
  );
}
