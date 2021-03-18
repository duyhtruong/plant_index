import React from 'react';

import {Form, Container, Row, Col, Button} from 'react-bootstrap';

class PlantSearchBar extends React.Component{
    render(){
        return(
            <Container>
            <Form>
            <Row>
                <Col>
                <Form.Control placeholder="Plant name" />
                </Col>
                <Col>
                <Button variant="primary" type="submit">
                    Search
                </Button>
                </Col>
            </Row>
            </Form>
            </Container>
        )
    }
}

export default PlantSearchBar