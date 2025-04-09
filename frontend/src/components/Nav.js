import React, { useState } from 'react';
import '../styles/styles.css';
import logo from '../images/logo.png';

function NavBar(){
    const containerStyle = {
        fontFamily: 'Inter, sans-serif'
    };
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
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

            <div class="mobile-menu-bar">
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} style={containerStyle}>
                    <i className='fa fa-times closebtn' onClick={closeMenu}> </i> 

                    <a href="/service" className="navlink">SERVICES</a>
                    <a href="/about" className="navlink">ABOUT US</a>
                    <a href="/contact" className="navlink">CONTACT US</a>
                    <a href="/careers" className="navlink">CAREERS</a>

                </div>

                <button type='button' className='openbtn' onClick={toggleMenu}> &#9776; </button>
            </div>

        </div>
    )
}

export default NavBar;