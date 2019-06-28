import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navi from '../components/nav'
import { ToastContainer, cssTransition, Flip } from 'react-toastify';
import { appWithTranslation } from '../i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../static/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/footer';


Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {
      router: router
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    return (

      <Container>
        <ToastContainer
          className='toast-container'
          toastClassName="dark-toast"
          position="top-right"
          transition={Flip}
        />
        <style jsx>{`
            :global(body) {
                margin: 0;
                background: #f7f7f7;              
                // font-family: 'Lato', sans-serif;
                // font-family: 'Rubik', sans-serif;
                font-family: 'Roboto', sans-serif;
                // font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
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
        <Navi current={router} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default appWithTranslation(MyApp);