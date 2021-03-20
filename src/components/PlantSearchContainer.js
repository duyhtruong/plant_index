import React from 'react';
import PlantSearchBar from './PlantSearchBar';

import {Container, Col, Row} from 'react-bootstrap';

class PlantSearchContainer extends React.Component{
    render(){
        return(
            <Container>
            <Row>
                <Col xs={12}>
                <div className="mx-auto">PlantSearchContainer</div>
                <PlantSearchBar />
                </Col>
            </Row>
                
            </Container>
            
        )
    }
}

export default PlantSearchContainer;