import React, { useState } from 'react';

const BusBookingOffersSlider = () => {
  const offers = [
    { id: 1, img: 'https://via.placeholder.com/300x150', title: '20% Off on 1st Bus Booking', code: '1STBUS' },
    { id: 2, img: 'https://via.placeholder.com/300x150', title: 'Up to ₹500 Off', code: 'WEDDINGS' },
    { id: 3, img: 'https://via.placeholder.com/300x150', title: 'Flat ₹150 Off', code: 'AU150' },
    { id: 4, img: 'https://via.placeholder.com/300x150', title: 'Flat ₹200 Off', code: 'ICICI' },
    { id: 5, img: 'https://via.placeholder.com/300x150', title: '₹100 Cashback', code: 'WALLET' },
    { id: 6, img: 'https://via.placeholder.com/300x150', title: 'Special Weekend Offer', code: 'WEEKEND' },
    { id: 7, img: 'https://via.placeholder.com/300x150', title: '10% Cashback', code: 'NEWUSER' },
    { id: 8, img: 'https://via.placeholder.com/300x150', title: '₹250 Discount', code: 'HDFC' },
    { id: 9, img: 'https://via.placeholder.com/300x150', title: 'Flat ₹100 Off', code: 'ALLROUTES' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 320; // Card width + margin
  const visibleCards = 3;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < offers.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider-container" style={{ position: 'relative', overflow: 'hidden', background: '#fff', padding: '20px 0' }}>
      <div
        className="slider"
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * cardWidth}px)`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="card"
            style={{
              minWidth: '300px',
              margin: '0 10px',
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textAlign: 'center',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={offer.img}
              alt={offer.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ margin: '15px 0', fontSize: '1.2em' }}>{offer.title}</h3>
            <p style={{ fontSize: '1em', color: '#666' }}>Use Code: {offer.code}</p>
          </div>
        ))}
      </div>
      <div
        className="slider-buttons"
        style={{
          position: 'absolute',
          top: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)',
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            backgroundColor: '#007bff',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: '#007bff',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default BusBookingOffersSlider;
