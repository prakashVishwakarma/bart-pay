import React, { useState, useEffect } from "react";
import Footer2 from "./footer3";

// val.quote.USD.percent_change_24h
const ddata = [
  {
    symbol: "",
    quote: {
      USD: {
        percent_change_24h: "",
        price: "",
      },
    },
  },
];

const FUNDS = ({ coin, setCoin }) => {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState("");
  const [pair, setPair] = useState("");
  const [vol, setVol] = useState("");
  const [change, setChange] = useState("");
  const [cryptos, setCryptos] = useState(ddata);

  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=39d9d3ca-8568-4f17-8c49-d6f4f4af758e";
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((fdata) => setCryptos(fdata.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(cryptos.data[0].quote.USD)
  // console.log(cryptos.data[0])

  return (
    <div>
    <div className="funds-main">
      <div className="funds-button" style={{ paddingTop: "15px" }}>
        <div className="funds-button-content1">
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            BALANCE
          </button>{" "}
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            TRANSFER HISTORY
          </button>
        </div>
        <div className="funds-button-content2">
          <button className="withdraw-btn">WITHDRAW</button>
          <button className="deposit-btn">DEPOSIT</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          margin: "auto",
        }}
      >
        <div className="funds-heads">
          <h5> TOTAL PROFIT</h5>
          <h5>0$</h5>
        </div>

        <div className="funds-heads">
          <h5> CRYPTO HOLDING</h5>
          <h5>0$</h5>
        </div>
        <div className="funds-heads">
          <h5> USD BALANCE</h5>
          <h5>0$</h5>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
        }}
      >
        <input
          className="search"
          type="text"
          placeholder="Search"
          style={{ width: "38%", marginLeft: "5%", marginTop: "40px" }}
          onChange={(val) => {
            setSearch(
              cryptos.filter((x) =>
                x.symbol.match(val.target.value.toUpperCase())
              )
            );
          }}
        />

        {show ? (
          <table
            border="0"
            cellSpacing="60px"
            bgcolor="white"
            className="fund-table"
            style={{
              margin: "auto",
              width: "90%",
            }}
          >
            <tr>
              <th>ASSETS</th>
              <th>BALANCE BREAKDOWN</th>
              <th>TOTAL BALANCE</th>
            </tr>
            {search.length > 0
              ? search.map((item) => {
                  return (
                    <div>
                      <tr>
                        <td>{item.symbol}</td>
                        <td>0 {item.name}</td> <td>0 {item.name}</td>
                      </tr>
                      <button className="deposit-btn">DEPOSIT</button>
                      <button className="withdraw-btn">WITHDRAW</button>
                    </div>
                  );
                })
              : cryptos.map((item) => {
                  return (
                      <tr>
                        <td>{item.symbol}</td>
                        <td>0 {item.name}</td> <td>0 {item.name}</td>
                        <button className="deposit-btn">DEPOSIT</button>
                      <button className="withdraw-btn">WITHDRAW</button>
            </tr>                
                  );
                })}
          </table>
        ) : (
          <table
            border="2px"
            cellSpacing="60px"
            cellPadding="20px"
            bgcolor="white"
            style={{
              margin: "auto",
              width: "90%",
            }}
          >
            <tr>
              <th>ASSETS</th>
              <th>type</th>
              <th>Volume</th>
              <th>Status</th> <th>time</th>
            </tr>
          </table>
        )}
      </div>
    </div>
    <Footer2/>
    </div>
  );
};

export default FUNDS;
// const fake = 'https://jsonplaceholder.typicode.com/users'

// const fetchData = (fake)=>{
//       return fetch(fake)
//       .then((result)=>result.json())
//       .then((respose)=>console.log(respose))
// }

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '6b9f2c8c00msh00ebf6b990b2343p1a2e90jsn950d856cfa93',
//       'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
//     }
//   };

//   fetch('https://binance43.p.rapidapi.com/ticker/24hr', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

//   const request = async (url) => {
//     const response = await fetch(url);
//     const json = await JSON.stringify(response.json());
//     console.log('jsj')
//     console.log(json)
//     return json;
// }
