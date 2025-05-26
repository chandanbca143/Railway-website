import React, { useState } from "react";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const [formData, setFormData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    roomType: "",
    guests: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successfully! Thank you.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "16px",
        marginTop: "90px",
        marginBottom: "30px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#007bff",
          fontWeight: "700",
          fontSize:"25px",
        }}
      >
        Cheap Hotel Booking Online
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div
          style={{
            flex: "1 1 calc(50% - 16px)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaMapMarkerAlt style={{ color: "#666" }} />
          <div style={{ width: "100%" }}>
            <label
              style={{ fontSize: "16px", color: "#666", fontWeight: "700" }}
              htmlFor="destination"
            >
              Destination
            </label>
            <select
              id="destination"
              value={formData.destination}
              onChange={handleInputChange}
              style={{
                fontSize: "14px",
                width: "90%",
                border: "1px solid black",
                outline: "none",
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "400",
              }}
              required
            >
              <option value="" disabled>
                Select destination
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Bihar">Bihar</option>
              <option value="Pune">Pune</option>
              <option value="uttar Pradesh">Uttar Pradesh</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Punjab">Punjab</option>
            </select>
          </div>
        </div>

        <div
          style={{
            flex: "1 1 calc(50% - 16px)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AiOutlineCheck style={{ color: "green" }} />
          <div style={{ width: "100%" }}>
            <label
              style={{ fontSize: "16px", color: "#666", fontWeight: "700" }}
              htmlFor="checkin"
            >
              Check-in
            </label>
            <input
              id="checkin"
              type="date"
              value={formData.checkin}
              onChange={handleInputChange}
              style={{
                fontSize: "14px",
                width: "90%",
                border: "1px solid black",
                outline: "",
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "400",
              }}
              required
            />
          </div>
        </div>

        <div
          style={{
            flex: "1 1 calc(50% - 16px)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AiOutlineClose style={{ color: "red" }} />
          <div style={{ width: "100%" }}>
            <label
              style={{ fontSize: "16px", color: "#666", fontWeight: "700" }}
              htmlFor="checkout"
            >
              Check-out
            </label>
            <input
              id="checkout"
              type="date"
              value={formData.checkout}
              onChange={handleInputChange}
              style={{
                fontSize: "14px",
                width: "90%",
                border: "1px solid black",
                outline: "none",
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "400",
              }}
              required
            />
          </div>
        </div>

        <div
          style={{
            flex: "1 1 calc(50% - 16px)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaUserFriends style={{ color: "#666" }} />
          <div style={{ width: "100%" }}>
            <label
              style={{ fontSize: "16px", color: "#666", fontWeight: "700" }}
              htmlFor="roomType"
            >
              Room & Guests
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <select
                id="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
                style={{
                  fontSize: "14px",
                  width: "calc(50% - 8px)",
                  border: "1px solid black",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "black",
                  fontWeight: "400",
                }}
                required
              >
                <option value="" disabled>
                  Room Type
                </option>
                <option value="Single Room">Single Room</option>
                <option value="Double Room">Double Room</option>
              </select>

              <select
                id="guests"
                value={formData.guests}
                onChange={handleInputChange}
                style={{
                  fontSize: "14px",
                  width: "calc(50% - 8px)",
                  border: "1px solid black",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "black",
                  fontWeight: "400",
                }}
                required
              >
                <option value="" disabled>
                  Guests
                </option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          fontWeight: "500",
          marginTop: "16px",
          width: "100%",
        }}
      >
        Search
      </button>
    </form>
  );
};

const FAQCard = ({ icon, title, text }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      margin: "10px 0",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    }}
  >
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div
        style={{
          fontSize: "24px",
          color: "#007bff",
          marginRight: "12px",
        }}
      >
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: "18px", margin: "0 0 8px" }}>{title}</h3>
        <p style={{ fontSize: "14px", color: "#555" }}>{text}</p>
      </div>
    </div>
  </div>
);

const HotelBookingFAQs = () => {
  const faqs = [
    {
      icon: "❓",
      title: "How to book cheap hotels?",
      text: "To book cheap hotels, consider booking during off-peak seasons, using loyalty points, or exploring discounts on travel platforms like ixigo.",
    },
    {
      icon: "💸",
      title: "How to get a discount on hotel booking?",
      text: "Use promo codes, compare prices across platforms, and take advantage of special deals available on ixigo or other travel websites.",
    },
    {
      icon: "🏨",
      title: "Is it possible to book the hotel online and pay directly at the hotel?",
      text: "Yes, many hotels allow you to reserve rooms online and pay directly at the hotel upon check-in or check-out.",
    },
    {
      icon: "ℹ️",
      title: "Are there any hidden charges when booking hotels on ixigo?",
      text: "No, ixigo ensures full transparency. All charges are clearly mentioned during the booking process, so you don’t encounter surprises.",
    },
    {
      icon: "🔒",
      title: "How secure is the payment process on ixigo?",
      text: "The payment process on ixigo is highly secure, utilizing encryption and secure gateways to protect your transaction details.",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
        Hotel Booking FAQs
      </h2>
      {faqs.map((faq, index) => (
        <FAQCard key={index} icon={faq.icon} title={faq.title} text={faq.text} />
      ))}
    </div>
  );
};

const SliderWithCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: "./hotel1.webp" },
    { id: 2, image: "./hotel2.webp" },
    { id: 3, image: "./hotel3.webp" },
    { id: 4, image: "./hotel4.webp" },
    { id: 5, image: "./hotel5.webp" },
    { id: 6, image: "./hotel6.webp" },
    { id: 7, image: "./hotel7.webp" },
    { id: 8, image: "./hotel8.webp" },
    { id: 9, image: "./hotel9.webp" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ width: "100%", padding: "16px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Hotels Booking Discount Offers
      </h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handlePrev} style={{ marginRight: "16px" }}>
          Prev
        </button>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              transform: `translateX(-${currentIndex * 300}px)`,
              transition: "transform 0.5s ease",
              width: `${cards.length * 300}px`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  minWidth: "300px",
                  margin: "0 8px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={card.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} style={{ marginLeft: "16px" }}>
          Next
        </button>
      </div>
    </div>
  );
};
const BusAdComponent = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        fontFamily: "Arial, sans-serif",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", gap: "16px", alignItems: "start" }}>
          <img
            src="./hotellogo.avif"
            alt="Bus Logo"
            style={{ width: "100px", height: "100px" }}
          />
          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px",
                color: "#333",
              }}
            >
              Hotels  Bookings
            </h2>
            <ul
              style={{
                fontSize: "14px",
                color: "#666",
                margin: 0,
                padding: 0,
                listStyleType: "none",
              }}
            >
              <li>🚌 Comfortable & Reliable Hotles</li>
              <li>⚡ Quick Refunds & Easy Booking</li>
              <li>₹0 Payment Gateway Fees via UPI</li>
              <li>🌟 24/7 Customer Support</li>
            </ul>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#28a745",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                <span>4.7</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "8px",
                    color: "#FFC107",
                  }}
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.726 1.532 8.168L12 18.896l-7.468 4.304 1.532-8.168L0 9.306l8.332-1.151z" />
                </svg>
              </div>
              <span style={{ fontSize: "12px", color: "#999", marginLeft: "8px" }}>
                Rating
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#666",
            }}
          >
            Download the App
          </span>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
              justifyContent: "center",
            
            }}
          >
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="./Googlepay.jpeg"
                alt="Get it on Google Play"
                style={{ width: "150px", borderRadius: "8px" }}
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="./Appstore.jpeg"
                alt="Download on the App Store"
                style={{ width: "150px", borderRadius: "8px" }}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "12px",
            }}
          >
            <img
              src="./Qr code.jpeg"
              alt="QR Code"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <SearchBar />
    <SliderWithCards/>
    <HotelBookingFAQs />
  <BusAdComponent/>
    
  </div>
);

export default App;
