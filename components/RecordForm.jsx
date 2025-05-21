
// import React, { useState } from "react";
// import { useRouter } from "next/router";

// const RecordForm = ({ data, onSubmit }) => {
//   const router = useRouter();
//   const [entry, setEntry] = useState(data);

//   const updateEntry = (field, value) => {
//     setEntry({ ...entry, [field]: value });
//   };

//   const handleCancel = () => {
//     router.push("/");
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white flex justify-center items-center p-4">
//       <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-2xl shadow-xl flex flex-col gap-6 w-full max-w-lg bg-white dark:bg-gray-800 z-10">
//         <h2 className="text-2xl font-bold text-center text-blue-700">
//           {entry._id ? "Editează Călătoria ✍️" : "Adaugă o Călătorie 🧳"}
//         </h2>

//         {/* Title input */}
//         <div>
//           <label
//             htmlFor="title"
//             className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
//           >
//             Titlu
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={entry.title}
//             onChange={(e) => updateEntry("title", e.target.value)}
//             className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
//             placeholder="Ex: Vacanță în Grecia"
//             required
//           />
//         </div>

//         {/* Description input */}
//         <div>
//           <label
//             htmlFor="description"
//             className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
//           >
//             Descriere
//           </label>
//           <textarea
//             id="description"
//             rows="4"
//             value={entry.description}
//             onChange={(e) => updateEntry("description", e.target.value)}
//             className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
//             placeholder="Ex: Rezervare hotel, bilete avion, obiective turistice..."
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4">
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
//           >
//             Anulează
//           </button>
//           <button
//             type="button"
//             onClick={() => onSubmit(entry)}
//             className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
//           >
//             {entry._id ? "Salvează" : "Creează"}
//           </button>
//         </div>
//       </div>

//       {/* Imaginea cu avion jos */}
//       <div className="absolute bottom-0 left-0 w-full pointer-events-none">
//         <img
//           src="/plane-bg.png"
//           alt="Decor avion"
//           className="w-full max-h-64 object-contain object-bottom"
//         />
//       </div>
//     </div>
//   );
// };

// export default RecordForm;

import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = ({ data, onSubmit }) => {
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (field, value) => {
    setEntry({ ...entry, [field]: value });
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white flex justify-center items-center p-4">
      <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-2xl shadow-xl flex flex-col gap-6 w-full max-w-lg bg-white dark:bg-gray-800 z-10">
        <h2 className="text-2xl font-bold text-center text-blue-700">
          {entry._id ? "Editează Călătoria ✍️" : "Adaugă o Călătorie 🧳"}
        </h2>

        {/* Destinație */}
        <div>
          <label
            htmlFor="destination"
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            Destinație
          </label>
          <input
            type="text"
            id="destination"
            value={entry.destination || ""}
            onChange={(e) => updateEntry("destination", e.target.value)}
            className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Ex: Paris, Franța"
            required
          />
        </div>

        {/* Data plecării */}
        <div>
          <label
            htmlFor="departureDate"
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            Data plecării
          </label>
          <input
            type="date"
            id="departureDate"
            value={entry.departureDate || ""}
            onChange={(e) => updateEntry("departureDate", e.target.value)}
            className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        {/* Ora plecării */}
        <div>
          <label
            htmlFor="departureTime"
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            Ora plecării
          </label>
          <input
            type="time"
            id="departureTime"
            value={entry.departureTime || ""}
            onChange={(e) => updateEntry("departureTime", e.target.value)}
            className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        {/* Descriere */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            Descriere
          </label>
          <textarea
            id="description"
            rows="4"
            value={entry.description || ""}
            onChange={(e) => updateEntry("description", e.target.value)}
            className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Ex: Rezervare hotel, bilete avion, obiective turistice..."
          />
        </div>

        {/* Butoane */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
          >
            Anulează
          </button>
          <button
            type="button"
            onClick={() => onSubmit(entry)}
            className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
          >
            {entry._id ? "Salvează" : "Creează"}
          </button>
        </div>
      </div>

      {/* Imagine avion jos */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img
          src="/plane-bg.png"
          alt="Decor avion"
          className="w-full max-h-64 object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default RecordForm;
