import { Navbar, Nav, Container } from 'react-bootstrap';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Home from "./Home";
import Admin from "./Admin";
import Like from "./Like";
import Account from "./Account";

import '../style/NavBar.css';

import light_logo from "../assests/light_color.png";
import { useState } from 'react';

export const NavBar = () => {
  
    return ( 
      <BrowserRouter>
      <>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/">
              <span className="nav-logo">
                <img src={light_logo} alt="logo" />
              </span>
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="nav-items">
            <Nav.Link as={Link} to="/" className={({ isActive }) => (isActive ? 'active' : 'nav-link')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/like" className={({ isActive }) => (isActive ? 'active' : 'nav-link')}>Liked</Nav.Link>
            <Nav.Link as={Link} to="/account" className={({ isActive }) => (isActive ? 'active' : 'nav-link')}>Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/like' element={<Like />}></Route>
        <Route path='/account' element={<Account />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
     );
};