import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/learn-more'); // This route should exist in your router
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <img
        src="https://img.freepik.com/free-photo/view-3d-modern-high-speed-train_23-2150905521.jpg?ga=GA1.1.95448218.1743177645&semt=ais_hybrid&w=740"
        alt="Train"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Overlay Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '5%',
          background: 'rgba(0, 0, 0, 0.4)',
          color: '#fff',
        }}
      >
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            "Booking made so easy, it feels like the station is next door!"


          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '500px' }}>
            Trains offer a scenic and comfortable way to travel. Discover new destinations with safety and style.
          </p>
          <div>
            <button
              style={{
                marginRight: '1rem',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                backgroundColor: '#ff9900',
                color: '#000',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Book Now
            </button>
            <button
              onClick={handleLearnMore}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                backgroundColor: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                cursor: 'pointer',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
