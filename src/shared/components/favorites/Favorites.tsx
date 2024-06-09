import React from "react";
import { MdFavorite } from "react-icons/md";


const Favorites: React.FC = () => {
    return ( 
    <div className="flex flex-col">
        <div
            className="
                flex
                items-center
                justify-between
                px-5
                pt-4
            "
        >
            <div
                className="
                    inline-flex
                    items-center
                    gap-x-2
                "
            >
                <MdFavorite size={26} className="text-neutral-400" />
                <p
                    className="
                        text-neutral-400
                        font-medium
                        text-md
                    "
                >
                    Your Favorites
                </p>
            </div>
        </div>
    </div> );
}
 
export default Favorites;