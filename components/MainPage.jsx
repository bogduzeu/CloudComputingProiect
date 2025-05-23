
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { deleteRecord, getRecords } from "@/utils/recordsFunctions";

// const MainPage = () => {
//   const router = useRouter();
//   const [records, setRecords] = useState([]);

//   const fetchRecords = async () => {
//     try {
//       const response = await getRecords();
//       setRecords(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteRecord = async (id) => {
//     try {
//       const response = await deleteRecord(id);
//       if (response.deletedCount === 1) {
//         const newRecords = records.filter((record) => record._id !== id);
//         setRecords(newRecords);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleUpdateRecord = (id) => {
//     router.push(`/records/edit?id=${id}`);
//   };

//   useEffect(() => {
//     fetchRecords();
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       {/* Titlu și descriere */}
//       <div className="p-4 pb-24">
//         <h1 className="text-5xl font-bold text-center mb-6 text-blue-700">
//           ✈️ Trip Planner – Planificatorul Tău de Vacanțe
//         </h1>
//         <p className="text-center text-gray-600 mb-10">
//           Organizează-ți activitățile, rezervările și itinerariile vacanței tale într-un singur loc!
//         </p>

//         {/* Lista activităților */}
//         <div className="flex flex-wrap gap-4 justify-center">
//           {records.map((record) => (
//             <div
//               className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//               key={record._id}
//             >
//               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 {record.title}
//               </h5>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 {record.description}
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   type="button"
//                   className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                   onClick={() => handleUpdateRecord(record._id)}
//                 >
//                   Editează
//                 </button>
//                 <button
//                   type="button"
//                   className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                   onClick={() => handleDeleteRecord(record._id)}
//                 >
//                   Șterge
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Imaginea avionului în jos */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
//         <img
//           src="/plane-bg.png"
//           alt="Avion decorativ"
//           className="w-full max-h-64 object-contain object-bottom"
//         />
//       </div>
//     </div>
//   );
// };

// export default MainPage;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";

const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();
      setRecords(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);
      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateRecord = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Titlu și descriere */}
      <div className="p-4 pb-24">
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-700">
          ✈️ Trip Planner – Planificatorul Tău de Vacanțe
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Organizează-ți activitățile, rezervările și itinerariile vacanței tale într-un singur loc!
        </p>

        {/* Lista călătoriilor */}
        <div className="flex flex-wrap gap-4 justify-center">
          {records.map((record) => (
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={record._id}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {record.title}
              </h5>

              {/* Informații suplimentare */}
              <div className="mb-3 text-gray-800 dark:text-gray-300 text-sm space-y-1">
                {record.destination && (
                  <p><strong>Destinație:</strong> {record.destination}</p>
                )}
                {record.departureDate && (
                  <p><strong>Data plecării:</strong> {record.departureDate}</p>
                )}
                {record.departureTime && (
                  <p><strong>Ora plecării:</strong> {record.departureTime}</p>
                )}
              </div>

              {/* Descriere */}
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {record.description}
              </p>

              {/* Butoane */}
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => handleUpdateRecord(record._id)}
                >
                  Editează
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => handleDeleteRecord(record._id)}
                >
                  Șterge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Imaginea avionului jos */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <img
          src="/plane-bg.png"
          alt="Avion decorativ"
          className="w-full max-h-64 object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default MainPage;
