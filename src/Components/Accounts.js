import React from 'react'
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
import './Accounts.css'

const Accounts = () => {
  return (
    <div>
      <div className='acc-child'>
        <CgProfile/>
        <div className='acc-text'>PROFILE</div>
      </div>
      <div className='acc-child'>
        <MdManageSearch/>
        <div className='acc-text'>ACCOUNT MANAGEMENT</div>
      </div>
      <div className='acc-child'>
        <BsCurrencyExchange/>
        <div className='acc-text'>CURRENCY PREFERENCE</div>
      </div>
      <div className='acc-child'>
        <GiTeamIdea/>
        <div className='acc-text'>REFFERAL</div>
      </div>
      <div className='acc-child'>
        <GoVerified/>
        <div className='acc-text'>VERIFY KYC</div>
      </div>
      <div className='acc-child'>
        <MdPayments/>
        <div className='acc-text'>PAYMENT OPTIONS</div>
      </div>
      <div className='acc-child'>
        <FaPercentage/>
        <div className='acc-text'>FEES</div>
      </div>
      <div className='acc-child'>
        <SiAuthy/>
        <div className='acc-text'>TWO FACTOR AUTHENTICATION</div>
      </div>
      <div className='acc-child'>
        <AiOutlineFileSearch/>
        <div className='acc-text'>ACTIVITY LOGS</div>
      </div>
      <div className='acc-child'>
        <TbReportAnalytics/>
        <div className='acc-text'>DOWNLOAD REPORTS</div>
      </div>
      <div className='acc-child' id='acc-child-bottom'>
        <FcPrivacy/>
        <div className='acc-text' >PRIVACY CONTROL</div>
      </div>
    </div>
  );
}

export default Accounts
