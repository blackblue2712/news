/* eslint-disable unicorn/no-document-cookie */
import { action, configure, flow, makeObservable, observable, IObservableArray } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { NextRouter } from "next/router";
import React from "react"
import { NewsApi } from '../shared/apis/NewsApi';
import { IFeed } from "../shared/models/Feed";
import { FeedModel } from "./FeedModel";


configure({
  enforceActions: "always",
  computedRequiresReaction: true,
});
enableStaticRendering(typeof window === "undefined");

export type RootData = Array<IFeed>;

export class RootStore {
  isHydrated: boolean = false;
  @observable feed: IObservableArray<FeedModel> = observable<FeedModel>([]);

  public newsApi: NewsApi;

  constructor() {
    makeObservable(this);
    this.newsApi = new NewsApi();
  }

  dehydrate(): RootData {
    return this.feed.map(item => item.toJSON())
  }
  @action.bound hydrate(data: RootData): void {
    console.log(data);
    this.feed.replace(data.map(item => new FeedModel(item)));
  }
  @action.bound fetchFeeds = flow(function* (this: RootStore) {
    const res = yield this.newsApi.getNews();

    this.feed.replace(res.map(item => new FeedModel(item)));
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
