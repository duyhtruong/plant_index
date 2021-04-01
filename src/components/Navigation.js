import React, {useState} from 'react';
import {Nav, Navbar, Button, Modal} from 'react-bootstrap';
import LoginModalContent from './LoginModalContent.js';

class Navigation extends React.Component {
    render() {

        function LoginModal(){ 
            const [show, setShow] = useState(false);
        
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
        
            return (
            <>
              <Button variant="primary" onClick={handleShow}>
                My Plants
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Log In / Register</Modal.Title>
                </Modal.Header>
                <Modal.Body><LoginModalContent /></Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Login
                  </Button>
                </Modal.Footer>
              </Modal>
              </>
          );
        
        }

        return (


            <div>
               
                <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home">Plant Index</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                            
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className="my-auto">Search Plants</Nav.Link>
                            <Nav.Link href="#deets" className="my-auto">Buy Plants</Nav.Link>
                            <Nav.Link ><LoginModal className="my-auto"/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
          
            </div>
        )
    }
}

export default Navigation;