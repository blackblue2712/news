import { PageLayout } from 'components/PageLayout/PageLayout'
import { TheFooter } from 'components/TheFooter/TheFooter'
import { TheNavbarTop } from 'components/TheNavbarTop/TheNavbarTop'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useMemo } from 'react'
import { RootStore, useRootStore } from 'stores/RootStore'
import { Feed } from '../src/components/Feed/Feed'
import { isBrowser } from '../src/shared/helpers/isBrowser'
import { IFeed } from '../src/shared/models/Feed'

interface IHomePageProps {
  isServerRender: boolean;
  feed: Array<IFeed>
}

const Home: NextPage<IHomePageProps> = (props) => {
  const rootStore = useRootStore();

  useMemo(() => {
    (async () => {
      if (props.isServerRender) {
        rootStore.hydrate(props.feed);
      }

      isBrowser() && await rootStore.fetchFeeds();
    })();
  }, []);

  return (
    <PageLayout
      renderContent={() => <Feed driver={rootStore.feed} />}
      renderHeader={() => <TheNavbarTop />}
      renderFooter={() => <TheFooter />}
    />
  )
}

export async function getServerSideProps(context) {
  const rootStore = new RootStore();
  await rootStore.fetchFeeds();

  return {
    props: {
      isServerRender: true,
      feed: rootStore.dehydrate(),
    }
  }
}

export default Home
