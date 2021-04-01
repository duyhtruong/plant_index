import React, {useState} from 'react';
import {Nav, Navbar, Button, Modal} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {

        function LoginModal(){ 
            const [show, setShow] = useState(false);
        
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
        
            return (
            <>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              </>
          );
        
        }

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
                            <Nav.Link ><LoginModal/></Nav.Link>
                            <Nav.Link href="#deets">My Plants</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
          
            </div>
        )
    }
}

export default Navigation;