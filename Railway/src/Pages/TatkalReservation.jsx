import React, { useState } from "react";

const TatkalBookingBar = () => {
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
    <div style={{ padding: "4rem", background: "linear-gradient(to right, skyblue, blue)", margin:"105px", color: "white", textAlign: "center" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "1rem" }}>Tatkal Ticket Booking</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", backgroundColor: "white", padding: "1rem", borderRadius: "8px", color: "black" }}>
        <div>
          <label>From</label><br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "4px" }}>🚉</span>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Departure"
            />
          </div>
        </div>

        <button onClick={handleSwap} title="Swap Stations" style={{ alignSelf: "center" }}>
          ⇄
        </button>

        <div>
          <label>To</label><br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "4px" }}>🚉</span>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Destination"
            />
          </div>
        </div>

        <div>
          <label>Departure Date</label><br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button onClick={handleSearch} style={{ backgroundColor: "blue", color: "white", marginLeft:"39px", padding: "0.5rem 1rem", borderRadius: "4px",  border: "none" }}>
          Search
        </button>
      </div>
    </div>
  );
};

export default TatkalBookingBar;
