import F1News from "@shared/components/f1-news/F1News";
import { useF1News } from "src/services/feed.service";

const FeedPage = () => {
    const newsData = useF1News();

    if(newsData.isLoading){
        return (<p>Loading...</p>);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                newsData.data?.map((item, index) => <F1News f1NewsData={item} key={index.toString()} />)
            }
        </div>
    );
}
 
export default FeedPage;