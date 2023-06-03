import React from 'react'
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
// import Accounts from '../pages/Account/Accounts';
import Signup from '../pages/Signup/signup';
import P2P from '../pages/PTOP/P2P';
import FUNDS from '../pages/Funds/Funds';
import Exchange from '../Components/exchange';
import ChartComponent from '../Components/ChartComponents';
// import Navbar from "../Components/Common/Navbar";
// import Footer2 from '../Components/Common/footer3';
// import Profile_Routes from './Profile_Routes';
const Home_Routes = () => {

    return (
        // <BrowserRouter>
        <div>
            {/* <Navbar /> */}
            <Routes>
                {/* <Route path="signup" element={<Signup />}></Route> */}
                <Route path="home" element={
                    <div className="App">
                        <ChartComponent />
                        <Exchange />
                    </div>}></Route>
                <Route path="funds" element={<FUNDS />}></Route>
                <Route path="p2p" element={<P2P />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                {/* <Route path='/a' element={<Profile_Routes />}></Route> */}
            </Routes>
            {/* <Footer2 /> */}
            <Outlet/>
        </div>
        // </BrowserRouter>
    )
}

export default Home_Routes
