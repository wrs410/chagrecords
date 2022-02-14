import React from 'react';
import './Wrapper.css'
import Mainframe from './Mainframe.js'
import Sidebar from './Sidebar.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <main id = "mainGrid">
            <Sidebar />
            <Mainframe />
          </main>
        )
    }
}

export default Wrapper;