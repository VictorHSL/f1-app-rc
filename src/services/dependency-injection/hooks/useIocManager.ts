import { createContext, useContext } from "react";
import { IocManagerServices } from "../types/IocManagerServices";

const initialState: IocManagerServices | null = null;

export const IocManagerContext = createContext<IocManagerServices | null>(initialState);
export const useIocManager = () => useContext(IocManagerContext);