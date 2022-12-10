import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'

import {
    ChakraProvider,
    extendTheme,
} from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'

const breakpoints = {
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
}

const theme = extendTheme({
  breakpoints
})

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  )
}