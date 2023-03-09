import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const LoginContext = createContext({});

const url = "http://localhost:7000/signin";

export function LoginContextprovider({ children }) {
  const [userstate, setuserstate] = useState(null);
  const [cookie, setcookie] = useCookies(null);
  const [searchbartext , setsearchbartext] = useState('');
  const tagdata = ['Online Events','Comedy Shows','Workshops','Music','Coding','Cooking','Gaming','Sport','Award show'];
  useEffect(() => {}, [cookie, userstate]);

  function inituser(props) {
    setuserstate(props);
  }

  function setToken(props) {
    setcookie("token-eventm", props, { path: "/" });
  }

  function setemail(props) {
    setcookie("email-eventm", props, { path: "/" });
  }

  return (
    <LoginContext.Provider
      value={{
        userstate,
        inituser,
        setToken,
        cookie,
        setemail,
        url,
        tagdata,
        searchbartext,
        setsearchbartext,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(LoginContext);
}
