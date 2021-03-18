import React from 'react';
import Navigation from './Navigation';
import MainHeader from './MainHeader';
import HomepageAbout from './HomepageAbout';
import PlantSearchContainer from './PlantSearchContainer';
import HomepageFactorsContainer from './HomepageFactorsContainer';
import './MainContainer.css';

class MainContainer extends React.Component{
    render(){
        return(
            <div>
            <Navigation />
            <MainHeader />
            <HomepageAbout />
            <PlantSearchContainer />
            <HomepageFactorsContainer />
            </div>
        )
    }
}

export default MainContainer;