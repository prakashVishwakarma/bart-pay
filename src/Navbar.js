import React, { useState } from "react";
import { ImUser } from "react-icons/im";
import { IoMdHelpCircle } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

RxCross2;
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar-all">
      <div className="navbar">
        <div className="logo">Bart-Pay</div>
        <div className="nav-link">
          <ul>
            <Link to="/" id="link">
              {" "}
              <li>EXCHANGE</li>
            </Link>
            <Link to="p2p" id="link">
              {" "}
              <li>P2P</li>
            </Link>
            <Link to="funds" id="link">
              <li>FUNDS</li>
            </Link>
            <Link to="account" id="link">
            <li>
              <ImUser />
            </li>
            </Link>
            <li>
              <IoMdHelpCircle />
            </li>
            <Link to="signup" id="link">
              <li>Signup</li>
            </Link>
          </ul>
        </div>
        <div className="burger" onClick={handleclick}>
          {open ? <RxCross2 /> : <FiMenu />}
        </div>
      </div>
      {open ?
        <div className="slider">
      <ul>
            <Link to="/" id="link" onClick={handleclick}>
              <li>Exchange</li>
            </Link>
            <Link to="p2p" id="link" onClick={handleclick}>
              <li>P2P</li>
            </Link>
            <Link to="funds" id="link" onClick={handleclick}>
              <li>Funds</li>
            </Link>
            <Link to="account" id="link" onClick={handleclick}>
            <li id="link" onClick={handleclick}>
            <ImUser /> Profile
            </li>
            </Link>
            <li id="link" onClick={handleclick}>
            <IoMdHelpCircle /> Help and Support
            </li>
            <Link to="signup" id="link">
              <li>Signup</li>
            </Link>
          </ul>
      </div>: ''}
     
    </div>
  );
};

export default Navbar;
