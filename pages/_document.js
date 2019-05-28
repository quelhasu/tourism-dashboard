import Document, { Head, Main, NextScript } from 'next/document'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet"/> 
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
          
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>
        <body>
          
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
