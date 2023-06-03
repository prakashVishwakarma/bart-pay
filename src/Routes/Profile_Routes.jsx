import React, { Fragment, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdManageSearch } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
import { GiTeamIdea } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import { MdPayments } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";
import { SiAuthy } from "react-icons/si";
import { AiOutlineFileSearch } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { FcPrivacy } from "react-icons/fc";
import { Outlet, useNavigate } from "react-router-dom";
import Accounts from '../pages/Account/Accounts'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import '../pages/Account/Accounts.css'

// import Signup from '../pages/Signup/signup';
// import P2P from '../pages/PTOP/P2P';
// import FUNDS from '../pages/Funds/Funds';
// import Exchange from '../Components/exchange';
// import ChartComponent from '../Components/ChartComponents';
// import Navbar from "../Components/Common/Navbar";
// import Footer2 from '../Components/Common/footer3';
// import Profile_Routes from './Profile_Routes';

const Profile_Routes = () => {


    return (
        <div className='acc_container'>
            <div className='acc_left_sideBar'>
                <div className='acc-child'>

                    {'icons[i]'}
                    <div className='acc-text'>{'value.name'}</div>
                </div>
                <div className='acc-child'>

                    {'icons[i]'}
                    <div className='acc-text'>{'value.name'}</div>
                </div>
                {/* {
                    profile.map((value, i) => {
                        return (<Fragment kay={value.name} >
                            <div onClick={() => handleClickSidebar(i)} style={{ backgroundColor: index === i && 'rgb(23, 143, 195)', color: index === i && 'white' }} className='acc-child'>
                                {icons[i]}
                                <div className='acc-text'>{value.name}</div>
                            </div>
                        </Fragment>)
                    })
                } */}
            </div>

            <div className='acc_right_window'>
                <div className='acc_right_container'>
                    <div className='acc_right_container_cart'>
                        <div className='acc_cuntent'>
                            <p >{'text'}</p>
                        </div>
                        <div className='acc_cuntent'>
                            <p >{'text'}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* {
                profile.map((value, i) => {
                    return (<Fragment kay={value.name}>
                        {
                            index === i &&
                            <div className='acc_right_window'>
                                <div className='acc_right_container'>
                                    <div className='acc_right_container_cart'>
                                        <div className='acc_cuntent'>

                                            {
                                                value.options.map((text, i) => {
                                                    return (<p >{text}</p>)
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </Fragment>)
                })
            } */}
            <Outlet />
            {/*  */}
        </div >
        // <Routes>
        //     {/* <Route path="signup" element={<Signup />}></Route> */}
        //     <Route path="/a" element={<p>jjjj</p>}></Route>
        //     <Route path="b" element={<FUNDS />}></Route>
        //     <Route path="c" element={<P2P />}></Route>
        //     <Route path="d" element={<Signup />}></Route>
        //     {/* <Route path='account' element={<Profile_Routes />}></Route> */}
        // </Routes>


    )
}

export default Profile_Routes
