import React from 'react';
import {Card} from 'react-bootstrap';
import plant_placeholder from '../assets/plant-placeholder.jpg';

class PlantInformationCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.PlantResults.map((singlePlantResult) => {
                    return (
                        <Card>
                            <Card.Img variant="top" src={singlePlantResult.image_url} />
                            <Card.Body>
                                <Card.Title>{singlePlantResult.common_name}</Card.Title>
                                <Card.Text>
                                    {singlePlantResult.year}
                    </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    )
                })}


            </div>
        );
    }
}

export default PlantInformationCard;