import React from 'react';
import './MainHeader.css';
import header_image from '../assets/header-image.jpg';

import {Container, Row, Col} from 'react-bootstrap';

class MainHeader extends React.Component{
    render(){
        return(
            <Container className="mainheader--container__height">
            <Row className="my-auto">
            <Col className="my-auto">
                <h1>Thriving plants begin with research</h1>
                <p>Optimize your plant's growing environment by learning about the important factors that help them thrive</p>
            </Col>
            <Col><div><img className="mainheader--image" src={header_image} alt="plant header image"/></div></Col>
                
            </Row>       
            </Container>
        )    
    }
}

export default MainHeader;