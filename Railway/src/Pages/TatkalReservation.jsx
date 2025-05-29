import React, { useState } from "react";

const TatkalReservation = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    alert(`Searching trains from ${from} to ${to} on ${date}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-00 to-blue-00 text-black flex flex-col justify-start items-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Tatkal Ticket Booking
      </h1>

      {/* Booking Form */}
      <div className="bg-white text-black p-6 rounded-lg mb-10 max-w-4xl w-full shadow-md">
        <div className="flex flex-wrap gap-4 justify-center items-end">
          <div>
            <label className="block font-medium mb-1">From</label>
            <div className="flex items-center">
              <span className="mr-2">🚉</span>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Departure"
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>

          <button
            onClick={handleSwap}
            title="Swap Stations"
            className="text-2xl px-3 py-1 rounded bg-gray-200"
          >
            ⇄
          </button>

          <div>
            <label className="block font-medium mb-1">To</label>
            <div className="flex items-center">
              <span className="mr-2">🚉</span>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Destination"
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Departure Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Informational Content */}
      <div className="bg-white text-black p-6 rounded-lg max-w-6xl w-full shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Book Tatkal Train Tickets Online
        </h2>
        <p className="mb-4">
          You can book a maximum of only 4 passengers per PNR. Book tickets
          through your IRCTC login ID online on ixigo. Check for tatkal quota
          seat availability for your train and ticket confirmation
          probability/prediction.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Login to your IRCTC account at ixigo.com</li>
          <li>Select your travel source station and destination</li>
          <li>Choose your date of journey</li>
          <li>Now select quota as TATKAL and search for trains</li>
          <li>Click on BOOK NOW for the preferred train from the list</li>
          <li>
            Fill in the passengers detail carefully like Name, Age, Gender,
            Seat Preference, etc.
          </li>
          <li>
            Select your Payment mode like internet banking, payment wallet,
            credit or debit card and pay for the ticket
          </li>
          <li>Print your e-ticket</li>
        </ul>
        <p className="mb-4">
          Tatkal ticket booking is available on payment of an extra charge on a
          first-come-first-served basis for all but first AC seats. Tatkal
          booking is available for all class like 3A, 2A, 1A, sleeper and chair
          car. Tickets are issued for actual distance of travel, subject to the
          distance restriction applicable to the train. Once you have booked
          your tickets, you can check your{" "}
          <span className="text-red-500">PNR status</span>.
        </p>
        <p className="mb-6">
          Click here for normal{" "}
          <span className="text-red-500">Train ticket booking</span>.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          Book Tatkal Tickets on Mobile App
        </h3>
        <p>
          Get Free cancellation on Tatkal tickets when you book them through
          our <span className="text-red-500">train mobile app</span>.
        </p>
      </div>
    </div>
  );
};

export default TatkalReservation;
