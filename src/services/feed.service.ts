import { useQuery } from "@tanstack/react-query";
import { F1NewsData } from "src/models/f1news.model";

export function useF1News(){
    return useQuery<F1NewsData[]>(
        {
            queryKey: ['f1News'],
            queryFn: () => fetch('http://140.238.238.174:3049/feed/getNews').then(x => x.json())
        }
    );
}