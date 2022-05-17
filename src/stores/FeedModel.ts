import { computed, makeObservable, observable } from "mobx";
import { getImageUrl } from "../shared/helpers/getImageUrl";
import { IFeed } from "../shared/models/Feed";

export class FeedModel {
  @observable public feed: IFeed;
  constructor(private data: IFeed) {
    this.feed = this.data;
    makeObservable(this);
  }

  toJSON() {
    return this.feed;
  }

  @computed get id() {
    return this.feed.id;
  }

  @computed get original() {
    return this.feed.content.original;
  }

  @computed get curatorImage(): string {
    return (
      this.original.curator.image.url ||
      getImageUrl(this.original.curator.image.urls)
    );
  }

  @computed get curatorName(): string {
    return this.original.curator.name;
  }

  @computed get title(): string {
    return this.original.content.title;
  }

  @computed get description(): string {
    return this.original.content.summary;
  }

  @computed get thumbnail(): string {
    return (
      this.original.content.image.url ||
      getImageUrl(this.original.content.image.urls)
    );
  }
}
