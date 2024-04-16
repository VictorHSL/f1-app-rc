import { useMemo } from "react";
import Box from '@shared/components/box/Box';
import SidebarItem from '@shared/components/sidebar/SidebarItem';
import { IoNewspaperOutline, IoHomeOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "src/app-routes";
import Favorites from "../favorites/Favorites";

interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = () => {

    const location = useLocation();
    const { pathname } = location;

    const routes = useMemo(() => [
        {
            icon: IoHomeOutline,
            label: 'Home',
            active: pathname === '/',
            href: AppRoutes.Home
        },
        {
            label: 'Feed',
            active: pathname === '/feed',
            icon: IoNewspaperOutline,
            href: AppRoutes.Feed
        },
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2
            ">
                <Box>
                    <div className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4
                    ">
                        {routes.map((item) => (
                            <SidebarItem
                            key={item.label}
                            {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Favorites>
                        
                    </Favorites>
                </Box>
            </div>
        </div>
    )
}

export default Sidebar;