import React, { useEffect, useState } from "react";
var wallettable = {
  padding: "10px",
};
function Search({coin}) {
  const [orders, setOrders] = useState(true);
  const [show, setShow] = useState(true);
  const [option, setOption] = useState(true);
  const [price, setPrice] = useState(0);
  const [stopPrice, setStopPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0)
  const [bwallet, setBwallet] = useState(1000)

  const handleSelect = (e) => {
    if (e.target.value === "limit") {
      setOption(true);
    } else if (e.target.value === "stop-limit") {
      setOption(false);
    }
  };
  const handleAmount = (e) => {
    setAmount(e.target.value)
    setTotal(e.target.value * price)
  }
  const handleTotal = (e) => {
    setTotal(e.target.value)
    setAmount(e.target.value / price)
  }
  useEffect(() => {
    // (async () => {
    //   const pr = await coin.quote.USD.price
    // })()
    setPrice(coin.quote.USD.price)
    setStopPrice(coin.quote.USD.price)
    setTotal(0)
    setAmount(0)  
  }, [coin])
 
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleStopPrice = (e) => {
    setStopPrice(e.target.value)
  }

  const handle25 = () => {
    setTotal(bwallet * 0.25)
    setAmount((bwallet * 0.25) / price)
  }

  const handle50 = () => {
    setTotal(bwallet * 0.5)
    setAmount((bwallet * 0.5) /price)
  }
  const handle75 = () => {
    setTotal(bwallet * 0.75)
    setAmount((bwallet * 0.75) / price)
  }
  const handle100 = () => {
    setTotal(bwallet)
    setAmount((bwallet) / price)
  }
  
  return (
    <div class="BuyAndSell">
      <button
        className="buy-button"
        onClick={() => {
          setOrders(true);
        }}
      >
        Open orders
      </button>
      <button
        className="sell-button"
        onClick={() => {
          setOrders(false);
        }}
      >
        completed
      </button>
      <div className="wallet">
        {orders ? (
          <table>
            <tr>
              <th style={wallettable}>pair</th>
              <th style={wallettable}>amount</th>
              <th style={wallettable}>price</th>
              <th style={wallettable}>total</th>
            </tr>
          </table>
        ) : (
          <table>
            <tr>
              <th style={wallettable}>pair</th>
              <th style={wallettable}>amount</th>
              <th style={wallettable}>price</th>
              <th style={wallettable}>totals</th>
            </tr>
          </table>
        )}
      </div>
      <div id="buy-sell">
      <button
        className="buy-button"
        onClick={() => {
          setShow(true);
        }}
      >
        BUY
      </button>
      <button
        className="sell-button"
        onClick={() => {
          setShow(false);
        }}
      >
        SELL
      </button>
      <select onChange={handleSelect} className="wallet-select">
        <option value="limit">Limit</option>
        <option value="stop-limit">Stop Limit</option>
      </select>
      {show ? (
        <div>
          {option ? (
            <div className="buy">
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">At price</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handlePrice} value={price}></input>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Amount</div>
                  <div className="wallet-price">{coin.symbol}</div>
                </div>

                <div>
                  <input className="number" type="number"  onChange={handleAmount} value={amount}></input>
                </div>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Total</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleTotal} value={total}></input>
                </div>
              </div>
              <div
                className="wallet-persent wallet-div"
              >
                <div className="wallet-persent1">${bwallet}</div>
                <div className="wallet-persent2">
                  <span onClick={handle25}>25%</span>
                  <span onClick={handle50}>50%</span>
                  <span onClick={handle75}>75%</span>
                  <span onClick={handle100}>100%</span>
                </div>
              </div>
              <button className="btn1">BUY {coin.symbol} </button>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Stop price</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleStopPrice} value={stopPrice}></input>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">At price</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handlePrice} value={price}></input>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Amount</div>
                  <div className="wallet-price">{coin.symbol}</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleAmount} value={amount}></input>
                </div>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Total</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleTotal} value={total}></input>
                </div>
              </div>
              <div
                className="wallet-persent wallet-div"
              >
                <div className="wallet-persent1">${bwallet}</div>
                <div className="wallet-persent2">
                  <span onClick={handle25}>25%</span>
                  <span onClick={handle50}>50%</span>
                  <span onClick={handle75}>75%</span>
                  <span onClick={handle100}>100%</span>
                </div>
              </div>
              <button className="btn1">BUY {coin.symbol}</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {option ? (
            <div className="sell">
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">At price</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number"  onChange={handlePrice} value={price}></input>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Amount</div>
                  <div className="wallet-price">{coin.symbol}</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleAmount} value={amount}></input>
                </div>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Total</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleTotal} value={total}></input>
                </div>
              </div>
              <div
                className="wallet-persent wallet-div"
              >
                <div className="wallet-persent1">${bwallet}</div>
                <div className="wallet-persent2">
                  <span onClick={handle25}>25%</span>
                  <span onClick={handle50}>50%</span>
                  <span onClick={handle75}>75%</span>
                  <span onClick={handle100}>100%</span>
                </div>
              </div>
              <button className="btn2">SELL {coin.symbol} </button>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">stop price</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleStopPrice} value={stopPrice}></input>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">At price</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number"  onChange={handlePrice} value={price}></input>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Amount</div>
                  <div className="wallet-price">{coin.symbol}</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleAmount} value={amount}></input>
                </div>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent:'center'
                }}
              >
                <div
                  className="wallet-side"
                  style={{
                    display: "block",
                  }}
                >
                  <div className="wallet-price">Total</div>
                  <div className="wallet-price">USD</div>
                </div>

                <div>
                  <input className="number" type="number" onChange={handleTotal} value={total}></input>
                </div>
              </div>
              
                <div
                className="wallet-persent wallet-div"
              >
                <div className="wallet-persent1">${bwallet}</div>
                <div className="wallet-persent2">
                  <span onClick={handle25}>25%</span>
                  <span onClick={handle50}>50%</span>
                  <span onClick={handle75}>75%</span>
                  <span onClick={handle100}>100%</span>
                </div>
              </div>
              
              <button className="btn2">SELL {coin.symbol} </button>
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  );
}
export default Search;
