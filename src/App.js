import "./App.css";
import Homepage from "./container/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContextprovider } from "./context/Logincontext";
import Loginpage from "./container/Loginpage/Loginpage";
import Signuppage from "./container/Signpage/Signuppage";
import Createeventpage from "./container/Createeventspage/Createeventpage";
import Create from "./container/Create/Create";
import Editevent from "./container/Editevent/Editevent";
import Manage from "./container/Manage/Manage";
import Popular from "./container/Popular/Popular";
import Profile from "./container/Profile/Profile";

function App() {
  return (
    <LoginContextprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Login" element={<Loginpage />}></Route>
          {/* <Route path="*" element={<Error />}></Route> */}
          <Route path="/Signup" element={<Signuppage />}></Route>
          <Route path="/Create" element={<Create />}>
            <Route
              path="/Create/createvent"
              element={<Createeventpage />}
            ></Route>
            <Route path="/Create/editevent" element={<Editevent />}></Route>
          </Route>
          <Route path="/Manage" element={<Manage />}></Route>
          <Route path="/Popular" element={<Popular />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          
        </Routes>
      </BrowserRouter>
    </LoginContextprovider>
  );
}

export default App;
