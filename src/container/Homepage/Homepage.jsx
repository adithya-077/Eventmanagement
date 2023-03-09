import "./Homepage.css";

import React from "react";
import Navbar from "../../component/navbar/navbar";
import Homebottom from "../../component/Homebottom/Homebottom";
import Footer from "../../component/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <div className="Homepage-bg">
        <Navbar></Navbar>
        <div className="maintext"><h1 > the ultimate solution for managing, registering and posting online and offline events</h1></div> 
      </div>
      <Homebottom></Homebottom>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
