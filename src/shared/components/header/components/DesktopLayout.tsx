import { RoundedButton } from "@shared/components/rounded-button/RoundedButton";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router";

export const DesktopLayout: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="
                hidden
                md:flex
                gap-x-2
                items-center
                ">
                    <RoundedButton onClick={() => navigate(-1)}>
                        <RxCaretLeft size={35} className="text-white" />
                    </RoundedButton>
                    <RoundedButton onClick={() => navigate(1)}>
                        <RxCaretRight size={35} className="text-white" />
                    </RoundedButton>
                </div>
    );
}