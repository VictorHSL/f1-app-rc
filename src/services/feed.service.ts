import { F1News } from "src/models/f1news.model";

export class FeedService {
    async getFeed(): Promise<F1News[]> {
        const response = await fetch('http://140.238.238.174:3049/feed/getNews');
        const news: F1News[] = await response.json();
        return news;
    }
}