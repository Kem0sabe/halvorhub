import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import halvorImage from '../images/halvor.jpg'; // Add this line
const Drage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App-body">
        <h1>Fektekurs</h1>
        <p>Har du set Kaptein Sabeltann, og blitt inspirert til å lære deg å fekte? Frykte ikke landkrabbe, snart kommer det et nytt kurs!</p>
        
          <img src={halvorImage} className="App-image" alt="Halvor" />s
        <h3>Påmelding</h3>
          <p>Kommer snart</p>

        </div>
  );
};

export default Drage;
