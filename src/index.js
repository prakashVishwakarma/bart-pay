import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./signup";
import FUNDS from "./Funds";
import P2P from "./P2P";

import Accounts from "./Components/Accounts";

render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="signup" element={<Signup />}></Route> */}
        <Route path="/" element={<App />}></Route>
        <Route path="funds" element={<FUNDS />}></Route>
        <Route path="p2p" element={<P2P />}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path='account' element={<Accounts/>}></Route>
      </Routes>
      {/* <Footer2/> */}
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);

// class ChartComponent extends React.Component {
// 	componentDidMount() {
// 		getData().then(data => {
// 			this.setState({ data })
// 		})
// 	}
// 	render() {
// 		if (this.state == null) {
// 			return <div>Loading...</div>
// 		}
// 		return (
// 			<TypeChooser>
// 				{type => <Chart type={type} data={this.state.data} />}
// 			</TypeChooser>
// 		)
// 	}
// }
