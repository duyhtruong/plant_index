import React from 'react';
import PlantSearchBar from './PlantSearchBar';
import PlantInformationCard from './PlantInformationCard';

import {Container, Col, Row, CardDeck} from 'react-bootstrap';

class PlantSearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items: []
        };
    }

    componentDidMount(){
        fetch()
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.ssetState({
                        items: result.items
                    });
                }
                )
                .catch(console.log)
    }
    
    render(){
        return(
            <Container>
            <Row className="justify-content-center">
                <Col>
                <h2>Plant Search Container</h2>
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