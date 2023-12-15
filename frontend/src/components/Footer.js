import React from 'react';
import '../styles/styles.css';
import logo from '../images/logo.png';
import Grid from '@mui/material/Grid';

function Footer(){
    const footerStyle = {
        fontFamily: 'Lato, sans-serif'
    };

    const techStyle = {
        fontFamily: 'Inter, sans-serif'
    }

    return(
        <div className='footer'>
            <Grid container>
                <Grid item xs={5}>
                <img src={logo} alt='' className='logo2'/>

                <div className='about' style={footerStyle}>
                    Your goal is our target. Not anything in between. We use <br/> 
                    online marketing platforms and tools to achieve <br/>
                    single objective - your business results.
                </div>
                </Grid>
                <Grid item xs={1.75}>
                    
                </Grid>
                <Grid item xs={2}>
                    <div className='title' style={techStyle}>
                        Our Technologies
                    </div>
                    <div className='technologies' style={techStyle}>
                        <ul>
                            <li> ReactJS </li>
                            <li> Gatsby </li>
                            <li> NextJS </li>
                            <li> NodeJS </li>
                            <li> GraphQL </li>
                            <li> Laravel </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={0.5}>
                    
                </Grid>
                <Grid item xs={2}>
                    <div className='title'>
                        Our Services
                    </div>
                    <div className='service' style={techStyle}>
                        <ul>
                            <li> Social media Marketing </li>
                            <li> Web & Mobile App Development </li>
                            <li> Data & Analytics </li>
                            <li> Google Marketing solutions </li>
                            <li> Search Engine Optimization </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    
                </Grid>

            </Grid>
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