import React from "react";

const LearnMore = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">About Our Train System</h1>
        <p className="text-gray-600">Know everything about how it works and why it's useful</p>
      </div>

      {/* About Section */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">About the Train Platform</h2>
        <p className="text-gray-700 mb-4">
          This platform is designed to make your train journey easier and smarter. Whether you want
          to search trains, check live status, or understand the booking system, everything is just
          a few clicks away.
        </p>
        <p className="text-gray-700">
          Built with modern technologies like Node.js, Express, MongoDB, and React, our mission is
          to provide a transparent, fast, and reliable experience to every traveler.
        </p>
      </section>

      {/* Learn More Section */}
      <section className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Learn More</h2>

        {/* How it Works */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">How it Works</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Search for trains by source and destination.</li>
            <li>View detailed train information and timings.</li>
            <li>Book tickets or check live running status.</li>
            <li>Admin can manage train data (add/update/delete).</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Features</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Live Train Status</li>
            <li>Train Search</li>
            <li>24-hour Auto Deletion of old data (admin-controlled)</li>
            <li>User-friendly Interface</li>
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Real-time updates</li>
            <li>Simple and fast</li>
            <li>Reliable train information</li>
            <li>Safe and secure platform</li>
          </ul>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">FAQs</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Q: How to book a ticket? <br /> A: Use the train search and follow booking instructions.</li>
            <li>Q: How to check train status? <br /> A: Go to live status section and enter train number.</li>
            <li>Q: What if the train is delayed? <br /> A: You’ll get real-time updates here.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact & Feedback</h2>
        <p className="text-gray-700">
          For queries, suggestions, or issues, please contact us at:
          <br />
          <span className="font-medium text-black">TrainRover@gmail.com</span>
        </p>
      </section>
    </div>
  );
};

export default LearnMore;
