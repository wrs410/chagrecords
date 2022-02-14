import React from 'react';
import './Sidebar.css'
import logo from '../assets/logos/circlesolid.png'
import squig from '../assets/logos/squig.png'

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
                <nav>
                    
                    <a>home</a>
    
                    <a>archive</a>
                    
                    <a>contact</a>

                    {/* <img src = {squig} alt = "squiggly line" /> */}
                </nav>
            </section>
        )
    }
}
 
export default Sidebar;