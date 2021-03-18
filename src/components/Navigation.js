import React from 'react';

import {Nav, Navbar} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (


            <div>

                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Plant Index</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                            
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Search Plants</Nav.Link>
                            <Nav.Link href="#deets">Buy Plants</Nav.Link>
                            <Nav.Link href="#deets">My Plants</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
          
            </div>
        )
    }
}

export default Navigation;