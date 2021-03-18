import React from 'react';
import './MainHeader.css';

import {Container, Row, Col} from 'react-bootstrap';

class MainHeader extends React.Component{
    render(){
        return(
            <Container>
            <Row>
            <Col className="my-auto">
                <p>Thriving plants begin with research</p>
                <p>Optimize your plant's growing environment by learning about the important factors that help them thrive</p>
            </Col>
            <Col><div className="mainheader--image">Picture Here</div></Col>
                
            </Row>       
            </Container>
        )    
    }
}

export default MainHeader;