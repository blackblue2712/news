import axios from "axios";
import { getApiUrl } from "../../shared/env";
import { isBrowser } from "../helpers/isBrowser";

export class NewsApi {
  async getNews() {
    const response = await axios.get(`${getApiUrl()}/feed`);
    return response.data.cards;
  }

  async getNewDetail(id: string) {
    const response = await axios.get(
      `${getApiUrl()}/users/mock/cards/${id}?metaTags=true`,
    );
    return response.data;
  }
}
