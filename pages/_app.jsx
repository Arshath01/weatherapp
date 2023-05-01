import React from 'react';
import Head from 'next/head';
import '../styles/Bootstrap/node_modules/bootstrap/dist/css/bootstrap.css'
  

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
            <title>Weather App - Next</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
