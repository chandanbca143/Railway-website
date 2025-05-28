import React from 'react';

const SearchBar = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-5 m-5">
      <div className="backdrop-blur-md bg-white/60 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-gray-700">Search by train name</h2>
        <div className="flex w-full gap-3">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-lg"
          />
          <button className="px-7 py-3 bg-purple-600 text-white text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
