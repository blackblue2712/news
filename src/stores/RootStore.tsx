/* eslint-disable unicorn/no-document-cookie */
import { action, configure, flow, makeObservable, observable } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { NextRouter } from "next/router";
import React from "react"
import { NewsApi } from '../shared/apis/NewsApi';


configure({
  enforceActions: "always",
  computedRequiresReaction: true,
});
enableStaticRendering(typeof window === "undefined");

export interface RootData {
  
}

export class RootStore {
  isHydrated: boolean = false;

  public newsApi: NewsApi;

  constructor() {
    makeObservable(this);
    this.newsApi = new NewsApi();
  }

  dehydrate(): RootData {
    return {};
  }

  @action.bound hydrate(data: RootData): void {}

}

const rootStoreContext = React.createContext<RootStore | null>(null);

export const Provider = (props: {
  children: React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  router: NextRouter;
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
