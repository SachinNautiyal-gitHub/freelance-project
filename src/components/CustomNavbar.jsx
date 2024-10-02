// components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './styles/nabar.module.css'; 
import lotus from '../images/lotus (1).png'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FF9933' }} variant="dark">
      <Container  className={styles.con} >
        <Navbar.Brand href="#home" className={styles.logo}>
          <img src={lotus} alt="logo" className={styles.image}/>
          Neelam Dhyani Juyal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-5">
            <Nav.Link href="#home" className={styles.navitem}>Home</Nav.Link>
            <Nav.Link href="#about-us" className={styles.navitem}>About Us</Nav.Link>
            <Nav.Link href="#gallery" className={styles.navitem}>Gallery</Nav.Link>
            <Nav.Link href="#success-stories" className={styles.navitem}>Success Stories</Nav.Link>
            <Nav.Link href="#our-mission" className={styles.navitem}>Our Mission</Nav.Link>
            <Nav.Link href="#contact-us" className={styles.navitem}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
