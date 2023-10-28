import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import logo from "./logo.svg";
import NavBar from "./components/navbar.js";
import Home from "./components/home.js";
import Deposit from "./components/deposit.js";
import CreateAccount from "./components/createaccount.js";
import Login from "./components/login.js";
import Withdraw from "./components/withdraw.js";
import AllData from "./components/alldata.js";

// import UserContextProvider from "./components/context.js";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes path="/">
            <Route index element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/deposit" element={<Deposit />}></Route>
            <Route path="/withdraw" element={<Withdraw />}></Route>
            <Route path="/alldata" element={<AllData />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
