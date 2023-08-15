import { Navbar, Nav, Container } from 'react-bootstrap';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Like from "./pages/Like";
import Account from "./pages/Account";

function NavBar() {
    return ( 
      <BrowserRouter>
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/like">Liked</Nav.Link>
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
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
}

export default NavBar;