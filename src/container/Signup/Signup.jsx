import React, { useState } from "react";
import axios  from "axios";

import '../Signup/Signup.css'
import { Link } from "react-router-dom";


const Signup = () => {
  const [userdata, setuserdata] = useState({

  });

  const [error , seterror] = useState(null);

  const url = 'http://localhost:7000/signup'
  const handleip = (e) => {
    const newdata = { ...userdata };
    newdata[e.target.name] = e.target.value;
    setuserdata(newdata);
    console.log(newdata);
  };

  function submit(e){
    e.preventDefault();
    
    axios.post(url,userdata)
    .then(res=>{
      console.log(res.statusText);
      seterror(null);
    //  navi('/Login')
      
    }).catch(res=>{
      seterror(res['response']['data']['msg']);
    })
  }

  return (
    <>
    
    <div className="signupinput">
      <form className="signupform" onSubmit={(e)=> submit(e)}>
        <div className="header-login">
          <h1>Create an account</h1>
          <h4>Enter required details</h4>
        </div>
        <div className="divider"></div>
        <input type="text" className='inputfld' placeholder="Enter First name" name='Fname' value={userdata.Fname} onChange={handleip}/>
        <div className='divider'></div>
        <input type="text" className='inputfld' placeholder='Enter Last name' name='Lname' id='Lname' value={userdata.Lname} onChange={handleip}/>
        <div className='divider'></div>
        <input type="text" className='inputfld' placeholder='Enter Email' name='email' id='email' value={userdata.email} onChange={handleip}/>
        <div className='divider'></div>
        <input type="text" className='inputfld' placeholder='Enter Password' name='password' id='password' value={userdata.password} onChange={handleip} />
        <div className='divider'></div>
        <input type="text"  className='inputfld' placeholder='Enter Moblie number' name='mobileno' id='mobileno' value={userdata.mobileno} onChange={handleip}/>
        <div className='divider'></div>
        <input type="date" className='inputfld' placeholder='Enter DOB' name='dob' id='dob' value={userdata.dob} onChange={handleip} />
        <div className='divider'></div>
        <button className='login-button'>Create</button>
        <Link to='/Login'><p>Have an account?</p></Link>
        {error && <p>{error}</p>}
      </form>
    </div>
    </>
  );
};

export default Signup;