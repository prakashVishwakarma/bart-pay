import React, { Fragment, useEffect, useState } from 'react'
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

import './Accounts.css'

const Accounts = () => {

  const [index, setIndex] = useState(0)
  const [icons, setIcons] = useState([<CgProfile />, <MdManageSearch />, <BsCurrencyExchange />, <GiTeamIdea />, <GoVerified />, <MdPayments />, <FaPercentage />, <SiAuthy />, <AiOutlineFileSearch />, <TbReportAnalytics />, <FcPrivacy />])
  const [profile, setProfile] = useState([
    { "name": "PROFILE", 'options': ["Verify youe KYC", "diposite withdraw & trade INR", "pk0777131@gmail.com", "phone numeber", "nominee",] },
    // { "name": "ACCOUNT MANAGEMENT", 'options': ["Two Factor Authentication", "Activity Logs  ", "dummy data", "dummy data", "dummy data",] },
    { "name": "CURRENCY PREFERENCE", 'options': ["Tether USD (USDT)", "Bitcoin (BTC)", "Rupee (INR)", "Rupiah (IDR)", "Rupee (INR)", "Russian Ruble (RUB)", "Hryvnia (UAH)", "Nigerian Naira (NGN)", "Saudi Riyal (SAR)", "Euro (EUR)", "Turkish Lira (TRY)", "WazirX Token (WRX)"] },
    { "name": "REFFERAL", 'options': ["dummy data", "dummy data", "dummy data", "dummy data",] },
    { "name": "VERIFY KYC", 'options': ["dummy data", "dummy data", "dummy data", "dummy data",] },
    { "name": "PAYMENT OPTIONS", 'options': ["PLEASE COMPLETE YOUR KYC", "You haven't completed your KYC. Your KYC will be approved instantly if your documents are clearly visible, and your information is correct.", "dummy data", "dummy data",] },
    { "name": "FEES", 'options': ["Pay trading fees with WRX", "Enable this option to pay trading fees with:", "WRX you buy from the exchange", "Unlocked WRX balance reserved for trading fees", "Note: Enabling this feature allows you to pay trading fees with WRX in only USDT, BTC and WRX markets."] },
    { "name": "TWO FACTOR AUTHENTICATION", 'options': ["dummy data", "dummy data", "dummy data", "dummy data",] },
    { "name": "ACTIVITY LOGS", 'options': ["dummy data", "dummy data", "dummy data", "dummy data",] },
    { "name": "DOWNLOAD REPORTS", 'options': ["dummy data", "dummy data", "dummy data", "dummy data",] },
    { "name": "PAYMENT", 'options': ["dummy data", "dummy data", "dummy data", "dummy data",] },
    { "name": "PRIVACY CONTROL", 'options': ["dummy data", "dummy data", "dummy data", "dummy data",] },
  ])
  console.log(profile)
  const navigate = useNavigate();


  const handleClickSidebar = (index) => {
    index === 0 && navigate("/account/profile")
    index === 1 && navigate("/account/currency-preference")
    index === 4 && navigate("/account/payment-options")
    setIndex(index)
  }

  useEffect(()=>{
    navigate("/account/profile")
  },[])


  return (
    <div className='acc_container'>
      <div className='acc_left_sideBar'>
        {
          profile.map((value, i) => {
            return (<Fragment kay={value.name} >
              <div onClick={() => handleClickSidebar(i)} style={{ backgroundColor: index === i && 'rgb(23, 143, 195)', color: index === i && 'white' }} className='acc-child'>
                {icons[i]}
                <div className='acc-text'>{value.name}</div>
              </div>
            </Fragment>)
          })
        }
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
    </div >
  );
}

export default Accounts
