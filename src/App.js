import React from 'react';
import { Table } from 'react-bootstrap';
import { Footer } from 'react-bootstrap/lib/Modal';

import AllCrpytos from './AllCrpytos';
import Exchange from './exchange';
import Footer2 from './footer3';
// import AllCrpytos from './Components/Exchange/AllCrpytos';
// import Exchange from './Components/Exchange/Exchange';
// import { render } from 'react-dom';
// import Exchange from "./Components/Exchange/Exchange";
import Navbar from "./Navbar";
import ChartComponent from './ChartComponents';
function App() {
  return (
    <div className="App">
      <ChartComponent />
      <Exchange/>
    </div>
  );
}

export default App;
