import React from 'react';
import PlantSearchBar from './PlantSearchBar';
import PlantInformationCard from './PlantInformationCard';

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
            <Row>
                <Col><PlantInformationCard /></Col>
                <Col><PlantInformationCard /></Col>
                <Col><PlantInformationCard /></Col>
            </Row>
            <Row>
                <Col><PlantInformationCard /></Col>
                <Col><PlantInformationCard /></Col>
                <Col><PlantInformationCard /></Col>
            </Row>
            </Container>
            
        )
    }
}

export default PlantSearchContainer;