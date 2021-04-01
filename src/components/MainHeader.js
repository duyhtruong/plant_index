import React from 'react';
import './MainHeader.css';
import header_image from '../assets/header-image.jpg';

import {Container, Row, Col} from 'react-bootstrap';

class MainHeader extends React.Component{
    render(){
        return(
            <Container >
            <Row className="my-auto mainheader--container__height">
            <Col xs={12} md={6} className="my-auto">
                <h1 className="display-1">Thriving plants begin with research</h1>
                <p>Optimize your plant's growing environment by learning about the important factors that help them thrive</p>
            </Col>
            <Col xs={12} md={6} className="mainheader--col-height__100"><img className="mainheader--image" src={header_image} alt="plant header image"/></Col>
                
            </Row>       
            </Container>
        )    
    }
}

export default MainHeader;