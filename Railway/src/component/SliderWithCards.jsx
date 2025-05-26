import React, { useState } from 'react'

const SliderWithCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
      { id: 1, title: "Exclusive Deal: 20% Off", image: "./Bus1.jpeg" },
      { id: 2, title: "Holiday Special: Save 25%", image: "./Bus2.jpeg" },
      { id: 3, title: "Family Discounts: Up to 30%", image: "./Bus3.jpeg" },
      { id: 4, title: "Weekend Offer: Flat ₹200 Off", image: "./Bus4.jpeg" },
      { id: 5, title: "Budget Rides: Save Big", image: "./Bus5.jpeg" },
      { id: 6, title: "Early Bird Offer: 15% Off", image: "./Bus6.jpeg" },
      { id: 7, title: "Student Special: Extra 10%", image: "./Bus7.jpeg" },
      { id: 8, title: "Adventure Trips: Save More", image: "./Bus8.jpeg" },
      { id: 9, title: "Luxury Rides: Discount Inside", image: "./Bus9.jpeg" },
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
      <div style={{ width: "100%", padding: "16px", marginBottom:"80px" }}>
        <h2
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Bus Booking Discount Offers
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
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                  <div style={{ padding: "16px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
                      {card.title}
                    </h3>
                  </div>
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

export default SliderWithCards