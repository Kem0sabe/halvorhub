import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import halvorImage from '../images/halvor.jpg'; // Add this line
import { Link } from 'react-router-dom';
const MainPage = () => {
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
