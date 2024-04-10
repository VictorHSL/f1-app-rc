import HomePage from "@pages/home";
import { useMemo } from "react";
import Box from '@shared/components/Box';
import SidebarItem from '@shared/components/SidebarItem';
import { IoNewspaperOutline, IoHomeOutline } from "react-icons/io5";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

    const location = useLocation();
    const { pathname } = location;

    const routes = useMemo(() => [
        {
            icon: IoHomeOutline,
            label: 'Home',
            active: pathname === '/',
            href: '/'
        },
        {
            label: 'Feed',
            active: pathname === '/feed',
            icon: IoNewspaperOutline,
            href: '/feed'
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
                    H2
                </Box>
            </div>
        </div>
    )
}

export default Sidebar;