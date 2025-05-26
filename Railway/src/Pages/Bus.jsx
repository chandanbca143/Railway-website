import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBus,
  FaTicketAlt,
  FaMapMarkerAlt,
  FaTimesCircle,
  FaHeadset,
} from "react-icons/fa";
import SliderWithCards from "../component/SliderWithCards";
import BusAdComponent from "../component/BusAdComponent";

const Bus = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

 const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  const query = `?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`;
  navigate(`/search${query}`);
};


  return (
    <>
      {/* Bus Booking Section */}
      <div className="flex justify-center items-center mt-10 mb-10 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
          <h2 className="text-xl font-bold mb-6 flex items-center justify-center text-center">
            <FaBus className="mr-2 text-blue-500" /> Bus Booking
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-4 sm:space-y-0"
          >
            <div className="flex items-center border p-2 rounded w-full sm:w-auto">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="From"
                className="outline-none w-full"
              />
            </div>
            <div className="flex items-center border p-2 rounded w-full sm:w-auto">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To"
                className="outline-none w-full"
              />
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border rounded w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded flex items-center justify-center w-full sm:w-auto"
            >
              <FaBus className="mr-2" /> Search
            </button>
          </form>
        </div>
      </div>

      {/* Slider Section */}
      <SliderWithCards />

      {/* Booking Section */}
      <div className="w-4/5 mx-auto p-6 border rounded-2xl shadow-lg bg-white mb-10">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <FaBus className="mr-2 text-blue-500" /> Book Your Bus Tickets on
          ixigo
        </h2>
        <p className="mb-4">
          Ab aasan aur tezi se bus tickets book karein ixigo par. Best prices
          aur hassle-free booking ka maza lijiye. Aapko milega fastest booking
          experience aur multiple payment options.
        </p>
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <FaTicketAlt className="mr-2 text-green-500" /> Why Book Bus Tickets
          Online Through ixigo
        </h2>
        <p className="mb-4">
          Fast booking, secure payment options aur real-time updates ke saath
          safar karein. Ixigo aapke safar ko aur aasaan banata hai. Aapko milega
          verified operators ka trust aur best deals.
        </p>
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-red-500" /> Live Bus Tracking
        </h2>
        <p className="mb-4">
          Apni bus ka real-time location track karein aur late hone ki chinta
          chhod dijiye. Ixigo ke smart tracking system se aapko milega exact
          arrival time.
        </p>
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <FaTimesCircle className="mr-2 text-yellow-500" /> Free Cancellation
          of Bus Tickets Policy
        </h2>
        <p className="mb-4">
          Agar plan change ho jaye to tension nahi! Ixigo par free cancellation
          ka option available hai. Instant refund aur easy cancellation ka fayda
          uthaiye.
        </p>
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <FaHeadset className="mr-2 text-purple-500" /> ixigo 24/7 Customer
          Support
        </h2>
        <p className="mb-4">
          Kisi bhi samasya ya sawal ke liye, humari team 24/7 madad ke liye
          tayyar hai. Call, chat ya email ke zariye turant help lein.
        </p>
      </div>

      {/* Additional Content */}
      <BusAdComponent />
    </>
  );
};





export default Bus;
