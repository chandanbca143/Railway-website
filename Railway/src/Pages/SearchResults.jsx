import React, { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

const BookingUI = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(''); // selected date string in yyyy-mm-dd format
  const [quota, setQuota] = useState('General');

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  // Generate dates array starting from today
  const generateDates = (numDays) => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < numDays; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  // Format date like: Wed, 28 May
  const formatDateDisplay = (dateObj) => {
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  // Format date for value (yyyy-mm-dd)
  const formatDateValue = (dateObj) => {
    return dateObj.toISOString().split('T')[0];
  };

  // Handle date selection from date row
  const handleDateSelect = (selectedDate) => {
    setDate(formatDateValue(selectedDate));
  };

  const dates = generateDates(7);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-sm font-medium">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-4">
        {/* Top Booking Section */}
        <div className="flex flex-wrap gap-4 justify-between items-end">
          <div className="flex flex-col w-full sm:w-[30%]">
            <label className="mb-1">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Leaving from"
              className="border px-3 py-2 rounded"
            />
          </div>

          <button onClick={handleSwap} className="bg-gray-200 p-2 rounded mt-5">
            <FaExchangeAlt className="text-xl" />
          </button>

          <div className="flex flex-col w-full sm:w-[30%]">
            <label className="mb-1">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Going to"
              className="border px-3 py-2 rounded"
            />
          </div>

          <div className="flex flex-col w-full sm:w-[30%]">
            <label className="mb-1">Departure Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border px-3 py-2 rounded"
              min={formatDateValue(new Date())} // prevent past dates
            />
          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded h-fit mt-5 hover:bg-orange-600">
            SEARCH
          </button>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <p className="mb-2">Class</p>
            <div className="flex gap-3 flex-wrap">
              {['SL', '3E', '3A', '2A'].map((cls) => (
                <label key={cls} className="flex items-center gap-1">
                  <input type="checkbox" /> {cls}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2">Quota</p>
            <div className="flex gap-3 flex-wrap">
              {['General', 'Tatkal', 'Lower Berth', 'Ladies'].map((q) => (
                <label key={q} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="quota"
                    checked={quota === q}
                    onChange={() => setQuota(q)}
                  />
                  {q}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2">Departure from</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button className="border rounded px-2 py-1">00:00 - 06:00</button>
              <button className="border rounded px-2 py-1">06:00 - 12:00</button>
              <button className="border rounded px-2 py-1">12:00 - 18:00</button>
              <button className="border rounded px-2 py-1">18:00 - 24:00</button>
              <button className="col-span-2 text-blue-500 text-left px-2">
                MORE FILTERS ▼
              </button>
            </div>
          </div>
        </div>

        {/* Dates Row */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4 whitespace-nowrap py-2 border-t border-b">
            {dates.map((d) => {
              const dateValue = formatDateValue(d);
              return (
                <div
                  key={dateValue}
                  onClick={() => handleDateSelect(d)}
                  className={`text-center min-w-[80px] cursor-pointer p-2 rounded ${
                    date === dateValue ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  <p className="font-semibold">{formatDateDisplay(d)}</p>
                  <p className="text-black-500">| Few Seats</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sort Section */}
        <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 text-sm">
            <span className="text-blue-600 cursor-pointer">DEPARTURE TIME</span>
            <span>ARRIVAL TIME</span>
            <span>DURATION</span>
            <span>NAME</span>
          </div>

          <button className="border rounded px-4 py-1 text-sm">
            Show trains with confirmed seats
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs mt-4 text-gray-500">
          * price is per adult & includes IRCTC taxes and fees
        </p>
      </div>
    </div>
  );
};

export default BookingUI;
