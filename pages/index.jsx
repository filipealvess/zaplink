import Head from 'next/head';
import React from 'react';
import Introduction from '../components/Introduction';

export default function Index() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crie links e divulgue pelo aplicativo ou versão web do Whatsapp" />
        <meta name="keywords" content="Whatsapp, links, divulgação, alcance" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>ZapLink - Gerador de link para Whatsapp</title>
      </Head>

      <Introduction />
    </>
  );
}
