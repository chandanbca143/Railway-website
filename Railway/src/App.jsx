import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Train from "./component/Train";
import Home from "./Pages/Home";
import LearnMore from "./Pages/LearnMore";
import TrainRoutes from "./component/TrainRoutes";
import Footer from "./component/Footer";
import LoginP from "./Pages/LoginP"; // ✅ Correct Import
import Hero from "./component/Hero";
import ContactUs from "./Pages/ContactUs";
import   TrainBookingApp  from "./component/TrainBookingApp";
import Bus from "./Pages/Bus";
import SearchBar from "./Pages/SearchBar";
import SearchResults from "./Pages/SearchResults";
import TrainStatus from "./Pages/TrainStatus"; // ✅ fixed line
import PnrStatus from "./Pages/PnrStatus";

import SearchTrain from "./Pages/SearchTrain";
import PlatformLocator from "./Pages/PlatformLocator";
import SearchStation from "./Pages/SearchStation";
import TatkalReservation from "./Pages/TatkalReservation"; // ✅ fixed line




// import  BusOffersSlider  from "./Pages/BusOffersSlider";

const App = () => {
  return (
    <Router>
  <Navbar /> {/* ✅ Navbar must be inside Router */}
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/learn-more" element={<LearnMore />} />
    {/* <Route path="/trains" element={<Train />} /> */}
    {/* <Route path="/routes" element={<TrainRoutes />} /> */}
    <Route path="/login" element={<LoginP />} />
    {/* <Route path="/Hero" element={<Hero/>} /> */}
    <Route path="/ContactUs" element={<ContactUs/>} />
    <Route path="/TrainBookingApp" element={<TrainBookingApp/>} />
    <Route path="/busService" element={<Bus/>} />
    <Route path="/SearchBar" element={<SearchBar/>} />
      
     <Route path="/search-results" element={<SearchResults />} />
        <Route path="/train-status" element={<TrainStatus />} />
        <Route path="/pnr-status" element={<PnrStatus />} />
          
        <Route path="/search-train" element={<SearchTrain />} />
        <Route path="/platform-locator" element={<PlatformLocator />} />
        <Route path="/search-station" element={<SearchStation />} />
        <Route path="/tatkal-reservation" element={<TatkalReservation />} />
    
    
     
    
    {/* <Route path="BusOffersSlider" element={<BusOffersSlider/>} /> */}
  </Routes>
  <Footer />
</Router>

  );
};

export default App;
