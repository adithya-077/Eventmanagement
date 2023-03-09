import "../Create/create.css";
import Navbar from "../../component/navbar/navbar";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Create = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="Create-main">
        <div className="create-heading">
            <h1 className="head-heading">Create and edit events</h1>
            <h4 className="heading-content">User new events tab to create events and edit events for making changes to already existing event.</h4>
        </div>
  
      <div className="outlet-div">
      <div className="courses-nav">
        <Link to="/Create/createvent" className="nav-links">New event</Link>
        <div className="sep"></div>
        <Link to="/Create/editevent" className="nav-links">Liked Event</Link>
      </div>
        <Outlet /></div>
    </div>
    </>
  );
};

export default Create;
