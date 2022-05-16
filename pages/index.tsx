import { PageLayout } from 'components/PageLayout/PageLayout'
import { TheFooter } from 'components/TheFooter/TheFooter'
import { TheNavbarTop } from 'components/TheNavbarTop/TheNavbarTop'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RootStore, useRootStore } from 'stores/RootStore'
import styles from '../styles/Home.module.css'

interface IHomePageProps {
  isServerRender: boolean;
  feeds: Array<any>
}

const Home: NextPage<IHomePageProps> = (props) => {
  return (
    <PageLayout
      renderContent={() => <></>}
      renderHeader={() => <TheNavbarTop />}
      renderFooter={() => <TheFooter />}
    />
  )
}

export async function getServerSideProps(context) {
  const { newsApi } = new RootStore();

  const feeds = await newsApi.getNews();

  return {
    props: {
      isServerRender: true,
      feeds: feeds,
    }
  }
}

export default Home
