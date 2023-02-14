import {extendTheme} from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '576px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ breakpoints })

export default theme;