import React from 'react';
import { Table } from 'react-bootstrap';
import { Footer } from 'react-bootstrap/lib/Modal';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import AllCrpytos from './Components/AllCrpytos';
import Exchange from './Components/exchange';
import Footer2 from './Components/Common/footer3';
// import AllCrpytos from './Components/Exchange/AllCrpytos';
// import Exchange from './Components/Exchange/Exchange';
// import { render } from 'react-dom';
// import Exchange from "./Components/Exchange/Exchange";
import Navbar from "./Components/Common/Navbar";
import ChartComponent from './Components/ChartComponents';
import FUNDS from './pages/Funds/Funds';
import P2P from './pages/PTOP/P2P';
import Signup from './pages/Signup/signup';
import Accounts from './pages/Account/Accounts';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="signup" element={<Signup />}></Route> */}
          <Route path="/" element={
            <div className="App">
              <ChartComponent />
              <Exchange />
            </div>}></Route>
          <Route path="funds" element={<FUNDS />}></Route>
          <Route path="p2p" element={<P2P />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path='account' element={<Accounts />}></Route>
        </Routes>
        <Footer2/>
      </div>
    </BrowserRouter>
  );
}

export default App;
