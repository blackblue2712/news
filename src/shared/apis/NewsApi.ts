import axios from "axios";
import { getApiUrl } from "../../shared/env";
interface INewsApi {
  getNews(): Promise<any>;
}

export class NewsApi implements INewsApi {
  async getNews() {
    const response = await axios.get(`${getApiUrl()}`);
    return response.data.cards;
  }
}
