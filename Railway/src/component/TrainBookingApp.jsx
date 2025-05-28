import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrain, FaExchangeAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import "./hero.css";

const Train = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleSearch = () => {
    navigate("/search-results"); // Navigate to the desired page
  };

  return (
    <div
      className="p-6 mt-20 rounded-lg shadow-md w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center"
      style={{
        background:
          'url("https://th.bing.com/th/id/OIP.tbRP-J4YXl5vOv4-mW53jAHaE7?w=288&h=192&c=7&r=0&o=5&pid=1.7") center/cover no-repeat',
        backgroundColor: "",
        backgroundBlendMode: "overlay",
      }}
    >
      <h2 className="text-black text-lg font-bold">Train Ticket Booking</h2>
      <p className="text-gray-700 mb-4 font-bold">Easy IRCTC Login</p>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center bg-white p-3 rounded-md shadow-sm border w-full">
          <FaTrain className="text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">From</p>
            <input
              type="text"
              placeholder="Enter Departure Station"
              className="font-semibold text-gray-700 outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-2">
          <FaExchangeAlt className="text-gray-500 text-lg" />
        </div>
        <div className="flex items-center justify-center bg-white p-3 rounded-md shadow-sm border w-full">
          <FaTrain className="text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">To</p>
            <input
              type="text"
              placeholder="Enter Destination Station"
              className="font-semibold text-gray-700 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center bg-white p-3 rounded-md shadow-sm border w-full my-2">
          <AiOutlineCalendar className="text-gray-500 mr-2" />
          <div>
            <p className="text-xs text-gray-500">Departure Date</p>
            <input
              type="date"
              placeholder="Select Departure Date"
              className="font-semibold text-gray-700 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white font-bold rounded-md shadow-sm px-6 py-3 w-full mt-2"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};




const Hero = () => {
  const navigate = useNavigate();

  const services = [
    { text: "Train Running Status", icon: "📍" },
    { text: "PNR Status Enquiry", icon: "📄" },
    { text: "Search by train Name", icon: "🔍" },
    { text: "Platform Locator", icon: "🛤️" },
    { text: "Search by Station", icon: "🚉" },
    { text: "Tatkal Reservation", icon: "🕒" },
  ];

  const handleClick = (serviceText) => {
    switch (serviceText) {
      case "Train Running Status":
        navigate("/train-status");
        break;
      case "PNR Status Enquiry":
        navigate("/pnr-status");
        break;
      case "Search by train Name":
        navigate("/search-train");
        break;
      case "Platform Locator":
        navigate("/platform-locator");
        break;
      case "Search by Station":
        navigate("/search-station");
        break;
      case "Tatkal Reservation":
        navigate("/tatkal-reservation");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h4 className="center-text">
        <span className="train-icon">🚂</span> IRCTC Authorised Partner
      </h4>
      <div className="container">
        {services.map((service, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleClick(service.text)}
            style={{ cursor: "pointer" }}
          >
            <div className="icon">{service.icon}</div>
            <div className="text">{service.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


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
            // boxshadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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
            color: black;
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
            src="https://www.ercotravels.com/wp-content/uploads/2022/03/shutterstock_725535832-1024x603.jpg"
            
            alt="Goa"
          />
          <h3>Punjab From: Haryana</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/R.7bc174439c39cc7e4590d2cd4bfeefff?rik=gOsp9ZYIAFnLeA&riu=http%3a%2f%2fwww.thisismyindia.com%2fimages%2ftravel%2fbihar.jpg&ehk=Ze7xjAPySPOKRcBd7rc%2bm%2b6r6aX5WdekVkpC7D1sfHg%3d&risl=&pid=ImgRaw&r=0"
            alt="Kolkata"
          />
          <h3>Bihar From: Assam</h3>
        </div>
        <div className="cont">
          <img
            src="https://th.bing.com/th/id/OIP.s8N1Ve4F1yPSoqGwzr-FGwHaE8?w=301&h=201&c=7&r=0&o=5&pid=1.7"
            alt="Goa"
          />
          <h3>Lucknow From: Patna</h3>
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



function RailwayInfoCards() {
  const cards = [
    {
    
      title: "🚆 IRCTC Ticket Booking on Railway.com",
      description: "Book your IRCTC train tickets quickly with the ixigo trains app or website using your IRCTC login credentials. Enjoy ₹0 PG fee on UPI payments and a smooth booking experience."
    },
    {
      
      title: "🔑 Easy & Fast IRCTC Login",
      description: "Access your IRCTC account quickly and securely.On ixigo, you can register on IRCTC, navigate IRCTC’s next-generation login process, reset your IRCTC password and more."
    },
    {
    
      title: "➕ Create Your IRCTC Login ID and Password",
      description: "Register now to start booking tickets online.Having an IRCTC ID and password is the first step towards your booking process. Create IRCTC login ID and password by following the below steps:"
    },
    {
    
      title: "🔒  Recover Your IRCTC Login ID",
      description: "Easily recover your login ID and book tickets. Open the ixigo trains app.ap on the profile icon at the bottom right of the page.Now, go to 'Link your IRCTC Account'.Then, click on 'Register on IRCTC'."
    },
    {
      
      title: "👤 Register as a New User on IRCTC",
      description: "Sign up for seamless access to ticketing services Use our train seat availability feature to find out the seat or berth availability in your train and check ticket lowest prices. Make online train ticket reservations according to your preferred options"
    },
    {
      
      title: "📝 Indian Railways Ticket Reservation",
      description: "Quickly reserve tickets with IRCTC's reliable system Complete the payment and reservation process using your IRCTC login details. You will be redirected to the IRCTC website."
    },
    {
      
      title: "🎫 IRCTC Train Ticket Booking Online",
      description: "Book train tickets online and skip the queues Planning a trip anytime soon? If yes, Indian Railways Catering and Tourism Corporation (IRCTC) is the newest and the most hassle-free way to book train tickets."
    },
    {
    
      title: "📱 IRCTC Next Generation Ticket Booking",
      description: "Experience advanced and faster ticketing features Indian Railways that provides ticketing, catering, and tourism services to the passengers. You can also book your seats using the ixigo trains app and avail great deals."
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Explore More at Railway.com</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
        {cards.map((card, index) => (
          <div key={index} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>{card.icon}</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{card.title}</h3>
            <p style={{ fontSize: "16px", color: "#555" }}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
            src="./logo.jpeg"
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
              RailRover Train Ticket Bookings
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
              <li>🚌 Comfortable & Reliable Train</li>
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

const TrainBookingApp = () => {
  return (
    <div>
      <Train />
      <Hero />
      <TrainRoutes/>
      <RailwayInfoCards/>
      <BusAdComponent/>
    </div>
  );
};

export default TrainBookingApp;
