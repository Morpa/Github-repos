import Navbar from 'components/Navbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'scss/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Github Repos</title>
      </Head>
      <Navbar />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
