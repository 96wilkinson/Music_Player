// components/Navbar.js

import React, { useState } from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <Navbar bg="dark" variant="dark" expand="md" className='main-nav'>
            <Link id='brand' className='mr-auto' to="/home">home</Link>
            <Link className='nav-item' to="/about">about</Link>
        </Navbar>
    );
};

export default Navbar;