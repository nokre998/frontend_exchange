// import { HomePageForm } from "./ui/HomeForm";

// export const HomePage = () => {
//     return (
//         <div className="min-h-screen flex flex-col bg-[#F4F1DE]">
//             <HomePageForm />
//         </div>
//     );
// };

import { HomePageForm } from "./ui/HomeForm";

interface HomePageProps {
    onRegisterClick?: () => void;
    onAllEventsClick?: () => void;
    onKontaktClick?: () => void;
}

export const HomePage = ({ onRegisterClick, onAllEventsClick, onKontaktClick }: HomePageProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F4F1DE]">
            <HomePageForm 
                onRegisterClick={onRegisterClick}
                onAllEventsClick={onAllEventsClick}
                onKontaktClick={onKontaktClick}
            />
        </div>
    );
};