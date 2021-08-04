import React from 'react';
import {Nav} from "react-bootstrap";

const Navbar = () => {
    return (
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link href="/registration_step_1">Registration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;