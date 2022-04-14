import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            rel='preload'
            as='style'
            href='https://fonts.googleapis.com/icon?family=Material+Icons&display=block'
          />
          <link
            rel='preload'
            as='style'
            href='https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons&display=block'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icon.png'></link>
          <meta name='theme-color' content='#fff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
