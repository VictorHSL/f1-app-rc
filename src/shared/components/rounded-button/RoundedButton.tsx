import { RoundedButtonProps } from "@shared/types/RoundedButtonProps";
import { twMerge } from "tailwind-merge";

export const RoundedButton: React.FC<RoundedButtonProps> = ({children, ...props}: RoundedButtonProps) => {
          
    return (
        <button {...props} className={ twMerge(`
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    `, props.className)}>
                        {children}
                    </button>
    );
}