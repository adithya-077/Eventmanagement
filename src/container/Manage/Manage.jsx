import "../Manage/Manage.css";

import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/navbar";
import { useUserAuth } from "../../context/Logincontext";

import imagea from '../../assest/lspic1.jpg'

const url = "http://localhost:7000/getuserevent";



const Cardele = ({ ele }) => {
  return (
    <div className="each-card" onClick={()=>{

    }}>
      <div className="card-image">
        <img src={imagea} alt="Event" />
      </div>
      <div className="details-div" id="title-card">
        <p className="card-title-name" id="locid">
          {ele.name &&  (ele.name).charAt(0).toUpperCase() + (ele.name).slice(1)}
        </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title" id="priceid">
         {Date(ele.date).slice(0,15)}  
        </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">{ele.tags} </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">{ele.venue} </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">₹ {ele.price} onwards</p>
      </div>
    </div>
  );
};


const Manage = () => {
    const [userevents, setuserevents] = useState([]);
  const { cookie } = useUserAuth();
  async function loadevents() {
    const finalres = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": cookie["token-eventm"],
      },
    })
    setuserevents(await finalres.json())
    
  }
  useEffect(() => {
    loadevents();
    
  }, []);

  const cards = userevents.map((e) => <Cardele ele={e} key={e.id} />);
  
  const {searchbartext } = useUserAuth();
  
  return (
    
    <div className="manage-main">
      
      <Navbar></Navbar>
      <div className="create-heading">
            <h1 className="head-heading">Events held by you</h1>
            <h4 className="heading-content">events that you have sheduled or which have sucessesfully completed.</h4>
            
        </div>
        <div className="showallevnt">{cards}</div>
      
    </div>
  );
};
export default Manage;
