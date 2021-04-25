import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Redirect } from 'react-router';
import usePathname from "../../Hooks/usePathname"

import './CustomNav.css'

function CustomNav() {
    const currentPath=usePathname();
    console.log(currentPath)
    return (
        <Navbar className="c-custom-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#/">Movie - App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/" className={currentPath==="/"?"bg-secondary":""} >Home</Nav.Link>
                    <Nav.Link href="#actors" className={currentPath==="/actors"?"bg-secondary":""}>Actors</Nav.Link>
                    <Nav.Link href="#movies" active={true} className={currentPath==="/movies"?"bg-secondary":""}>Movies</Nav.Link>
                </Nav>                                               
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNav;