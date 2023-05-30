import React, { useState } from "react";
import AllCrpytos from "./AllCrpytos";
import Search from "./Search";
import "../Components/wallet.css";
import Table from "./wallet-table";
import "./Exchange.css";
// import Footer2 from "./Common/footer3";

const ddata = {
  symbol: "",
  quote: {
    USD: {
      percent_change_24h: "",
      price: "",
    },
  },
};
const Exchange = () => {
  const [coin, setCoin] = useState(ddata);
  return (
    <div>
    <div className="exchange">
      <div style={{}}>
        <AllCrpytos coin={coin} setCoin={setCoin} />
      </div>
      <div>
        <Table />
      </div>
      <div>
        <Search coin={coin} />
      </div>
    </div>
      {/* <Footer2/> */}
    </div>
  );
};

export default Exchange;
