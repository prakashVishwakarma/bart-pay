import React from "react";
import "./wallet.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer2(){
    return(
    
         <div className="container5">     
         <h1 style={{
            marginLeft:"50px",
            color:"black",
            paddingLeft:"20px",
            textAlign: 'left',
            paddingTop:"20px",
            marginBottom:"20px"
        }}>Bart-Pay</h1>
        <div className="footer2">
            <div className="about">
            <h4 className="foot-head">About</h4> 
                <a className="foot-content">Blog</a>
                <a className="foot-content">Carrres</a>
                <a className="foot-content">Bart-Pay Warriors</a>
                <a className="foot-content">Announcements</a>
                <a className="foot-content">Media Assets</a>
                <a className="foot-content">Terms Of Use</a>
                <a className="foot-content">Privacy Policy</a>
            </div>
            <div className="service">
            <h4 className="foot-head">Services</h4> 
                <a className="foot-content">Download</a>
                <a className="foot-content">Corporate Account</a>
                <a className="foot-content">Bart-Pay Warriors</a>
                <a className="foot-content">Referral Program</a>
                <a className="foot-content">Market Maker Program</a>
                <a className="foot-content">Bart-Pay API</a>
                <a className="foot-content">List Your Coin</a>
            </div>
            <div className="support">
            <h4 className="foot-head">Support</h4> 
                <a className="foot-content">Help Center</a>
                <a className="foot-content">Fees</a>
                <a className="foot-content">Security</a>
                <a className="foot-content">Law Enforcement Request</a>
                <a className="foot-content">What Is Bitcoin</a>
            </div>
            <div className="social">
            <h4 className="foot-head">Services</h4> 
                <a className="foot-content "><FaFacebook className="icons"/> Facebook</a>
                <a className="foot-content "><FaInstagram className="icons"/>Instagram</a>
                <a className="foot-content "><FaTwitter className="icons"/>Twitter</a>
                <a className="foot-content "><FaLinkedinIn className="icons"/>Linkedin</a>
               
            </div>
            <div className="crypto">
              <h4 className="foot-head"> Buy crypto</h4> 
                <a className="foot-content">Buy Bitcoin</a>
                <a className="foot-content">Buy Ethereum</a>
                <a className="foot-content">Buy USDT</a>
                <a className="foot-content">Buy Matic</a>
                <a className="foot-content">Buy Dogecoin</a>
                <a className="foot-content">Buy SHIB</a>
                <a className="foot-content">Buy Solana</a>
                <a  className="foot-content">Buy Cardano</a>
            </div>
     
        {/* <a className="copyright">copywrite crypto.com</a> */}
        </div>
        <h5 className="copyright2">copywrite crypto.com</h5>
        </div>   
    )
}

export default Footer2