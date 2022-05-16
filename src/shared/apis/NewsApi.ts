import axios from "axios";

interface INewsApi {
  getNews(): Promise<any>;
}

export class NewsApi implements INewsApi {
  async getNews() {
    const response = await axios.get(`${process.env.API_URL}`);
    console.log(response.data);
    return response.data;
  }
}
