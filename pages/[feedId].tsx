import { PageLayout } from 'components/PageLayout/PageLayout'
import { TheFooter } from 'components/TheFooter/TheFooter'
import { TheNavbarTop } from 'components/TheNavbarTop/TheNavbarTop'
import { observer } from 'mobx-react-lite'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { RootData, RootStore, useRootStore } from 'stores/RootStore'
import { FeedDetail } from '../src/components/FeedDetail/FeedDetail'
import { isBrowser } from '../src/shared/helpers/isBrowser'


interface IDetailPageProps {
  isServerRender: boolean;
  rootData: RootData;
}

const FeedDetailPage: NextPage<IDetailPageProps> = observer((props) => {
  const rootStore = useRootStore();
  const rotuer = useRouter();

  useMemo(() => {
    rootStore.hydrate(props.rootData);
  }, []);

  return (
    <PageLayout
      renderContent={() => rootStore.feedDetail && <FeedDetail driver={rootStore.feedDetail} />}
      renderHeader={() => <TheNavbarTop />}
      renderFooter={() => <TheFooter />}
    />
  )
});

// FeedDetailPage.getInitialProps = async function (
//   ctx,
// ) {
//   const { rootStore } = ctx as any;

//   await rootStore.fetchFeedDetail(ctx.query.feedId);


//   return {
//     rootData: rootStore.dehydrate(),
//     isServerRender: true,
//     // ...(await serverSideTranslations("en"))
//   };
// };

export async function getServerSideProps(context) {
  const rootStore = new RootStore();
  await rootStore.fetchFeedDetail(context.query.feedId);
  return {
    props: {
      rootData: rootStore.dehydrate(),
      isServerRender: true,
      // ...(await serverSideTranslations("en", ["General", "Item"]))
    }
  }
}

export default FeedDetailPage