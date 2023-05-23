import './App.css';
import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import MyProfile from './Components/Profile';
import Navbar from './Components/Navbar';
import Rockets from './Components/Rockets';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={Rockets} />
        <Route path="/missions" element={MyProfile} />
        <Route path="/myprofile" element={MyProfile} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
