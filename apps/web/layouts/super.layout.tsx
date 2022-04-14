import Head from 'next/head';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <ChakraProvider>
        <main>{children}</main>
      </ChakraProvider>
    </>
  );
};
