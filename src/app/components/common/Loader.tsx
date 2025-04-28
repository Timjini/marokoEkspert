import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-t from-amber-700/70 to-amber-600/30 min-h-screen bg-opacity-50">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-white font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
