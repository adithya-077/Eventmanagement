import "../../container/Login/Login.css";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useUserAuth } from "../../context/Logincontext";

const Login = () => {
  const [Cookie, setCookie] = useCookies();
  const { setToken, inituser, url } = useUserAuth();
  let navi = useNavigate();
  const [userCred, setuserCred] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState(null);

  function handleF(e) {
    const newdata = { ...userCred };
    newdata[e.target.name] = e.target.value;
    setuserCred(newdata);
  }

  async function submit(e) {
    try {
      e.preventDefault();
      const res = await axios.post(url, userCred);
      seterror(null);
      setToken(res["data"]["token"]);
      inituser(res["data"]);
      setCookie("email-eventm", userCred.email, "/");
      navi('/');
    } catch (e) {
      seterror(e["response"]["data"]["msg"]);
    }
  }

  return (
    <div className="Login-area" onSubmit={(e) => submit(e)}>
      <form>
        <div className="header-login">
          <h1>Login</h1>
          <h5>Enter your details.</h5>
        </div>

        <div className="divider"></div>
        <input
          className="inputfld"
          type="text"
          placeholder="Enter email"
          name="email"
          value={userCred.email}
          onChange={handleF}
        />
        <div className="divider"></div>
        <input
          className="inputfld"
          type="password"
          placeholder="Enter password"
          name="password"
          value={userCred.password}
          onChange={handleF}
        />
        <div className="divider"></div>
        <button className="login-button">Login</button>
        <Link to="/Signup">
          <p>Create an account.</p>
        </Link>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
