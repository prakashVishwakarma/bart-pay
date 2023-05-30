import React, { useState } from "react";
import Search from "../../Components/Search";
import Table from "../../Components/wallet-table";
import "./P2P.css";

const ddata = {
  symbol: "",
  quote: {
    USD: {
      percent_change_24h: "",
      price: "",
    },
  },
};
const P2P = () => {
  const [coin, setCoin] = useState(ddata);
  const [buySell, setBuySell] = useState("buy");

  return (
    <div className="p2p-child">
      <div className="p2p-bar">
        <div className="p2pbuysell">
          <div
            className="p2p-buy"
            id={buySell === "buy" ? "green" : ""}
            onClick={() => {
              setBuySell("buy");
            }}
          >
            Buy
          </div>
          <div
            className="p2p-sell"
            id={buySell === "sell" ? "red" : ""}
            onClick={() => {
              setBuySell("sell");
            }}
          >
            Sell
          </div>
        </div>
        <div className="bar-currency">
          <div className="bar-currncy-child">USDT</div>
          <div className="bar-currncy-child">BTC</div>
        </div>
      </div>
      <div className="p2p-filter">
        <div className="p2p-input">
          <div >
          <div className="filter-head">Amount</div>

            <input className="Enter_Amount"  placeholder="Enter Amount" />
            <button className="btn_class">Search</button>
          </div>
        </div>
        <div className="p2p-fiat">
          <div className="filter-head">Fiat</div>
          <select >
            <option selected>USD</option>
            <option>INR</option>
          </select>
        </div>
        <div className="p2p-regions">
          <div className="filter-head">Available Regions</div>
          <select>
            <option selected>All Regions</option>
            <option>UAE</option>
            <option>Qatar</option>
            <option>USA</option>
            <option>France</option>
          </select>
        </div>
      </div>
      {/* <div className="p2p-table">
        <div className="table-col">
          <div className="bart-id">
            <div className="id-name">
              duxer
            </div>
            <div className="id-detail">
              34 orders   91.90% completion
            </div>
          </div>
        </div>
      </div> */}
      <div  className="p2p-table">
        <table >
          <tr className="t-head">
            <td>Advertisers (Completion rate)</td>
            <td>Price</td>
            <td>Limit/Available</td>
            <td>Payment</td>
            <td>Trade</td>
          </tr>
          <tr>
            <td>
              <div className="bart-id">
                <div className="id-name">duxer</div>
                <div className="id-detail">34 orders 91.90% completion</div>
              </div>
            </td>
            <td>
              <span>83.3 </span>
              <span>INR</span>
            </td>
            <td>
              <div>
                <span>Available </span>
                <span>106 </span>
                <span>USDT</span>
              </div>
              <div>
                <span>Limit</span>
                <span>₹102-</span>
                <span>₹104</span>
              </div>
            </td>
            <td>
              IMPS
            </td>
            <td>

            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default P2P;
