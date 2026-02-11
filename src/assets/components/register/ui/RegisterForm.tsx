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

export const RegisterForm = () => {
  return (
    <form className="w-full max-w-md bg-[#F4F1DE] p-9 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Тіркелу</h2>
        <input type="text" placeholder="Аты" className="p-3 border rounded" />
        <input type="text" placeholder="Фамилия" className="p-3 border rounded" />
        <input type="email" placeholder="Email" className="p-3 border rounded" />
        <input type="tel" placeholder="+7 ___ ___ __ __" className="p-3 border rounded" />
        <input type="password" placeholder="Құпиясөз" className="p-3 border rounded" />
        <input type="password" placeholder="Құпиясөзді растау" className="p-3 border rounded" />
        
        <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="w-4 h-4" />
            Мен келісемін өз деректерімді бөлісуге
        </label>

        <div className="flex gap-4 mt-2">
            <button type="button" className="flex-1 border p-3 rounded hover:bg-gray-200 transition">Артқа</button>
            <button type="submit" className="flex-1 bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">Жалғастыру</button>
        </div>

        <div className="flex items-center justify-center h-40">
            <p>Center</p>
        </div>    

        <div className="flex items-center gap-2 mt-3 mb-2">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">немесе</span>
            <hr className="flex-1 border-gray-300" />
        </div>

        <button type="button" className="flex items-center justify-center gap-2 border p-3 rounded hover:bg-gray-200 transition">
            <img src="/google-logo.png" alt="Google" className="w-5 h-5" />
            Жалғастыру Google арқылы
        </button>
        </form>
  );
};