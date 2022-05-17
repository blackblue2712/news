export enum FeedType {
  repost = "repost",
}

interface IImage {
  id: string;
  url?: string;
  urls: Record<string, string>;
}

export interface IFeed {
  id: string;
  content: {
    original: {
      categories: string[];
      comment: string;
      content: {
        image: IImage;
        summary: string;
        title: string;
        url: string;
      };
      curator: {
        id: string;
        image: IImage;
        name: string;
        vanityName: string;
      };
      updated: string;
    };
  };
  contentType: "repost" | "article";
}
