import "../index.css";
import { gsap } from "gsap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { React, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const MainNavbar = () => {
  let navBar = useRef(null);
  let navLink = useRef(null);

  return (
    <div className="navbar-container">
      <Navbar
        className="text-warning"
        fixed="top"
        sticky="true"
        collapseOnSelect
        expand="lg"
        variant="light"
        ref={navBar}
      >
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src='http://eastafricansafarirally.com/logo.png' width="150" height="70" className="d-inline-block align-top" alt="logo"/> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navclass" ref={navLink}>
              <Nav.Link href="#features">Home</Nav.Link>

              <NavDropdown
                className="navDropDown"
                title="About"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="navDropDownItem" href="#action/3.1">History</NavDropdown.Item>

                <NavDropdown.Item className="navDropDownItem" href="#action/3.2">
                  Team Members
                </NavDropdown.Item>

                <NavDropdown.Item className="navDropDownItem" href="#action/3.3">
                  Past Winners
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing">Entrants</Nav.Link>

              <NavDropdown
                className="navDropDown"
                title="Gallery"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="navDropDownItem" href="#action/3.1">Gallery</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing">News</Nav.Link>

              <NavDropdown
                className="navDropDown"
                title="Rally Information"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="navDropDownItem" href="#action/3.1">Documents</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing">Contact</Nav.Link>

              <Nav.Link href="#pricing">Shop</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
