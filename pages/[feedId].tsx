import { PageLayout } from 'components/PageLayout/PageLayout'
import { TheFooter } from 'components/TheFooter/TheFooter'
import { TheNavbarTop } from 'components/TheNavbarTop/TheNavbarTop'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { RootData, RootStore, useRootStore } from 'stores/RootStore'
import { FeedDetail } from '../src/components/FeedDetail/FeedDetail'
import { isBrowser } from '../src/shared/helpers/isBrowser'


interface IDetailPageProps {
  isServerRender: boolean;
  rootData: RootData;
}

const FeedDetailPage: NextPage<IDetailPageProps> = (props) => {
  const rootStore = useRootStore();
  const rotuer = useRouter();

  useMemo(() => {
    (async () => {
      if (props.isServerRender) {
        rootStore.hydrate(props.rootData);
      }

      isBrowser() && await rootStore.fetchFeedDetail(rotuer.query.feedId as string);
    })();
  }, []);

  return (
    <PageLayout
      renderContent={() => <FeedDetail driver={rootStore.feedDetail} />}
      renderHeader={() => <TheNavbarTop />}
      renderFooter={() => <TheFooter />}
    />
  )
}

FeedDetailPage.getInitialProps = async function (
  ctx,
) {
  const { rootStore } = ctx as any;

  await rootStore.fetchFeedDetail(ctx.query.feedId);


  return {
    rootData: rootStore.dehydrate(),
    isServerRender: true,
  };
};

export default FeedDetailPage
