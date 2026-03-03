// import { RegisterForm } from "./ui/RegisterForm"

// export const Register = () => {
//     return (
//         <div className="min-h-screen flex flex-col">
//             <span className="text-blue-300">Тіркелу</span>
//             <RegisterForm />
//         </div>
//     )
// }

// import { RegisterForm } from "./ui/RegisterForm";

// export const Register = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//         <RegisterForm />
//     </div>
//   );
// };


import { RegisterForm } from "./ui/RegisterForm";

export const Register = () => {
  // Простейшая функция, что делать при "Назад"
  const handleBack = () => {
    console.log("Пользователь нажал назад");
    // Здесь можно сделать переход на предыдущий экран, например:
    // navigate("/home") или setState({ screen: "home" })
  };

  return (
    <div className="">
      <div className="flex-1 flex items-center justify-center bg-[#F5F1DF]">
        <RegisterForm onBack={handleBack} />
      </div>
    </div>
  );
};
