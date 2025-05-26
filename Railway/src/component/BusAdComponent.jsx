import React from 'react'

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
              src="./Buslogo.jpg"
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
              RailRover Bus Ticket Bookings
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
                <li>🚌 Comfortable & Reliable Buses</li>
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
                <span
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    marginLeft: "8px",
                  }}
                >
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
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./Googlepay.jpeg"
                  alt="Get it on Google Play"
                  style={{ width: "150px", borderRadius: "8px" }}
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
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

export default BusAdComponent