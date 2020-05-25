import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import Dark from '../../styles/themes/Dark';

import NavBar from '../../components/NavBar';
import Chat from '../../components/Chat';
import { Container } from './styles';


const Home = (props) => {
  
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyle />
      <Head>
        <title>Home - Nextron (with-javascript)</title>
      </Head>
      <Container>

        <NavBar />
        <Chat />
        {/* <Title>⚡ Electron + Next.js ⚡-</Title>

        {/* <Link href="/next">
          <a>Go to page</a>
        </Link>
        <img src="/images/logo.png" />*/}
      </Container> 
    </ThemeProvider>
  );
};

export default Home;
