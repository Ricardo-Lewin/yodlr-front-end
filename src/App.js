import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Navigationbar from './Navigationbar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navigationbar/>
      <Routes/>
     </BrowserRouter>
    </div>
  );
}

export default App;
