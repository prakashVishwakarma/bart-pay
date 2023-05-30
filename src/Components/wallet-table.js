import React from "react";
import { useState } from "react";
const tableHead = {
  padding: "5px",
};
function Table() {
  const [show, setShow] = useState(true);
  return (
    <div className="wallet-table2">
    <div className="order-book">
    <div className="order-button">
    <button
        className="market-btn"
        onClick={() => {
          setShow(true);
        }}
      >
        Market depth{" "}
      </button>
      <button
        className="order-btn"
        onClick={() => {
          setShow(false);
        }}
      >
        order value
      </button>
      </div>
      <div
        style={{
        
        }}
      >
        <div>
          {show ? (
            <table border='1px' id='order-table'>
              <tr>
                <th style={tableHead}>VOLUME</th>
                <th style={tableHead}>BUY PRICE</th>
                <th style={tableHead}>SELL PRICE</th>
                <th style={tableHead}>VOLUME</th>
              </tr>
              <tr>
                <td>0.1111</td>
                <td>0.1111</td>
                <td>0.1111</td>
                <td>0.1111</td>
              </tr>
              <tr>
                <td>0.1111</td>
                <td>0.1111</td>
                <td>0.1111</td>
                <td>0.1111</td>
              </tr>
            </table>
          ) : (
            <table border='1px' id='order-table'>
              <tr>
                <th style={tableHead}>VOLUME</th>
                <th style={tableHead}>BUY PRICE</th>
                <th style={tableHead}>SELL PRICE</th>
                <th style={tableHead}>VOLUME</th>
              </tr>
              <tr>
                <td>0.1118</td>
                <td>0.1116</td>
                <td>0.1114</td>
                <td>0.1115</td>
              </tr>
              <tr>
                <td>0.1111</td>
                <td>0.1111</td>
                <td>0.1111</td>
                <td>0.1111</td>
              </tr>
            </table>
          )}
        </div>
    </div>
    </div> 

    <div className='history' >
                <button className="trade-btn">Trade History</button>
                    <table width="100%" border="2px">
                        <tr>
                            <th style={tableHead}>
                                PRICE
                            </th>
                            <th style={tableHead}>
                               VOLUME
                            </th>
                            <th style={tableHead}>
                             TIME
                            </th>
               

                        </tr>
                        <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>
                  
                          
                        <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>   <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>   <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>   <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>   <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>   <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>   <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>   <tr>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"20px"
                            }}>
                                20000
                            </td>
                            <td style={{
                                paddingLeft:"15px"
                            }}>
                                20000
                            </td>
                        </tr>

                    </table>
                </div>
      
    </div>
  );
}
export default Table;
