import React from 'react';

import {Form, Container, Row, Col, Button} from 'react-bootstrap';

class PlantSearchBar extends React.Component{
    render(){
        return(
            <Container>
            <Form>
            <Row className="mx-auto justify-content-center">
                <Col xs={8}>
                <Form.Control placeholder="Plant name" />
                </Col>
                <Col xs={2}>
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