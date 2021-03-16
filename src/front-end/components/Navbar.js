import React from 'react';
import Nav from 'react-bootstrap/Nav'

const header = () => {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/browseSongs">Browse</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default header