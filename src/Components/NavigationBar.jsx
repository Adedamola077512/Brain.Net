import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import img17 from '../assets/img-17.png';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" variant="light" sticky="top" className=" scalloped" expanded={expanded}>
      <Container>

        {/* Brand Logo */}
        <Navbar.Brand data-aos="fade-right">
          <Link to="/" onClick={() => setExpanded(false)}>
            <img src={img17} alt="Logo" className="logo" />
          </Link>
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle className='toggle' aria-controls="navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />

        {/* Navbar Links and Button */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">

            {/* Navigation Links */}
            <Link to="/solution" className="home" onClick={() => setExpanded(false)}>SOLUTIONS</Link>
            <Link to="/developers" className="home" onClick={() => setExpanded(false)}>DEVLOPERS</Link>
            <Link to="/customers" className="home" onClick={() => setExpanded(false)}>CUSTOMERS</Link>
            <Link to="/blog" className="home" onClick={() => setExpanded(false)}>BLOG</Link>
          </Nav>

          {/* Sign-Up Button */}
          {/* <button className=''> 
          </button> */}
          <div className='btn-flex'>
            <Link to="/login" className="Nav-btn1" >LOGIN</Link>
            <Link to="/signup" className='Nav-btn' >SIGN UP</Link>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;
