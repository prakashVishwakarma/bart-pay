import React, { useState } from 'react';
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
import SideBarCuntent from './Components/Profile/SideBarCuntent/SideBarCuntent';
import { BsShieldExclamation } from 'react-icons/bs';
import CurrencyPreference from './Components/Profile/CurrencyPreference/CurrencyPreference';
import PaymentOptions from './Components/Profile/PaymentOptions/PaymentOptions';
import Verification from './Components/Verification/Verification';
import VerificationPage from './pages/Verification/VerificationPage';
import ReferralPage from './pages/Referral/ReferralPage';
// import currency-preference from './Components/Profile/currency-preference/currency-preference';

function App() {

  const [profileText, setProfileText] = useState([
    ["Verify your KYC", "pk0777131@gmail.com", "Phone number + Add", "nominee", <BsShieldExclamation />],
    ["Two Factor Authentication", "Activity Logs"]
  ])
  console.log('profileText', profileText)

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="App"><ChartComponent /><Exchange /></div>}></Route>
          <Route path="funds" element={<FUNDS />}></Route>
          <Route path="p2p" element={<P2P />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="Verification" element={<VerificationPage />}></Route>
          <Route path="Referral" element={<ReferralPage />}></Route>
          {/* <Route path='account' element={<Accounts />}></Route> */}
          <Route path='account/' element={<Accounts />}>
            <Route path='profile' element={<SideBarCuntent />} />
            <Route path='currency-preference' element={<CurrencyPreference />} />
            <Route path='payment-options' element={<PaymentOptions />} />

            {/* <Route path='currency-preference' element={<SideBarCuntent />} /> */}

          </Route>
        </Routes>
        <Footer2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
