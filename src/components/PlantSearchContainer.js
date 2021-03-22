import React from 'react';
import PlantSearchBar from './PlantSearchBar';
import PlantInformationCard from './PlantInformationCard';

import {Container, Col, Row, CardDeck} from 'react-bootstrap';

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
            <CardDeck className="my-4">
                <PlantInformationCard />
                <PlantInformationCard />
                <PlantInformationCard />
            </CardDeck>
            <CardDeck>
                <PlantInformationCard />
                <PlantInformationCard />
                <PlantInformationCard />
            </CardDeck>
            </Container>
            
        )
    }
}

export default PlantSearchContainer;