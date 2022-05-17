import { PageLayout } from 'components/PageLayout/PageLayout'
import { TheFooter } from 'components/TheFooter/TheFooter'
import { TheNavbarTop } from 'components/TheNavbarTop/TheNavbarTop'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRootStore } from 'stores/RootStore'
import { Feed } from '../src/components/Feed/Feed'
import { IFeed } from '../src/shared/models/Feed'

interface IHomePageProps {
  isServerRender: boolean;
  feed: Array<IFeed>
}

const Home: NextPage<IHomePageProps> = (props) => {
  const rootStore = useRootStore();

  useEffect(() => {
    (async () => {
      await rootStore.fetchFeeds();
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
  return {
    props: {
      isServerRender: true,
      feed: [],
    }
  }
}

export default Home
