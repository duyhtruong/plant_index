import React from 'react';
import Navigation from './Navigation';
import MainHeader from './MainHeader';

class MainContainer extends React.Component{
    render(){
        return(
            <Navigation />,
            <MainHeader />
        )
    }
}

export default MainContainer;