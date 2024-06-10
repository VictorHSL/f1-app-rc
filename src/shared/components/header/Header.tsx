import { HeaderProps } from "@shared/types/HeaderProps";
import React from "react";
import { useLocation } from "react-router";
import { twMerge } from "tailwind-merge";

export const Header: React.FC<HeaderProps> = ({ children, className }: HeaderProps) => {
    
    const router = useLocation();
    const handleLogout = () => {

    };
    
    return (
        <div
            className={ twMerge(`
                h-fit
                bg-gradient-to-b
                from-red-500
                p-6
            `, className) }
        >
            Header works!
        </div>
    );
}