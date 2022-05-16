import '../styles/globals.css'
import type { AppProps } from 'next/app';

require("../src/shared/customize-bootstrap.css");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
