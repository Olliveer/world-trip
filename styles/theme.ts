import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#47585B',
      '200': '#999999',
      '100': '#F5F8FA',
      '50': '#DADADA'
    },
    yellow: {
      '1000': '#FFBA08'
    }
  },
  fonts: {
    headin: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.50'
      }
    }
  }
});

export default theme;
