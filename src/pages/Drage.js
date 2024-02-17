import React from 'react';
import halvorImage from '../images/halvor.jpg'; // Add this line
const Drage = () => {
  return (
    <div className="App-body">

          <img src={halvorImage} className="App-logo" alt="Halvor" /> {/* Add this line */}
          <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScNVPg4yrCKVphSffQP1w0k3x6SvQzROFYIy_eJfeUZr_YDIw/viewform?usp=sf_link"
      width="70%"
      height="600"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>

        </div>
  );
};

export default Drage;
