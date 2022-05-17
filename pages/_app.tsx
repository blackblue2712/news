import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider, RootStore } from '../src/stores/RootStore';

require("../src/shared/customize-bootstrap.css");

function MyApp({ Component, pageProps }: AppProps) {
  const rootStore = new RootStore();

  return (<Provider rootStore={rootStore}>
    <Component {...pageProps} />
  </Provider>)

}

export default MyApp
