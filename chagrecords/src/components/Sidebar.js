import React from 'react';
import './Sidebar.css'
import logo from '../assets/logos/circlesolid.png'
import squig from '../assets/logos/squig.png'
import bc from '../assets/icons/bc.svg'
import ig from '../assets/icons/ig.svg'
import tw from '../assets/icons/tw.svg'
import tch from '../assets/icons/tch.svg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section id = "sideDesktop">
                <div className = "logoContainer">
                    <img src = {logo} alt = "chag records circle logo" />
                </div>
                <nav className = "linksDesktop">
                    <a>home</a>
                    <a>archive</a>  
                    <a>contact</a>
                    {/* <img src = {squig} alt = "squiggly line" /> */}
                </nav>
                <nav className = "socialsDesktop">
                    <a href = "#"><img className = "socialSvg" src = {tch} alt = "icon" /></a>
                    <a href = "#"><img className = "socialSvg" src = {tw} alt = "icon" /></a>
                    <a href = "#"><img className = "socialSvg" src = {ig} alt = "icon" /></a>
                    <a href = "#"><img className = "socialSvg" src = {bc} alt = "icon" /></a>
                </nav>
            </section>
        )
    }
}
 
export default Sidebar;