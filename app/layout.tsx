import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
export const metadata = {
  title: 'Calculadora de Cambio Fiable',
  description: 'Calcula si tu intervención tuvo un cambio clínicamente significativo',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.svg"/>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta property="og:image:alt" content="About Acme" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta property="twitter:image:alt" content="About Acme" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header></Header>
          {children}
          <Footer/>
          </MantineProvider>
      </body>
    </html>
  );
}
