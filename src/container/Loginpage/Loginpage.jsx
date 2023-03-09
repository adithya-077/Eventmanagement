import "./Loginpage.css";

import React from "react";
import image from "../../assest/lspic.jpg";
import Login from "../Login/Login";
import Navbar from "../../component/navbar/navbar";

const Loginpage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="Loginpage-div">
      <div className="Loginpage-img">
        <img src={image} />
        </div>
      <Login></Login>
    </div>
    </>
  );
};

export default Loginpage;
