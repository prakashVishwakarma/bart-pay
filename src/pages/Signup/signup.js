import React from "react";
import { useState } from "react";
import axios from "axios";
import "../../Components/wallet.css";

import { Link } from "react-router-dom";

function Signup() {
  const [show, setShow] = useState(true);
  const [name, setfirstName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setCPassword] = useState("");
  const [token, setToken] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [cookie, setCookie] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let fullName = `${name}`;

  const handleInput = async function (e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:2000/api/v1/users/signup",
        data: {
          name: name,
          email: email,
          password: password,
          confirm_password: confirm_password,
        },
      });
      const responsedata = response.data;

      console.log(responsedata);

      if (responsedata.statusbar === "success") {
        setToken(responsedata.token);
        return alert("OTP sent to your email succesfully");
      }

      // const responseStatus = await response.statu;

      // if (responseStatus > 200 && responseStatus < 299) {
      //   setIsSuccess(true);
      //   setTimeout(() => {
      //     setIsSuccess(false);
      //     navigate("/login");
      //   }, 2000);
      // } else {
      //   setIsFailed(true);
      //   setIsLoading(false);
      //   setTimeout(() => {
      //     setIsFailed(false);
      //   }, 2000);
      //   alert("registration failed");
      // }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("user already exist or something went wrong");
    }
  };

  const handleSignInInput = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:2000/api/v1/users/verifySignup",
        data: {
          OTP: otp,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //  if(response.data.statusbar==="success"){
      //   return
      //  }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginInInput = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:2000/api/v1/users/login",
        data: {
          email: email,
          password: password,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.headers);

      //  if(response.data.statusbar==="success"){
      //   return
      //  }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleforgotInInput = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:2000/api/v1/users/forgot",
        data: {
          email: email,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.headers);

      //  if(response.data.statusbar==="success"){
      //   return
      //  }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signLogin">
      <div className="signup-flexs">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        > */}
          <div className="signup-forms">
            <button
              onClick={() => {
                setShow(true);
              }}
              className="signup-btn"
            >
              Signup
            </button>

            <button
              onClick={() => {
                setShow(false);
              }}
              className="login-btn login-class2"
            >
              Login
            </button>
            <br></br>
            {show ? (
              <form class="row g-3" onSubmit={handleSignInInput}>
                {/* <span class="Signup-head2">Please enter your detail</span> */}
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  id='form-name'
                >
                  Name
                </label>
                
                <input
                  type="text"
                  class="form-control signup-info"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                  placeholder="First name"
                  aria-label="First name"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control signup-info"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="E-mail"
                  aria-label="First name"
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control signup-info"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="password"
                  aria-label="First name"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Confirm password
                </label>
                <input
                  type="password"
                  class="form-control signup-info"
                  placeholder="password"
                  aria-label="First name"
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Refreal
                </label>
                <input
                  type="text"
                  class="form-control signup-info"
                  placeholder="Refreal"
                  aria-label="First name"
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                />
                <input
                  type="submit"
                  style={{
                    border: "none",
                    background: "#3F3B6C",
                    color: "white",
                    borderRadius: '5px'
                  }}
                  onClick={handleSignInInput}
                  className=""
                ></input>
              </form>
            ) : (
              <form onSubmit={handleLoginInInput}>
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="form-control signup-info"
                  placeholder="Email"
                  aria-label="First name"
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control signup-info"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="password"
                  aria-label="First name"
                />
                {/* onClick={handleLoginInInput} */}

                <Link
                  to="userLanding"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  className=""
                >
                  {" "}
                  <input
                    type="submit"
                    style={{
                      border: "none",
                      background: "#3F3B6C",
                      color: "white",
                    }}
                    className="form-control "
                  ></input>
                </Link>
                <form onSubmit={handleforgotInInput}>
                  {/* <input type="email"onChange={(e) => {
          setEmail(e.target.value);
          }} ></input> */}
                  <input
                    type="button"
                    style={{
                      border: "none",
                      background: "none",
                      color: "#3F3B6C",
                      marginTop: "10px",
                    }}
                    value="forgot password ?"
                    onClick={handleforgotInInput}
                  ></input>
                </form>
              </form>
            )}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
export default Signup;
