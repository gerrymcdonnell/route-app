import React, { Component } from 'react';
import Navbar from './navbar';

class ShowNav extends Component {
    state = {
        totalCounters: 90
    }
    render() {
        return (

            <Navbar totalCounters={99}>
                Passing var to component
            </Navbar>



        );
    }
}

export default ShowNav;