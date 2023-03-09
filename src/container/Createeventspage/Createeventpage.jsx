import "../Createeventspage/Createeventpage.css";

import React, { useState } from "react";
import { useUserAuth } from "../../context/Logincontext";

const Createeventpage = () => {
  const [postdetails, setpostdetails] = useState({});
  const { cookie } = useUserAuth();
  const [error, seterror] = useState(null);

  function handleF(e) {
    const newdata = { ...postdetails };
    newdata[e.target.name] = e.target.value;
    setpostdetails(newdata);
    console.log(postdetails);
  }

  const url1 = "http://localhost:7000/createEvents";

  const {tagdata} = useUserAuth();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const tagslist = tagdata?.map(
    (e)=><option id={e} >{e}</option>
  );

  const dowlist = daysOfWeek?.map(
    (e)=><option id={e} >{e}</option>
  );

  async function submit(e) {
    e.preventDefault();
    try {
        
      if (cookie["token-eventm"] !== "null") {
        const event = await fetch(url1, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": cookie["token-eventm"],
          },
          body: JSON.stringify({
            name: postdetails.name,
            time: postdetails.time,
            date: postdetails.date,
            venue: postdetails.venue,
            discription: postdetails.discription,
            weburl: postdetails.weburl,
            capacity: postdetails.capacity,
            age: postdetails.age,
            tags:String(postdetails.tags),
            duration:postdetails.duration,
            day:String(postdetails.day),
            price:postdetails.price,
            address:postdetails.address,
          }),
        });
      }
    } catch (res) {
      seterror(res['msg']);
    }
  }

  return (
    <div className="Createeventpage-div">
      <div className="form-div">
        <form onSubmit={(e) => submit(e)}>
          <div className="header-login">
            <h1>Create post</h1>
            <h5>Enter your details.</h5>
          </div>

          <div className="divider"></div>
          <input
            className="inputfld"
            type="text"
            placeholder="Enter name"
            name="name"
            value={postdetails.name}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="time"
            placeholder="Enter time"
            name="time"
            value={postdetails.time}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="date"
            placeholder="Enter date"
            name="date"
            value={postdetails.date}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="text"
            placeholder="Enter venue"
            name="venue"
            value={postdetails.venue}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="text"
            placeholder="Enter discription"
            name="discription"
            value={postdetails.discription}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="text"
            placeholder="Enter website url"
            name="websiteurl"
            value={postdetails.websiteurl}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="number"
            placeholder="Enter capacity"
            name="capacity"
            value={postdetails.capacity}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="number"
            placeholder="Enter age"
            name="age"
            value={postdetails.age}
            onChange={handleF}
          />
          <div className="divider"></div>
          <select name='tags' className='inputfld' value={postdetails.tags} onChange={handleF}>
          {tagslist}
        </select >
          <div className="divider"></div>
          <input
            className="inputfld"
            type="number"
            placeholder="Enter duration"
            name="duration"
            value={postdetails.duration}
            onChange={handleF}
          />
          <div className="divider"></div>
          <select  name='day' className='inputfld' value={postdetails.day} onChange={handleF}>
          {dowlist}
        </select >
          <div className="divider"></div>
          <input
            className="inputfld"
            type="number"
            placeholder="Enter price"
            name="price"
            value={postdetails.price}
            onChange={handleF}
          />
          <div className="divider"></div>
          <input
            className="inputfld"
            type="string"
            placeholder="Enter address"
            name="address"
            value={postdetails.address}
            onChange={handleF}
          />
          <div className="divider"></div>
          <button className="login-button">Create event</button>
        </form>
        
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Createeventpage;
