import React from 'react';
import '../styles/styles.css';
import logo from '../images/logo.png';

function NavBar(){
    const containerStyle = {
        fontFamily: 'Inter, sans-serif'
    }; 
    return(
        <div className='navbar'>
            <img src={logo} alt='' className='logo1'/>
            <div className='subnav' style={containerStyle}>
                <a href="/service" className='navlink'>SERVICES</a>
                <a href="/about" className='navlink'>ABOUT US</a>
                <a href="/contact" className='navlink'>CONTACT US</a>
                <a href="/careers" className='navlink'>CAREERS</a>
            </div>

        </div>
    )
}

export default NavBar;