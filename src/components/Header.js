import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='p-3'>
      <Navbar.Brand href="#home">Quantum Aesthetics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#online">Online</Nav.Link>
          <Nav.Link href="#models">Models</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
