import React from 'react';
import './App.css';
import Feed from './Feed/feed';
import Navbar from './Navbar/navbar';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Buttons from './ReusableComponent/Button';
function App() {
  return (
    <>
      <Navbar/>
      <div className='homecontent'>
      <div className='home'>
      <h1>Turn your Vehicle <br/>into Cash</h1>
      <h2>Cash loans ,No credit checks<br/> Pawn your card in Minutes</h2>
      <Buttons><Link to="/login">Apply Now</Link></Buttons>
      </div>
        <img src="https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png" width="400" alt="black yamaha yzf sport motorcycle bike png image pngpix" />
      </div>
      <div className='loandiv'>
      <div className='loan'>
        <h1>Compare your Bike loan offers<br/>from multiple lenders</h1>
      </div>
      </div>
    </>
  );
}
export default App;
