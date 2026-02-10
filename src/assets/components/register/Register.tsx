// import { RegisterForm } from "./ui/RegisterForm"

// export const Register = () => {
//     return (
//         <div className="min-h-screen flex flex-col">
//             <span className="text-blue-300">Тіркелу</span>
//             <RegisterForm />
//         </div>
//     )
// }

import { RegisterForm } from "./ui/RegisterForm";

export const Register = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <RegisterForm />
      </div>
    </div>
  );
};

