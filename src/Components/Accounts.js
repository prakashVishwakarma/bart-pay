import React,{useState} from 'react'
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
import { MdEmail } from 'react-icons/md';
import { FaMobile } from 'react-icons/fa';
// import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { MdPeople } from 'react-icons/md';
import { CgPen } from 'react-icons/cg';
import {FaChevronRight} from 'react-icons/fa'
import {FaAngleDown} from'react-icons/fa'
import './Accounts.css'



const Accounts = () => {
  const [showProfile, setShowProfile] =useState(false);
  const[showPrivacy, setShowPrivacy] = useState(false);
  const[showFees,setShowFees]=useState(false);
  const[showDownload,setShowDownload]=useState(false);
  const [showAuth, setshowAuth] = useState(false);
  const [showLogs, setshowLogs] = useState(false)

  const activity =[
    {
      id:1,
      Date:"1st June 2023, 13:09:07",
      IP:"223.233.85.58",
      Activity:"Change 2fa Attempt"
    },
    {
      id:2,
      Date:"1st June 2023, 13:09:07",
      IP:"223.233.85.58",
      Activity:"Change 2fa Attempt"
    },
    {
      id:3,
      Date:"1st June 2023, 13:09:07",
      IP:"223.233.85.58",
      Activity:"Change 2fa Attempt"
    },
    {
      id:4,
      Date:"1st June 2023, 13:09:07",
      IP:"223.233.85.58",
      Activity:"Change 2fa Attempt"
    },
    {
      id:5,
      Date:"1st June 2023, 13:09:07",
      IP:"223.233.85.58",
      Activity:"Change 2fa Attempt"
    },
  ]

  return (
    <div>
    
    <div className='Account-wrapper'>
    <div className='left-sec'>
    <h3 className='Heading'>Account Section</h3>
      <div className='acc-child'>
        <CgProfile/>
        <div className='acc-text' onClick={() => 
        {
        setShowProfile(true)
        setShowFees(false)
        setshowAuth(false)
        setshowLogs(false)
        setShowDownload(false)
        }
        }
        >PROFILE</div>

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
        <div className='acc-text' onClick={() => 
        {
          setshowLogs(false)
          setShowFees(true)
        setShowProfile(false)
        setShowDownload(false)
        setshowAuth(false)
        }
        }
        >FEES</div>
      </div>
      <div className='acc-child'>
        <SiAuthy/>
        <div className='acc-text' onClick={() => 
        {
        setShowProfile(false)
        setShowFees(false)
        setshowAuth(true)
        setshowLogs(false)
        setShowDownload(false)
        setShowPrivacy(false)
        }
        }>TWO FACTOR AUTHENTICATION</div>
      </div>
      <div className='acc-child'>
        <AiOutlineFileSearch/>
        <div className='acc-text'onClick={() => 
        {
        setShowProfile(false)
        setShowFees(false)
        setshowAuth(false)
        setshowLogs(true)
        setShowDownload(false)
        setShowPrivacy(false)
        }
        }>ACTIVITY LOGS</div>
      </div>
      <div className='acc-child'>
        <TbReportAnalytics/>
        <div className='acc-text' onClick={() => 
       {
          setShowPrivacy(false)
          setShowFees(false)
        setShowProfile(false)
        setShowDownload(true)
          setshowLogs(false)
        setshowAuth(false)
        }}>DOWNLOAD REPORTS</div>
      </div>
      <div className='acc-child' id='acc-child-bottom'>
        <FcPrivacy/>
        <div className='acc-text'  onClick={() => 
        {setShowPrivacy(true)
        setshowLogs(false)
          setshowAuth(false)
          setShowFees(false)
        setShowProfile(false)
        setShowDownload(false)
        } } >PRIVACY CONTROL</div>
      </div>
      </div>

     
{/* right side */}
<div className='right-side'>
{/* Profile */}
{
(showProfile!=false)
?
<div className='profile-sec'>
    <h3 className='Heading'>
    <CgProfile/> Profile</h3>
    <div className='profile-info'>
    <div className='email'>
   
     <MdEmail/>
     <h5> chiddarwarprajakta711@gmail.com</h5>  <CgPen className='edit'/>
    </div>
    <div  className='phone'>
  
    <h5>  <FaMobile/>  +9067744154 </h5>
    <CgPen className='edit'/>
    </div>
    <div  className='nominee'>
   
    <h5> <MdPeople/>  Nominee </h5>
    <div>
    <FaChevronRight/></div>
    </div>
    </div>
</div>
:
""
}
{/* setShowProfile(false); */}
</div>
{/* setShowProfile(""); */}
{/* ------------------------------------------------------------- */}
{/* Fees  */}
{
  (showFees !=false)
  ?

<div className='fees'>
  <div className='fees-data'>
  <div className='Heading'>
    <h3>
    <FaPercentage/>
     Fees</h3>
    </div>
<div className='fees-info'>
<h4>Pay trading fees with WRX</h4>
<h5>Enable this option to pay trading fees with:</h5>
<ul>
  <li>WRX you buy from the exchange</li>
  <li>Unlocked WRX balance reserved for trading fees</li>
</ul>
<h6>Note: Enabling this feature allows you to pay trading fees with WRX in only USDT, BTC and WRX markets.
</h6>
</div>
 </div></div>
:
""
}
{/* -------------------------- */}
{/* Two Factor Authentication */}
{
(showAuth!=false)
?
<div className='profile-sec'>
  <h3 className='Heading'>
  <SiAuthy/>
  Two Factor Authentication</h3>
  <div className='auth-info'>
  <label class="container">Authenticator App
  <p>Highly Secure</p>
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>

<label class="container">Mobile SMS
<p>Moderatley Secure</p>
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<label class="container">None
<p>Not Secure</p>
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
  </div>
<h6>Note: If you change your 2FA settings, you will be unable to withdraw anything, and place P2P sell orders for 24 hours as a security measure</h6>
</div>
: 
""
}

{/* ----------------------------- */}
{/* Activity Logs */}

{
(showLogs!=false)
?
<div className='activity-section'>
  <h3 className='Heading'>
  <AiOutlineFileSearch/>
  Activity Logs
 </h3>
  <div className='profile-info'>

{
  activity.map((e) => <p className='activity'>{e.ID}{e.Date}{e.IP}{e.Activity}</p>
   )
}
  </div>

</div>
: 
""
}
 {/*-----------------------------------  */}
 {/* Download Reports */}

 {
(showDownload!=false)
?
<div className='download-sec'>
    <h3 className='Heading'>
    <TbReportAnalytics/>Download Reports</h3>
    <div className='download-info'>
    
   
    
     <h5> Select Reports</h5>  
   
    <div  className='fields'>

  <h5 className='trading'>Trading Reports 
  <FaAngleDown/>
  </h5>

  <h5 className='invoice'>GST Invoice
  <FaAngleDown/></h5>
    
    </div>
</div>
</div>
:
""
}







{/* Privacy Control */}
{
  (showPrivacy !=false)
  ?
<div className='privacy-control'>
  <div className='privacy-subsec'>
    <div className='Heading'>
    <h3>
    <FcPrivacy/>
     Privacy Control</h3>
    </div>

    <div className='PC-data'>
    <h4>You control your data, and we respect that.</h4>
    <hr/>
    <h5>  For requests regarding:</h5>
    <ul>
    <li>
      Copy of your data
    </li>
    <li>
    Data export
    </li>
    <li>
      Data correction
    </li>

    </ul>
<h5>Please reach out to us. Our team will be happy to help you out.</h5>
<button>Contact Us</button>
  </div>
  
</div>





 </div>
 : 
  ""
}
    

    </div>


  
    </div>
  );
}

export default Accounts
