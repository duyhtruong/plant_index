import React from 'react';
import {Card} from 'react-bootstrap';

class HomepageFactorsCard extends React.Component {
    render() {
        return (
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header>{this.props.FactorCardHeader}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.FactorCardHeader}</Card.Title>
                    <Card.Text>
                        {this.props.FactorCardParagraph}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HomepageFactorsCard;