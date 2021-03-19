import React from 'react';
import Nav from 'react-bootstrap/Nav'

const header = () => {
    return (
        <Nav fill variant="tabs" >
            <Nav.Item>
                <Nav.Link href="/home" id="homeNav">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about" id="aboutNav">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/browseSongs" id="browseNav">Browse</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default header