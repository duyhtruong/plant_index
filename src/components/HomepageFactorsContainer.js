import React from 'react';
import HomepageFactorsCard from './HomepageFactorsCard.js';

import {Container, CardDeck} from 'react-bootstrap';

class HomepageFactorsContainer extends React.Component{
    render(){
        return(
            <Container className="my-5">
                <h2>Plant Factors Container</h2>
                <CardDeck className="my-5">
                    <HomepageFactorsCard />
                    <HomepageFactorsCard />
                    <HomepageFactorsCard />
                </CardDeck>
            </Container>
        )
    }
}

export default HomepageFactorsContainer;