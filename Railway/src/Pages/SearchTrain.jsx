import React, { useState } from "react";

const SearchTrain = () => {
  const [trainInput, setTrainInput] = useState("");

  const handleCheckStatus = () => {
    alert(`Checking status for: ${trainInput}`);
    // Yahan aap API call wagaira laga sakte hain
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Train Running Status</h2>
      <input
        type="text"
        value={trainInput}
        onChange={(e) => setTrainInput(e.target.value)}
        placeholder="Enter the train number or name"
        style={{
          width: "100%",
          padding: "0.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
      <button
        onClick={handleCheckStatus}
        style={{
          width: "100%",
          padding: "0.5rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          cursor: "pointer"
        }}
      >
        Check Status
      </button>
    </div>
  );
};

export default SearchTrain;
