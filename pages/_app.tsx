import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app';
import { Provider, RootStore } from '../src/stores/RootStore';
import Head from 'next/head';
import { MetaTagsStateful } from '../src/components/MetaTagsStateful/MetaTagsStateful';
import App from 'next/app'

require("../src/shared/customize-bootstrap.css");

const rootStore = new RootStore();
function NewsApp({ Component, pageProps }: AppProps) {
  return (
    <Provider rootStore={rootStore}>
      <Head>
        <title>News</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <MetaTagsStateful />
      <Component {...pageProps} />
    </Provider>
  )
}

NewsApp.getInitialProps = async (appContext: AppContext) => {
  (appContext.ctx as any).rootStore = rootStore;

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};


export default NewsApp
