import { RoundedButton } from "@shared/components/rounded-button/RoundedButton";
import React from "react";
import { HiHome } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AppRoutes } from "src/app-routes";

export const MobileLayout: React.FC = () => {

    return(
        <div className="
                flex
                md:hidden
                gap-x-2
                items-center
                ">
                    <Link to={AppRoutes.Home}>
                        <RoundedButton className="p-2 bg-white text-black">
                            <HiHome size={20} />
                        </RoundedButton>
                    </Link>
                    <Link to={AppRoutes.Feed}>
                        <RoundedButton className="p-2 bg-white text-black">
                            <IoNewspaperOutline size={20} />
                        </RoundedButton>
                    </Link>
                </div>
    );
}