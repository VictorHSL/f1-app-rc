import { useQuery } from "@tanstack/react-query";
import { useIocManager } from "src/services/dependency-injection";

const FeedPage = () => {
    const { feedService } = useIocManager()!;
    const newsData = useQuery(
        {
            queryKey: ['f1News'],
            queryFn: () => feedService.getFeed()
        }
    );

    if(newsData.isLoading){
        return (<p>Loading...</p>);
    }

    return newsData.data?.map((item, index) => <div key={index}>
        {item.title}
    </div>);
}
 
export default FeedPage;