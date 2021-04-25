import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Redirect } from 'react-router';
import usePathname from "../../Hooks/usePathname"

import './CustomNav.css'

function CustomNav({link}) {
    const currentPath=usePathname();
    console.log(currentPath)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/" className={currentPath==="/"?"bg-primary":""} >Home</Nav.Link>
                    <Nav.Link href="#actors" active={true} className={currentPath==="/actors"?"bg-primary":""}>Actors</Nav.Link>
                    <Nav.Link href="#movies"active={true} className={currentPath==="/movies"?"bg-primary":""}>Movies</Nav.Link>
                </Nav>                                               
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNav;