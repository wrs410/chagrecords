import React from 'react';
import './Mainframe.css'

import poster_recent from '../assets/posters/poster_021222.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class Mainframe extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>club chag</h1>
                <img className = "recentPoster" src = {poster_recent} alt = "recent poster" />
            </div>
        )
    }
}

export default Mainframe;