import React from "react";
import "../wallet.css"
function Footer2() {
    const date = new Date();

    return (

        <div className="container5">
            <h1 style={{
                marginLeft: "10px",
                color: "black",
                textAlign: 'left'
            }}>Bart-Pay</h1>
            <div className="footer2">
                <div className="about">
                    <h4 className="foot-head">About</h4>
                    <h5 className="foot-content">Blog</h5>
                    <h5 className="foot-content">Carrres</h5>
                    <h5 className="foot-content">Bart-Pay Warriors</h5>
                    <h5 className="foot-content">Announcements</h5>
                    <h5 className="foot-content">Media Assets</h5>
                    <h5 className="foot-content">Terms Of Use</h5>
                    <h5 className="foot-content">Privacy Policy</h5>
                </div>
                <div className="service">
                    <h4 className="foot-head">Services</h4>
                    <h5 className="foot-content">Download</h5>
                    <h5 className="foot-content">Corporate Account</h5>
                    <h5 className="foot-content">Bart-Pay Warriors</h5>
                    <h5 className="foot-content">Referral Program</h5>
                    <h5 className="foot-content">Market Maker Program</h5>
                    <h5 className="foot-content">Bart-Pay API</h5>
                    <h5 className="foot-content">List Your Coin</h5>
                </div>
                <div className="support">
                    <h4 className="foot-head">Support</h4>
                    <h5 className="foot-content">Help Center</h5>
                    <h5 className="foot-content">Fees</h5>
                    <h5 className="foot-content">Security</h5>
                    <h5 className="foot-content">Law Enforcement Request</h5>
                    <h5 className="foot-content">What Is Bitcoin</h5>
                </div>
                <div className="social">
                    <h4 className="foot-head">Services</h4>
                    <h5 className="foot-content">Facebook</h5>
                    <h5 className="foot-content">Instagram</h5>
                    <h5 className="foot-content">Twitter</h5>
                    <h5 className="foot-content">Linkedin</h5>

                </div>
                <div className="crypto">
                    <h4 className="foot-head"> Buy crypto</h4>
                    <h5 className="foot-content">Buy Bitcoin</h5>
                    <h5 className="foot-content">Buy Ethereum</h5>
                    <h5 className="foot-content">Buy USDT</h5>
                    <h5 className="foot-content">Buy Matic</h5>
                    <h5 className="foot-content">Buy Dogecoin</h5>
                    <h5 className="foot-content">Buy SHIB</h5>
                    <h5 className="foot-content">Buy Solana</h5>
                    <h5 className="foot-content">Buy Cardano</h5>
                </div>

                <h5 className="copyright">copywrite &#169; crypto.com</h5>
            </div>
            <h5 className="copyright2">copyright  &#169;{date.getFullYear()} crypto.com</h5>
        </div>
    )
}

export default Footer2