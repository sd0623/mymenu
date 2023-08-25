import './App.css';

import React from 'react';
import {Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { NavBar } from "./pages/NavBar";


function App() {
  return (
    <div className="vh-100 overflow-hidden">
      <NavBar />
    </div>
  );
}

export default App;
