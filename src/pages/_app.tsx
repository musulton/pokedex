import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <title>Pokemon site</title>
              <meta name='description' content='Pokémon are mysterious creatures with many secrets.' />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <main className={inter.className}>
              <Component {...pageProps} />
          </main>
      </>
  )
}
