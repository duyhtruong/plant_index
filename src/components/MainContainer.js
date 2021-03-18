import React from 'react';
import Navigation from './Navigation';
import MainHeader from './MainHeader';

class MainContainer extends React.Component{
    render(){
        return(
            <div>
            <Navigation />
            <MainHeader />
            </div>
        )
    }
}

export default MainContainer;