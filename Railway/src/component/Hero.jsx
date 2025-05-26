import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div>
      <h4 className="center-text">
        <span className="train-icon">🚂</span> IRCTC Authorised Partner
      </h4>

      <div className="container">
        <div className="box">
          <div className="icon">🚄</div>
          <div className="text"> Train Running Status</div>
        </div>
        <div className="box">
          <div className="icon">📜</div>
          <div className="text">PNR Status Enquiry</div>
        </div>
        <div className="box">
          <div className="icon">🛋️</div>
          <div className="text">Search by train Name</div>
        </div>
        <div className="box">
          <div className="icon">🏗️</div>
          <div className="text"> Platform Locator</div>
        </div>
        <div className="box">
          <div className="icon">🗺️</div>
          <div className="text">Search by Station</div>
        </div>
        <div className="box">
          <div className="icon">⏱️</div>
          <div className="text">Tatkal Reservation</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
