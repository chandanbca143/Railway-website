import React from 'react';

const TrainRoutes = () => {
  return (
    <div>
      <h2>Top Train Routes</h2> <hr />
      
      <style>
        {`
          .containe {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px;
          }
          hr {
            width: 80%;
            margin-left: 10%;
          }
          .cont {
            display: flex;
            align-items: center;
            border: 2px solid #333;
            padding: 20px;
            background-color: #f4f4f4;
            gap: 15px;
            border-radius: 15px;
          }
          .cont img {
            width: 70px;
            height: 50px;
            object-fit: cover;
            border-radius: 5px;
          }
          .cont h3 {
            margin: 0;
            font-size: 18px;
            font-weight: bold;
          }
          h2 {
            text-align: center;
            margin: 20px 0;
            font-weight: bold;
            color: #1DA1CC;
            font-size: 25px;
          }
          
          @media (max-width: 768px) {
            .containe {
              grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
              gap: 15px;
            }
            .cont {
              flex-direction: column;
              text-align: center;
              padding: 15px;
            }
            .cont img {
              width: 100%;
              height: auto;
            }
          }
        `}
      </style>
      
      <div className="containe">
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.3A1elgSnOGyzcTB0SeVWeAHaEM?w=276&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Mumbai"
          />
          <h3>New Delhi From: Mumbai</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.ZiMjxURIjv1qGnjaHI7tsAHaEO?w=259&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Goa"
          />
          <h3>Goa From: Pune</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.xW2KEgEomSjg2o565Y5gKQHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Kolkata"
          />
          <h3>Kolkata From: Guwahati</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.ZiMjxURIjv1qGnjaHI7tsAHaEO?w=259&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Goa"
          />
          <h3>Goa From: Pune</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.ZiMjxURIjv1qGnjaHI7tsAHaEO?w=259&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Goa"
          />
          <h3>Goa From: Pune</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.xW2KEgEomSjg2o565Y5gKQHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Kolkata"
          />
          <h3>Kolkata From: Guwahati</h3>
        </div>
        <div className="cont">
          <img
            src="https://ts1.mm.bing.net/th?id=OIP.DVFsw4q9-7yUehvBdSWfdgHaEC&pid=15.1"
            alt="Chandigarh"
          />
          <h3>Mumbai From: Surat</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.ggj7xFzg1OCqkPG26y5f7QHaEo?w=236&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Kolkata"
          />
          <h3>Hyderabad From: Chennai</h3>
        </div>
        <div className="cont">
          <img
            src="https://ts2.mm.bing.net/th?id=OIP.Y6OOUI0qEEs-Dy5aOcRU7QHaE7&pid=15.1"
            alt="Hyderabad"
          />
          <h3>Jaipur From: Kota</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.Qa7yPynale3W0sIZHEnSTAHaE9?w=238&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Chennai"
          />
          <h3>Bengaluru From: Chennai</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.Q2pjXyf2X_nsFtH_uWTdygHaE7?w=227&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Rajasthan"
          />
          <h3>Chennai From: Rajasthan</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.U1EC0qHtjFeQ_LDOt4XC2AHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Goa"
          />
          <h3>Pune From: Nagpur</h3>
        </div>
      </div>
    </div>
  );
}; 

export default TrainRoutes;