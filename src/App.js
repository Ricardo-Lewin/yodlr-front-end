import React from 'react';
import './App.css';
import UserRegisterForm from './users/UserRegisterForm';
import Navigationbar from './Navigationbar';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
     <UserRegisterForm/>
    </div>
  );
}

export default App;
