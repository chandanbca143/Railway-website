import React, { useState } from "react";

const platformLocator = () => {
  const [trainInput, setTrainInput] = useState("");
  const [station, setStation] = useState("");

  const handleSearch = () => {
    console.log("Searching platform for:", trainInput, station);
    // Add fetch logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-00 to-blue-00 p-6">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-blacks text-center mb-10">
        Indian Railways Services Portal
      </h1>

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Platform Locator Box */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Platform Locator
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Train Input */}
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

            {/* Station Select */}
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
                <option value="patna">Patna</option>
                <option value="Hajipur">Hajipur</option>
                <option value="Gorakhpur">Gorakhpur</option>
                <option value="Siwan">Siwan</option>
                <option value="panipat">panipat</option>
                <option value="sonipat">sonipat</option>
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

        {/* Tatkal Booking Info Box */}
        <div className="bg-white text-black p-6 rounded-lg max-w-8xl mx-auto shadow-md">

          <h2 className="text-2xl font-bold mb-4">Train Platform Locator</h2>
          <p className="mb-4">
           Platform locator enables rail passengers to check in advance the platform on which their train is scheduled to arrive. Train stations can be huge and confusing, with multiple levels and platforms, making it difficult for passengers to navigate and find their way around. Each train arrives at a specific platform. 
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>RailRover Platform Locator feature is easy to use and tells you the train platform number at every station along the way. You just need to enter the train name or number and hit the “Search” button. This can be done even before you arrive at the railway station.</li>
            <li>Train travel can be unpredictable, so ixigo’s goal is to provide you with all the details you need to make informed decisions about your journey. You can be confident that you are receiving the most accurate information available with our train platform finder.</li>
            <li>Our Live Running Status feature also allows you to perform a train platform number check. It provides real-time updates on the train’s exact location along with the platform number at each station throughout the journey.</li>
            <li>An IRCTC platform number enquiry can also be made at railway station counters. Alternatively, you can check it beside the train timetable on the display screens at the station, but not all stations have them.</li>
            <li>Click on ‘BOOK NOW’ for the preferred train from the list</li>
            <li>Fill in the passengers detail carefully like Name, Age, Gender, Seat Preference, etc.</li>
            <li>Select your Payment mode like internet banking, payment wallet, credit or debit card and pay for the ticket</li>
            <li>Print your e-ticket</li>
          </ul>
          <p className="mb-4">
            Tatkal ticket booking is available on payment of an extra charge on a first-come-first-served basis for all but first AC seats. Tatkal booking is available for all classes like 3A, 2A, 1A, sleeper, and chair car. Tickets are issued for actual distance of travel, subject to the distance restriction applicable to the train. Once you have booked your tickets, you can check your <span className="text-red-500">PNR status</span>.
          </p>
          <p className="mb-6">
            Click here for normal <span className="text-red-500">RailRover ticket booking</span>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Train Platform Locator</h3>
          <p>
            Get Free cancellation on Tatkal tickets when you book them through our <span className="text-red-500">train mobile app</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default platformLocator;
