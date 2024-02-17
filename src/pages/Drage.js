import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import drageImage from '../images/drage.jpg'; // Add this line
const Drage = () => {
        useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        }, []);
    return (
        <div className="App-body">
        <h1>Dragekurs</h1>
        <p>Med 22 års erfaring innen dragekunsten, vil du få en rutinert instruktør.</p>
          <img src={drageImage} className="App-image" alt="Halvor" /> {/* Add this line */}
        <h3>Påmelding</h3>
          <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScNVPg4yrCKVphSffQP1w0k3x6SvQzROFYIy_eJfeUZr_YDIw/viewform?usp=sf_link"
      width="70%"
      height="600"
      border= "3px solid black"
      marginheight="20%"
      marginwidth="0"
    >
      Loading…
    </iframe>

        </div>
  );
};

export default Drage;
