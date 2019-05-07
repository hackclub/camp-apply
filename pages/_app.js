import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from '@hackclub/design-system'
import { theme } from '../components/style'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Apply to Hack Camp 2019</title>
        </Head>
        <style jsx global>{`
          body {
            background-color: ${theme.colors.dark};
            color: ${theme.colors.snow};
          }
          label {
            color: ${theme.colors.smoke} !important;
          }
          label .error {
            color: ${theme.colors.red};
          }
          input,
          textarea,
          select {
            border-color: ${theme.colors.steel} !important;
            color: ${theme.colors.white} !important;
          }
          input:focus,
          textarea:focus,
          select:focus {
            border-color: ${theme.colors.cyan} !important;
          }
          input::placeholder {
            color: ${theme.colors.slate} !important;
          }
          select {
            background-color: transparent !important;
          }
        `}</style>
        <ThemeProvider theme={theme} webfonts>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
