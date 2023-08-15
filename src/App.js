import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Route, Routes, Link } from 'react-router-dom';


import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Like from "./pages/Like";
import Account from "./pages/Account";
// import Routes from "./Routes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/like">Like</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/like' element={<Like />}></Route>
      <Route path='/account' element={<Account />}></Route>
    </Routes>
    </>
  );
}

export default App;
