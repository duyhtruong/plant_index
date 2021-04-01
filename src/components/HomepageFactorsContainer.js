import React from 'react';
import HomepageFactorsCard from './HomepageFactorsCard.js';

import {Container, CardDeck} from 'react-bootstrap';

class HomepageFactorsContainer extends React.Component{
    
    render(){
        let SunFactorHeader = 'Sunlight';
        let WaterFactorHeader = 'Water';
        let TemperatureFactorHeader = 'Temperature';

        let SunFactorParagraph = "Light is the most essential factor for indoor plant growth. The energy derived from photosynthesis, and plant growth and health, all depend on the amount of intercepted light. Indoor plants can be classified according to their light needs -- high, medium, or low light requirements.";

        let WaterFactorParagraph = "A common question home gardeners ask is, 'How often should I water my plants?' The plant itself will tell you. When its too dry, a plant wilts and turns gray-green; when too wet, it drops leaves or turns yellow.";

        let TemperatureFactorParagraph = "Excessively low or high temperatures may stop growth or cause a spindly appearance, foliage damage, leaf drop, or plant failure. ";

        return(
            <Container className="my-5">
                <h2>Plant Factors Container</h2>
                <CardDeck className="my-5">
                    <HomepageFactorsCard 
                    FactorCardHeader={SunFactorHeader}
                    FactorCardParagraph={SunFactorParagraph}
                    />
                    
                    <HomepageFactorsCard 
                    FactorCardHeader={WaterFactorHeader}
                    FactorCardParagraph={WaterFactorParagraph}
                    />
                    
                    <HomepageFactorsCard 
                    FactorCardHeader={TemperatureFactorHeader}
                    FactorCardParagraph={TemperatureFactorParagraph}
                    />
                </CardDeck>
            </Container>
        )
    }
}

export default HomepageFactorsContainer;