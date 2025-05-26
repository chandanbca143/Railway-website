import React from "react";
import { FaTrain, FaExchangeAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Train = () => {
  const navigate = useNavigate();

 

  return (
    <div
      className="p-6 mt-20 rounded-lg shadow-md w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center"
      style={{
        backgroundColor: '#f0f0f0',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h2 className="text-gray-700 text-lg font-bold">Train Ticket Booking</h2>
      <p className="text-gray-700 mb-4 font-bold">Easy IRCTC Login</p>

      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center bg-white p-3 rounded-md shadow-sm border w-full">
          <FaTrain className="text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">From</p>
            <p className="font-semibold">NDLS - NEW DELHI</p>
          </div>
        </div>

        <div className="flex justify-center items-center my-2">
          <FaExchangeAlt className="text-gray-500 text-lg" />
        </div>

        <div className="flex items-center justify-center bg-white p-3 rounded-md shadow-sm border w-full">
          <FaTrain className="text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">To</p>
            <p className="font-semibold">MMCT - Mumbai Central</p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white p-3 rounded-md shadow-sm border w-full my-2">
          <AiOutlineCalendar className="text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">Departure Date</p>
            <p className="font-semibold">Sat, 01 Mar</p>
          </div>
        </div>

        <button
          className="bg-sky-500 text-white font-bold rounded-md shadow-sm px-6 py-3 w-full mt-2"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Train;
