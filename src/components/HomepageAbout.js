import React from 'react';
import './HomepageAbout.css';

import {Container, Row, Col} from 'react-bootstrap';

class HomepageAbout extends React.Component{
    render(){
        return(
            <Container>
                <Row className="homepageabout--container__height">
                <Col className="my-auto">Plant Index is a resource for all plant ethusiasts. Not all plants are created equal. Create 
            an optimized care plan for each of your plants by learning about it's specific needs. Search the 
            database for your plant. Create an account to add plants to your favorites list to easily keep track of 
            the important plants in your life.</Col></Row>
            </Container>
        )    
    }
}

export default HomepageAbout;