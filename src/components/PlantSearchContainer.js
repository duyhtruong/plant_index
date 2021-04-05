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
        fetch('https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=XFoRphEHvsUpto2Ut7jZwOud_IDEe8Kpq4NOIFviU78')
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        items: result.data
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
            <Row className="my-4">
                <PlantInformationCard PlantResults={this.state.items} />     
            </Row>
         
            </Container>
            
        )
    }
}

export default PlantSearchContainer;