import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta
            name="Estelle Olawinski portfolio"
            content="Estelle Olawinski portfolio"
            key="description"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
