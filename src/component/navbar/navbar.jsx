import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/Logincontext";

import "./navebar.css";

const Navbar = () => {
  let navi = useNavigate();
  const { setToken, cookie, setemail } = useUserAuth();
  function setTokenin() {
    setToken(null);
    setemail(null);
    window.location.reload(false);
  }
  return (
    <div className="navbar-main">
      < Link to='/' className="logo-link"><div className="navbarlogo">OnB</div></Link>
      
      <div className="navlinks">
        <Link  className="linksnav" to="/Popular">
          <div>Popular</div>
        </Link>
        {cookie["token-eventm"]!=='null'?<Link to="/Manage" className="linksnav">
          <div>Manage</div>
        </Link>:<Link  className="linksnav">
          <div>Manage</div>
        </Link>}
        <Link  className="linksnav">
          <div>Profile</div>
        </Link>
        {cookie["token-eventm"]!=='null'?<Link to="/Create/createvent" className="linksnav">
          <div>Create</div>
        </Link>:<Link  className="linksnav">
          <div>Create</div>
        </Link>}
      </div>
      {cookie["token-eventm"] === "null" ? (
        <button className="navbutton" onClick={() => navi("/Login")}>
          Login
        </button>
      ) : (
        <button className="navbutton" onClick={()=>{setTokenin();
          navi('/')
        }}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
