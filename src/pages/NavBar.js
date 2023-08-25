import { Navbar, Nav, Container } from 'react-bootstrap';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Home from "./Home1";
import Admin from "./Admin1";
import Like from "./Like1";
import Account from "./Account1";

import '../style/NavBar.css';

import light_logo from "../assests/light_color.png";
import { useState } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
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
            <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/like" className={activeLink === 'liked' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('liked')}>Liked</Nav.Link>
            <Nav.Link as={Link} to="/account" className={activeLink === 'account' ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('account')}>Account</Nav.Link>
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