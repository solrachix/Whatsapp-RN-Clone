import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Dark from '../styles/themes/Dark';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} oi="aaa"/>),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <ThemeProvider theme={Dark}>
        <html>
          <Head>
            {/* Step 5: Output the styles in the head  */}
            {this.props.styleTags}
          </Head>
          <body style={{width: '100%',height: '100vh',margin:0,padding:0}}>
            { Main && <GlobalStyle /> }
            <Main/>
            <NextScript />
          </body>
        </html>
      </ThemeProvider>
    );
  }
}