import React from "react";

const IxigoBanner = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "20px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#007bff",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/69/69120.png" // Online train icon
            alt="Train Icon"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <h1 style={{ marginLeft: "10px", fontSize: "24px", color: "#333" }}>
          ixigo{" "}
          <span style={{ fontSize: "14px", color: "#555" }}>
            (IRCTC Authorized Partner)
          </span>
        </h1>
      </div>
      <h2 style={{ fontSize: "20px", color: "#333", marginBottom: "20px" }}>
        Seamless Train Ticket Bookings
      </h2>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        <li>✅ Free Cancellation & Instant Refunds</li>
        <li>✅ ₹0 Payment Gateway Fees via UPI</li>
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>4.5</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="yellow"
            style={{ width: "20px", height: "20px", marginLeft: "5px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </div>
        <span style={{ marginLeft: "10px", color: "#777" }}>(User Rating)</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" // Google Play badge
            alt="Get it on Google Play"
            style={{ height: "50px" }}
          />
        </a>
        <a href="#" style={{ textDecoration: "none" }}>
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" // App Store badge
            alt="Download on the App Store"
            style={{ height: "50px" }}
          />
        </a>
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/QR_Code_example.svg" // QR Code
          alt="QR Code"
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div> 
    </div>
  );
};

export default IxigoBanner;
