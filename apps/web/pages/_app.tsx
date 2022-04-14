import '@/styles/globals.css';
import '@/styles/globals.css';
import 'swiper/css/bundle';
import '@/styles/sliders.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'graphql/apollo';
import { ModalProvider } from '@/context/ModalContext';
import { ReactElement } from 'react';
import { defaultLayout } from 'layouts';
import { NextPageWithLayout } from '@/interfaces/index';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from '@/assets/theme/mainTheme';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout =
    Component.Layout && Component.Layout != 'none'
      ? Component.Layout
      : Component.Layout != 'none'
      ? defaultLayout
      : ({ children }: { children: ReactElement }) => children;

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={mainTheme}>
        <ModalProvider>
          {
            // @ts-ignore
            <Layout>
              <Component {...pageProps} />
            </Layout>
          }
        </ModalProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
