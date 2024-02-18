// App.js


import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import Drage from './pages/Drage.js';
import Surf from './pages/Surf.js';
import Fekte from './pages/Fekte.js';
import Crime from './pages/Crime.js';
import Navbar from './components/Navbar';
import ReactGA from 'react-ga';

ReactGA.initialize('G-SERJ5DC5CW');

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/drage" element={<Drage />} />
        <Route path="/surf" element={<Surf />} />
        <Route path="/fekte" element={<Fekte />} />
        <Route path="/crime" element={<Crime />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

