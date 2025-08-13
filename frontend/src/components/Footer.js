import React from 'react';
import '../styles/styles.css';
import logo from '../images/logo.png';

function Footer(){
    const footerStyle = {
        fontFamily: 'Lato, sans-serif'
    };

    const techStyle = {
        fontFamily: 'Inter, sans-serif'
    }

    return(
        <div className='footer'>
            <div className='footerbody'>
                <div classname='companyabout'>
                    <img src={logo} alt='' className='logo2'/>

                    <div className='about' style={footerStyle}>
                        Your goal is our target. Not anything in between. We use 
                        online marketing platforms and tools to achieve 
                        single objective - your business results.
                    </div>
                </div>
                <div className='footerflex'>
                <div className='technologydet'>
                    <div className='title' style={techStyle}>
                        Our Technologies
                    </div>
                    <div className='technologies' style={techStyle}>
                        <ul>
                            <li> ReactJS </li>
                            <li> Gatsby </li>
                            <li> NextJS </li>
                            <li> NodeJS </li>
                        </ul>
                    </div>
                </div>
                <div className='servicedet'>
                    <div className='title'>
                        Our Services
                    </div>
                    <div className='service' style={techStyle}>
                        <ul>
                            <li> Social media Marketing </li>
                            <li> Web & Mobile App Development </li>
                            <li> Data & Analytics </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            
            <center>
                <hr/>
                <div className='policy'style={techStyle}>
                    <span> Privacy Policy </span> | <span> Terms & Conditions </span> 
                </div>
            </center>
        </div>
    )
}

export default Footer;