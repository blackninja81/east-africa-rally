import '../index.css'
import {gsap } from 'gsap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {React, useRef, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainNavbar = () => {

    let navBar = useRef(null);
    let navLink = useRef(null);

    useEffect(()=>{
        gsap.fromTo(
            navBar.current,{
                y:'-100%',
            },{
                y:'0%',
                duration: 1.5,
            }
        )
        // gsap.fromTo(
        //     navLink.current,{
        //         x:'-100%',
        //     },{
        //         x:'0%',
        //         duration: 1.5,
        //     }
        // )
    }
        ,[])

    return (
        <div className='navbar-container'>
            <Navbar className='text-warning' fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" ref={navBar}>
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img src='http://eastafricansafarirally.com/logo.png' width="150" height="70" className="d-inline-block align-top" alt="logo"/> */}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navclass" ref={navLink}>
                            
                            <Nav.Link href="#features">HOME</Nav.Link>
                            
                            <NavDropdown className='navDropDown' title="ABOUT" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    HISTORY
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.2">
                                    TEAM MEMBERS
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.3">
                                    PAST WINNERS
                                </NavDropdown.Item>

                            </NavDropdown>
                            
                            <Nav.Link href="#pricing">ENTRANTS</Nav.Link>
                            
                            <NavDropdown className='navDropDown' title="GALLERY" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                  GALLERY
                                  </NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link href="#pricing">NEWS</Nav.Link>
                            
                            <NavDropdown className='navDropDown' title="RALLY INFORMATION" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                  GALLERY
                                  </NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link href="#pricing">CONTACT</Nav.Link>
                            
                            <Nav.Link href="#pricing">SHOP</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MainNavbar
