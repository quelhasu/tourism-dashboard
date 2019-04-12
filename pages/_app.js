import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navi from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const linkStyle = {
  margin: '0 10px 0 0'
}

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <style jsx>{`
            :global(body) {
                margin: 0;
                // font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
                //   Helvetica, sans-serif;
                font-family: "Montserrat", sans-serif;
                padding: 35px;
                padding-top: 70px;
              }   
          `}</style>
        {/* <div style={{ marginBottom: 20 }}>
          <Link href='/'>
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href='/about'>
            <a style={linkStyle}>About</a>
          </Link>
          <Link href='/forever'>
            <a style={linkStyle}>Forever</a>
          </Link>
          <Link href='/non-existing'>
            <a style={linkStyle}>Non Existing Page</a>
          </Link>
        </div> */}
        <Navi/>
        <Component {...pageProps} />
      </Container>
    )
  }
}
