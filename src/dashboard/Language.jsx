// import { useContext } from "react";
// import { LanguageContext } from "../Shared_Context/LanguageContext";

// export default function Language() {
//   const { language, setLanguage } = useContext(LanguageContext);

//   const languages = [
//     { name: "English", flag: "🇬🇧" },
//     { name: "Spanish", flag: "🇪🇸" },
//     { name: "French", flag: "🇫🇷" },
//   ];

//   return (
//     <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-black bg-opacity-50 min-h-screen">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-2xl font-semibold text-white tracking-tight mb-6 animate-fade-in">
//           Language Settings
//         </h1>
//         <div className="bg-black bg-opacity-80 rounded-xl shadow-lg p-6 animate-slide-up">
//           <h3 className="text-lg font-medium text-white mb-4">Select Language</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {languages.map((lang) => (
//               <button
//                 key={lang.name}
//                 onClick={() => setLanguage(lang.name)}
//                 className={`flex items-center gap-4 p-4 bg-black bg-opacity-50 rounded-lg transition-transform duration-200 hover:scale-105 ${
//                   language === lang.name ? "bg-white bg-opacity-20 border border-blue-500" : ""
//                 }`}
//               >
//                 <span className="text-2xl">{lang.flag}</span>
//                 <span className="text-white text-opacity-90">{lang.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }