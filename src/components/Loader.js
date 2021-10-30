// const Loader = () => {
//   return (
//     <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
//       <div className="bg-white p-16 rounded-xl shadow-lg cursor-wait select-none">
//         <div className="text-5xl font-bold text-gray-700 flex flex-col md:flex-row gap-8 items-center">
//           <div className="animate-spin w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 "></div>
//           <div>Loading</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;
const Loader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg cursor-wait select-none">
        <div className="text-2xl font-bold text-gray-700 flex flex-col md:flex-row gap-4 items-center">
          <div className="animate-spin w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 "></div>
          <div>Loading</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
