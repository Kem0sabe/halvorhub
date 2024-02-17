import React, { useEffect } from 'react';
import ReactGA from 'react-ga';



import surfImage from '../images/surf.jpg'; // Add this line
const Drage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App-body">
        <h1>Surfekurs</h1>
        <p>Er du klar for å surfe??? Snart lanserer jeg surfekurs!</p>
        
          <img src={surfImage} className="App-image" alt="Halvor" />
        <h3>Påmelding</h3>
          <p>Kommer snart</p>

        </div>
  );
};

export default Drage;
