import "../Signpage/Signuppage.css";

import React from "react";
import Signup from "../Signup/Signup";
import image from "../../assest/lspic1.jpg";
import Navbar from "../../component/navbar/navbar";

const Signuppage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="signup-main">
      <div className="Loginpage-img">
        <img src={image} />
      </div>
      <Signup></Signup>
    </div>
    </>
  );
};

export default Signuppage;
