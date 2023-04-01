import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Pokemon Landing</title>
            <meta name="description" content="GovTech procurement: take home project" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
