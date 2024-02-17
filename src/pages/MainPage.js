import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


import logo from '../logo.svg';
import '../App.css';
import halvorImage from '../images/halvor.jpg'; // Add this line
import { Link } from 'react-router-dom';

const MainPage = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
  return (
    <>
      <div className="App-body">
        <h1>Halvor Hub </h1>
          <img src={halvorImage} className="App-logo" alt="Halvor" /> {/* Add this line */}
      </div>
    </>
  );
};

export default MainPage;
    ;
