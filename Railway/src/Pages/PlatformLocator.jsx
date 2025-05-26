import React, { useState } from "react";

const PlatformLocator = () => {
  const [trainInput, setTrainInput] = useState("");
  const [station, setStation] = useState("");

  const handleSearch = () => {
    console.log("Searching platform for:", trainInput, station);
    // You can add your fetch logic here
  };

  return (
    <div className="min-m -screen bg-gradient-to-r from-purple-800 to-blue-400 p-39">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Platform Locator
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Train Input with Icon */}
          <div className="relative w-full md:flex-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-lg">
              🚆
            </span>
            <input
              type="text"
              placeholder="Enter the train name or number"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={trainInput}
              onChange={(e) => setTrainInput(e.target.value)}
            />
          </div>

          {/* Station Select with Icon */}
          <div className="relative w-full md:flex-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-lg">
              📍
            </span>
            <select
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={station}
              onChange={(e) => setStation(e.target.value)}
            >
              <option value="">Select Station</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Chapra">Chapra</option>
              <option value="Goa">Goa</option>
              <option value="Gujrat">Gujrat</option>
              <option value="patna">patna</option>
              <option value="Hajipur">Hajipur</option>
              <option value="Gorakhpur">Gorakhpur</option>
              <option value="Siwan">Siwan</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-400 text-white font-bold rounded-md transition"
          >
            SEARCH PLATFORM
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformLocator;
