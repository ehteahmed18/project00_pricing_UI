'use client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home(){
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}