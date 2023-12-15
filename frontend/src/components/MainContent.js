import React from 'react';
import '../styles/styles.css';
import NavBar from './Nav.js';
import Footer from './Footer.js';
import hero from '../images/hero.png';
import Grid from '@mui/material/Grid';
import app from '../images/app.png';
import digital from '../images/consult.png';

function MainContent(){
    const containerStyle = {
        fontFamily: 'Inter, sans-serif'
    }; 

    const appStyle = {
        fontFamily: 'Poppins, sans-serif'
    }; 

    return(
        <div>
            <NavBar/>
            
            <div className='container'>
                <img src={hero} alt='' className='hero'/>

                <div className='content' style={containerStyle}>
                    We Crush Your <br/> Competitors, Goals, And <br/> Sales Records - Without <br/> The B.S. 
                    <br/>
                    <button className='btn1' style={containerStyle}> GET FREE CONSULTATION </button>
                </div>
            </div>
            <br/> <br/>
            <Grid container>
                <Grid item xs = {1}>
                </Grid>
                <Grid item xs = {4}>
                    <img src={app} alt=''/>
                </Grid>
                <Grid item xs = {1}>
                </Grid>
                <Grid item xs = {5}>
                    <div className='app' style={appStyle}> 
                        Web & Mobile App Development
                    </div> <br/>
                    <div className='appdetail' style={containerStyle}>
                    Your web and mobile Apps are pieces of the puzzle to grow your business. 
                    We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential 
                    customers who interact with your business online.
                    </div> <br/>
                    <button className='btn2' style={containerStyle}> LEARN MORE </button>
                </Grid>
                <Grid item xs = {1}>
                </Grid>
            </Grid>
            <br/> <br/>
            <Grid container>
                <Grid item xs = {1}>
                </Grid>
                <Grid item xs = {5}>
                    <div className='app' style={appStyle}> 
                        Digital Strategy Consulting
                    </div> <br/>
                    <div className='appdetail' style={containerStyle}>
                    Your digital strategy should complement the overall marketing strategy of the company. 
                    In online marketing, each component will never work in isolation and every business needs a different mix. 
                    We provide a clear concept and strategic overview to find the most efficient model for your business.
                    </div> <br/>
                    <button className='btn2' style={containerStyle}> LEARN MORE </button>
                </Grid>
                <Grid item xs = {1}>
                </Grid>
                <Grid item xs = {4}>
                    <img src={digital} alt=''/>
                </Grid>
                <Grid item xs = {1}>
                </Grid>
            </Grid>
            <br/> <br/> <br/> <br/>
            <Footer/> 
        </div>
    )
}

export default MainContent;