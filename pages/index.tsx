import { PageLayout } from 'components/PageLayout/PageLayout'
import { TheFooter } from 'components/TheFooter/TheFooter'
import { TheNavbarTop } from 'components/TheNavbarTop/TheNavbarTop'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { RootStore, useRootStore } from 'stores/RootStore'
import { Feed } from '../src/components/Feed/Feed'
import { IFeed } from '../src/shared/models/Feed'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

interface IHomePageProps {
  isServerRender: boolean;
  feed: Array<IFeed>
}

const Home: NextPage<IHomePageProps> = (props) => {
  const rootStore = useRootStore();

  useEffect(() => {
    (async () => {
      // await rootStore.fetchFeeds();
    })();
    rootStore.hydrate({ feed: props.feed, metaData: { metaTags: {} }, feedDetail: null });
  }, []);

  return (
    <PageLayout
      renderContent={() => <Feed driver={rootStore.feed} />}
      renderHeader={() => <TheNavbarTop />}
      renderFooter={() => <TheFooter />}
    />
  )
}

// Home.getInitialProps = async (ctx) => {
//   const rootStore = new RootStore();
//   await rootStore.fetchFeeds();

//   return {
//     isServerRender: true,
//     feed: rootStore.dehydrate().feed,
//     ...(await serverSideTranslations("en"))
//   }
// }

export async function getServerSideProps(context) {
  const rootStore = new RootStore();
  await rootStore.fetchFeeds();
  return {
    props: {
      isServerRender: true,
      feed: rootStore.dehydrate().feed,
      // ...(await serverSideTranslations("en", ["General", "Item"]))
    }
  }
}

export default Home

