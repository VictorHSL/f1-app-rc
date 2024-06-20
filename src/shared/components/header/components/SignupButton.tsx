import { CgLogIn } from "react-icons/cg";

export const SignupButton: React.FC = () => {
    return (
        <div className="
            flex
            items-center
            cursor-pointer
            rounded-full
            bg-red-600
            border
            border-transparent
            px-3
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-white
            font-bold
            hover:opacity-75
            transition
            ">
                <CgLogIn size={20} />
                <button className="ml-2">
                    Sign Up
                </button>
        </div>
    );
}