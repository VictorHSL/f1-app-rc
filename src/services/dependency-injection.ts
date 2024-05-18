import { createContext, useContext } from 'react';

export interface IocManagerServices {
}

const initialState: IocManagerServices | null = null;
export const IocManager = createContext<IocManagerServices | null>(initialState);
export const useIocManager = () => useContext(IocManager);

