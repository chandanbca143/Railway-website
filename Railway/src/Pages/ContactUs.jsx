import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaComments } from "react-icons/fa";

const ContactUs = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setChatMessages([...chatMessages, { sender: "You", text: userMessage }]);
      setTimeout(() => {
        setChatMessages((prev) => [...prev, { sender: "Chandan", text: "Hello! How can I help you?" }]);
      }, 1000);
      setUserMessage("");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r  to-blue-600 p-4 md:p-6 relative">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-lg md:max-w-2xl relative">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 text-center">Contact us</h2>
        <p className="text-gray-600 mb-4 md:mb-6 text-center">
          Let's talk about your website or project. Send us a message and we
          will be in touch within one business day.
        </p>
        {successMessage && <p className="text-green-600 font-semibold mb-4 text-center">{successMessage}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@example.com"
              className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message"
              className="w-full mt-1 p-2 md:p-3 border rounded-lg h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>
          </div>
          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our
            <a href="#" className="text-indigo-500 underline"> Privacy Policy</a>.
          </p>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 md:py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 text-indigo-600 text-xl md:text-2xl mt-6">
          <a href="#" className="hover:text-indigo-800"><FaEnvelope /></a>
          <a href="#" className="hover:text-indigo-800"><FaTwitter /></a>
          <a href="#" className="hover:text-indigo-800"><FaFacebook /></a>
          <a href="#" className="hover:text-indigo-800"><FaLinkedin /></a>
          <a href="#" className="hover:text-indigo-800"><FaInstagram /></a>
        </div>
      </div>

      {/* Chat Box */}
      <div className="fixed bottom-35 right-30">
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <FaComments size={24} />
        </button>
        {chatOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 w-72 fixed bottom-16 right-5 ">
            <div className="font-bold text-indigo-700">Chat with Chandan</div>
            <div className="h-40 overflow-y-auto border p-2 my-2">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`p-2 my-1 rounded-lg ${msg.sender === "You" ? "bg-gray-200" : "bg-indigo-200"}`}>
                  <strong>{msg.sender}: </strong>{msg.text}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full border p-2 rounded-lg"
            />
            <button
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div> 
        )}
      </div>
    </div>
  );
};

export default ContactUs;
