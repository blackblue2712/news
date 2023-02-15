/* eslint-disable unicorn/no-document-cookie */
import { action, configure, flow, makeObservable, observable, IObservableArray } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { NextRouter } from "next/router";
import React from "react"
import { NewsApi } from '../shared/apis/NewsApi';
import { isBrowser } from "../shared/helpers/isBrowser";
import { IFeed } from "../shared/models/Feed";
import { FeedModel } from "./FeedModel";
import { MetaData, MetaStore } from "./MetaStore";


configure({
  enforceActions: "always",
  computedRequiresReaction: true,
});
enableStaticRendering(typeof window === "undefined");

export type RootData = {
  feedDetail: IFeed | null,
  feed: Array<IFeed>,
  metaData: MetaData;
}

export class RootStore {
  isHydrated: boolean = false;
  @observable feed: IObservableArray<FeedModel> = observable<FeedModel>([]);
  @observable feedDetail: FeedModel | null = null;
  @observable isLoading: boolean = false;

  public newsApi: NewsApi;
  public metaStore: MetaStore;

  constructor() {
    makeObservable(this);

    this.newsApi = new NewsApi();
    this.metaStore = new MetaStore();
  }

  dehydrate(): RootData {
    return {
      feedDetail: this.feedDetail?.toJSON() || null,
      metaData: this.metaStore.dehydrate(),
      feed: this.feed.map(item => item.toJSON())
    };
  }
  @action.bound hydrate(data: RootData): void {
    this.metaStore.hydrate(data.metaData);
    this.feed.replace(data.feed.map(item => new FeedModel(item)));

    if (data.feedDetail) {
      this.feedDetail = new FeedModel(data.feedDetail);
    }

  }
  @action.bound fetchFeeds = flow(function* (this: RootStore) {
    try {
      this.isLoading = true;


      const res = yield this.newsApi.getNews();

      const filterFeed = res.filter(feed => !!feed.content);

      this.feed.replace(filterFeed.map(feed => new FeedModel(feed)));
    } finally {
      this.isLoading = false;
    }
  });

  @action.bound fetchFeedDetail = flow(function* (this: RootStore, id: string) {
    try {
      this.isLoading = true;

      const res = yield this.newsApi.getNewDetail(id);
      this.feedDetail = new FeedModel(res);

      if (res.metaTags) {
        this.metaStore.updateMetaTags(res.metaTags);
      }
    } finally {
      this.isLoading = false;
    }
  });

}

const rootStoreContext = React.createContext<RootStore | null>(null);

export const Provider = (props: {
  children: React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  rootStore: RootStore;
}) => {
  return (
    <rootStoreContext.Provider value={props.rootStore}>
      {props.children}
    </rootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const store = React.useContext(rootStoreContext);
  if (!store) {
    throw new Error("useRootStore must be use in Provider");
  }

  return store;
};
