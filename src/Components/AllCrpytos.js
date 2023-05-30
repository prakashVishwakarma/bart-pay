import React, { useState , useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { RxTriangleUp } from "react-icons/rx";
import { RxTriangleDown } from "react-icons/rx";
import "./Exchange.css";

// val.quote.USD.percent_change_24h
const ddata = [
  {
    symbol: "",
    quote: {
      USD: {
        percent_change_24h : '',
        price: ''
      }
    }
  }
];

const AllCrpytos = ({coin, setCoin}) => {
  const [search, setSearch] = useState("");
  const [pair, setPair] = useState("");
  const [vol, setVol] = useState("");
  const [change, setChange] = useState("");
  const [cryptos, setCryptos] = useState(ddata)
  console.log(coin)
  
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=39d9d3ca-8568-4f17-8c49-d6f4f4af758e"
  const fetchData = () => {
    fetch(url)
    .then((response) => response.json())
    .then((fdata) => setCryptos(fdata.data))
    .catch(error => console.log(error))
  }
  useEffect( () => {
    fetchData();
    
  }, [])
  // console.log(cryptos.data[0].quote.USD)
  // console.log(cryptos.data[0])
  
  const handlePair = () => {
    if (pair === "") {
      setPair("up");
    } else if (pair === "up") {
      setPair("down");
    } else if (pair === "down") {
      setPair("up");
    }
    setVol("");
    setChange("");
  };
  const handleVol = () => {
    if (vol === "") {
      setVol("up");
    } else if (vol === "up") {
      setVol("down");
    } else if (vol === "down") {
      setVol("up");
    }
    setChange("");
    setPair("");
  };

  const handleChange = () => {
    if (change === "") {
      setChange("up");
    } else if (change === "up") {
      setChange("down");
    } else if (change === "down") {
      setChange("up");
    }
    setPair("");
    setVol("");
  };

  const handleCoin = () => {
    // setCoin(val.symbol)
    console.log(coin)
  }
  return (
    <div className="all-cryptos">
    <h4 className="usdt">USDT</h4>
    <div className="crypto-input">
      <input
      className="search"
        type="text"
        placeholder="Search"
        style={{ width: "90%" }}
        onChange={(val) => {
          setSearch(
            cryptos.filter((x) => x.symbol.match(val.target.value.toUpperCase()))
          );
        }}
      />
      <div className="input-icon">
        <AiOutlineSearch />
      </div>
    </div>
    <div className="exchange-filters">
      <div onClick={handlePair} id={pair ? "green-color" : ""}>
        Pair
        {pair === "up" ? (
          <BsArrowUp />
        ) : pair === "down" ? (
          <BsArrowDown />
        ) : (
          ""
        )}
      </div>
      <div onClick={handleVol} id={vol ? "green-color" : ""}>
        Vol
        {vol === "up" ? <BsArrowUp /> : vol === "down" ? <BsArrowDown /> : ""}
      </div>
      <div onClick={handleChange} id={change ? "green-color" : ""}>
        Change
        {change === "up" ? (
          <BsArrowUp />
        ) : change === "down" ? (
          <BsArrowDown />
        ) : (
          ""
        )}
      </div>
    </div>
    <div>
      <div className="all-coin">
        {search.length > 0
          ? search.map((val) => {
              return (
                <div className="solo-coin" id={coin.symbol === val.symbol ? 'selected' : ''} onClick={() =>{
                  setCoin(val)
                }}>
                  <div className="all-logo">
                    <div className="logo-child">
                      {/* <BsCurrencyBitcoin /> */}
                    </div>
                    <div className="coin-name">
                      <div className="coin-name-child">{val.symbol}</div>
                      <div
                        className="coin-up"
                        id={val.quote.USD.percent_change_24h >= 0 ? "green-color" : ""}
                      >
                        {val.quote.USD.percent_change_24h >= 0 ? <RxTriangleUp/> : <RxTriangleDown/>}
                        {val.quote.USD.percent_change_24h}%
                      </div>
                    </div>
                  </div>
                  <div className="coin-price">{val.quote.USD.price}</div>
                </div>
              );
            })
          : cryptos.map((val) => {
              return (
                <div className="solo-coin" id={coin.symbol === val.symbol ? 'selected' : ''} onClick={() =>{
                  setCoin(val)
                }}
              >
                  <div className="all-logo">
                    <div className="logo-child">
                      {/* <BsCurrencyBitcoin /> */}
                    </div>
                    <div className="coin-name">
                      <div className="coin-name-child">{val.symbol}</div>
                      <div
                        className="coin-up"
                        id={val.quote.USD.percent_change_24h >= 0 ? "green-color" : ""}
                      >
                        {val.quote.USD.percent_change_24h >= 0 ? <RxTriangleUp/> : <RxTriangleDown/>}
                        {val.quote.USD.percent_change_24h}%
                      </div>
                    </div>
                  </div>
                  <div className="coin-price">{val.quote.USD.price}</div>
                </div>
              );
            })}
      </div>
    </div>
    
  </div>
  );
};

export default AllCrpytos;
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