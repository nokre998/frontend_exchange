// export const RegisterForm = () => {
//     return (
//         <div className="">
//             <form method="post" className="flex flex-col gap-3" action="">
//                 <input type="text" className="p-3 bg-gray-200" />
//                 <input type="text" className="p-3 bg-gray-200" />
//                 <input type="submit" className="bg-[#0000FF]" value="Кіру" />
//             </form>
//         </div>
//     )
// }

// export const RegisterForm = () => {
//   return (
//     <form className="w-full max-w-md bg-[#F4F1DE] p-9 rounded-lg shadow-md flex flex-col gap-4">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Тіркелу</h2>
//         <input type="text" placeholder="Аты" className="p-3 border rounded" />
//         <input type="text" placeholder="Фамилия" className="p-3 border rounded" />
//         <input type="email" placeholder="Email" className="p-3 border rounded" />
//         <input type="tel" placeholder="+7 ___ ___ __ __" className="p-3 border rounded" />
//         <input type="password" placeholder="Құпиясөз" className="p-3 border rounded" />
//         <input type="password" placeholder="Құпиясөзді растау" className="p-3 border rounded" />
        
//         <label className="flex items-center gap-2 text-sm">
//             <input type="checkbox" className="w-4 h-4" />
//             Мен келісемін өз деректерімді бөлісуге
//         </label>

//         <div className="flex gap-4 mt-2">
//             <button type="button" className="flex-1 border p-3 rounded hover:bg-gray-200 transition">Артқа</button>
//             <button type="submit" className="flex-1 bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">Жалғастыру</button>
//         </div>

//         <div className="flex items-center justify-center h-40">
//             <p>Center</p>
//         </div>    

//         <div className="flex items-center gap-2 mt-3 mb-2">
//             <hr className="flex-1 border-gray-300" />
//             <span className="text-gray-400 text-sm">немесе</span>
//             <hr className="flex-1 border-gray-300" />
//         </div>

//         <button type="button" className="flex items-center justify-center gap-2 border p-3 rounded hover:bg-gray-200 transition">
//             <img src="/google-logo.png" alt="Google" className="w-5 h-5" />
//             Жалғастыру Google арқылы
//         </button>
//         </form>
//   );
// };

import { useState } from "react";
import { ArrowLeft} from "lucide-react";

interface RegistrationFormProps {
  onBack: () => void;
}

export function RegisterForm({ onBack }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    dietary: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="mb-6">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: "#2D5016" }}
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2
            className="text-4xl mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#2D5016" }}
          >
            Tak for din tilmelding!
          </h2>
          <p className="text-lg mb-8" style={{ color: "#1a1a1a" }}>
            Vi glæder os til at se dig til CULTUREBITE 2024.
            Du vil modtage en bekræftelsesmail på {formData.email}
          </p>
          <button
            onClick={onBack}
            className="px-8 py-3 rounded-full text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2D5016" }}
          >
            Tilbage til eventet
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-[#F4F1DE] p-8 rounded-2xl shadow-md flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-base hover:opacity-70 transition-opacity mb-4"
        style={{ color: "#2D5016" }}
      >
        <ArrowLeft className="w-5 h-5" /> Tilbage
      </button>

      <h2 className="text-3xl font-bold text-[#2D5016]">Зарегистрируйтесь на CULTUREBITE 2026</h2>

      {/* Personal Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl mb-4 font-serif text-[#2D5016]"> Персональная информация</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Имя *"
            className="p-3 rounded-full border-2 border-[#E0D7C6] focus:border-[#2D5016] outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Фамилия *"
            className="p-3 rounded-full border-2 border-[#E0D7C6] focus:border-[#2D5016] outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="p-3 rounded-full border-2 border-[#E0D7C6] focus:border-[#2D5016] outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className="p-3 rounded-full border-2 border-[#E0D7C6] focus:border-[#2D5016] outline-none"
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="p-3 rounded-full border-2 border-[#E0D7C6] focus:border-[#2D5016] outline-none md:col-span-2"
          />
        </div>
      </div>

      {/* Event Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl mb-4 font-serif text-[#2D5016]">Настройки событий</h3>
        <select
          name="dietary"
          value={formData.dietary}
          onChange={handleChange}
          className="p-3 rounded-full border-2 border-[#E0D7C6] focus:border-[#2D5016] outline-none"
        >
          <option value="">Выберите диетические требования</option>
          <option value="none">Ingen</option>
          <option value="vegetarian">Vegetar</option>
          <option value="vegan">Veganer</option>
          <option value="halal">Halal</option>
          <option value="gluten-free">Glutenfri</option>
          <option value="other">Andet</option>
        </select>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows={4}
          placeholder="Kommentarer eller særlige ønsker"
          className="p-3 rounded-2xl border-2 border-[#E0D7C6] focus:border-[#2D5016] outline-none resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#2D5016] text-white p-4 rounded-full text-lg transition-all hover:opacity-90 hover:scale-105"
      >
        Tilmeld nu
      </button>
    </form>
  );
}

// export const RegisterForm = () => {
//   return(
//     <div className = 'flex-1 flex p-6 justify-start bg-[#F4F1DE]'>
//       <p>
//         CULTURE-EXCHANGE
//       </p>
//     </div>
//   )

// }