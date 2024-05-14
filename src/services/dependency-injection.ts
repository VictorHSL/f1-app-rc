import { createContext, useContext } from 'react';
import { FeedService } from './feed.service';

export interface IocManagerServices {
    feedService: FeedService;
}

const initialState: IocManagerServices | null = null;
export const IocManager = createContext<IocManagerServices | null>(initialState);
export const useIocManager = () => useContext(IocManager);

