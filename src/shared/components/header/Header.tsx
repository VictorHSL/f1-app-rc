import { HeaderProps } from "@shared/types/HeaderProps";
import React from "react";
import { twMerge } from "tailwind-merge";
import { DesktopLayout } from "./components/DesktopLayout";
import { MobileLayout } from "./components/MobileLayout";
import { SignupButton } from "./components/SignupButton";

export const Header: React.FC<HeaderProps> = ({ className }: HeaderProps) => {
           
    return (
        <div
            className={ twMerge(`
                rounded-lg
                h-fit
                bg-gradient-to-b
                from-red-900
                p-6
            `, className) }
        >
            <div className="
            w-full
            mb-4
            flex
            items-center
            justify-between
            ">
                <DesktopLayout />
                <MobileLayout />
                <div className="
                flex
                justify-between
                items-center
                gap-x-4
                ">
                    <>
                        <SignupButton />
                    </>
                </div>
            </div>
            
        </div>
    );
}