import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png'
import Search from '../assets/vector5.svg'
import styles from './Navbar.module.css'
import  './navbar.css'
import classNames from 'classnames';

function NavbarTop() {
  return (
    <Navbar expand="lg" >
      <Container fluid className={styles.nav}>
        <Navbar.Brand href="#">
          <img src={Logo} className={styles.logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title={<span className={styles.navItemHover}>Home</span>} id="navbarScrollingDropdown" className="me-5">
              <NavDropdown.Item href="#action4" className={styles.navItem}>
                Home 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.navItem}>
                Home 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.navItem}>
                Home 3
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className={styles.navItemHover}>Pages</span>} id="navbarScrollingDropdown" className="me-5"   >
              <NavDropdown.Item href="#action4">
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Instructor
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Events
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className={styles.navItemHover}>Courses</span>} id="navbarScrollingDropdown" className="me-5">
              <NavDropdown.Item href="#action4">
                Course
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Course Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Course List
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Course Sidebar
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className={styles.navItemHover}>Blog</span>} id="navbarScrollingDropdown"className="me-5">
              <NavDropdown.Item href="#action4">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Blog Single
              </NavDropdown.Item>
            </NavDropdown>
           
            <NavDropdown.Item href="#action/3.4" className={classNames(styles.navItemHover, 'me-4' ,'mt-2')}>
                Contact
              </NavDropdown.Item>
           
            
          </Nav>
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search Course"
              className={classNames("me-2", styles.search)}
              aria-label="Search"
            />
            <img src={Search}className={styles.searchIcon} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop
