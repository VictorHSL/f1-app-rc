import { IocManagerContext } from "..";
import { IocManagerProps } from "../types/IocManagerProps";
import { IocManagerServices } from "../types/IocManagerServices";

export const IocManagerProvider: React.FC<IocManagerProps> = ({ children }: IocManagerProps) => {
    const dependencies: IocManagerServices = {
    };
    
    return (
        <IocManagerContext.Provider value={dependencies}>
            { children }
        </IocManagerContext.Provider>
    );
};

export default IocManagerProvider;