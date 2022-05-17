import { action, computed, makeObservable, observable } from "mobx";

import { host } from "../shared/env";

export interface MetaTag {
  [key: string]: string;
}

export type MetaData = {
  metaTags: MetaTag;
};

export interface IMetaStore {
  updateMetaTags(metaTags: MetaTag): void;
}

export class MetaStore implements IMetaStore {
  @observable metaTags: MetaTag = {
    "og:image": `${host}/thumbnail.png`,
    "og:type": "website",
    "og:site_name": "News",
    "og:title": "News",
    "og:url": "https://news.com",
    "og:description": "What’s happening on the World",
  };

  constructor() {
    makeObservable(this);
  }

  public dehydrate(): MetaData {
    return {
      metaTags: this.metaTags,
    };
  }

  @action.bound public hydrate = (data: MetaData): void => {
    this.metaTags = Object.assign(this.metaTags, data.metaTags);
  };

  @action.bound updateMetaTags = (metaTags: MetaTag): void => {
    if (Object.keys(metaTags).length === 0) {
      return;
    }

    this.metaTags = metaTags;
  };

  @computed get metaTagsArray(): MetaTag[] {
    if (!this.metaTags) {
      return [];
    }

    return Object.keys(this.metaTags).map((key) => {
      return {
        key,
        content: this.metaTags ? this.metaTags[key] : "",
      };
    });
  }
  @computed get metaTagsArrayWhatsApp(): MetaTag[] {
    if (!this.metaTags) {
      return [];
    }

    return Object.keys(this.metaTags).map((key) => {
      return {
        key,
        content: this.metaTags ? this.metaTags[key] : "",
      };
    });
  }

  @computed get metaTagsTwitterArray(): MetaTag[] {
    if (!this.metaTags) {
      return [];
    }

    return Object.keys(this.metaTags).map((key) => {
      return {
        key: key.replace("og", "twitter"),
        content: this.metaTags ? this.metaTags[key] : "",
      };
    });
  }

  @computed get metaGoogleArray(): MetaTag[] {
    if (!this.metaTags) {
      return [];
    }

    return Object.keys(this.metaTags).map((key) => {
      return {
        key: key.replace("og:", ""),
        content: this.metaTags ? this.metaTags[key] : "",
      };
    });
  }
  @computed get metaPinterestArray(): MetaTag[] {
    if (!this.metaTags) {
      return [];
    }

    const result: MetaTag[] = [];

    for (const key of Object.keys(this.metaTags)) {
      if (key === "og:type") {
        result.push({
          key,
          content: "article",
        });
      }
    }

    return result;
  }
}
