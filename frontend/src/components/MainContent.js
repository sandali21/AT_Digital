import React, {useState} from 'react';
import '../styles/styles.css';
import NavBar from './Nav.js';
import Footer from './Footer.js';
import background from '../images/background.png';
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

    const [activeTab, setActiveTab] = useState(null);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName === activeTab ? null : tabName);
    };

    return(
        <div>
            <NavBar/>
            
            <div className='container'>
                <img src={background} alt='' className='background'/>

                <div className='content' style={containerStyle}>
                    We Crush Your Competitors, Goals, And Sales Records - Without The B.S. 
                    <br/>
                    <button className='btn1' style={containerStyle}> GET FREE CONSULTATION </button>
                </div>
            </div>
            <div className='app-body'>
            <Grid container>
                <Grid item xs = {1}>
                </Grid>
                <Grid item xs = {4}>
                    <img src={app} alt='' className='bodyimg'/>
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
                    <div className='app2'>
                        <div className='app' style={appStyle}> 
                            Digital Strategy Consulting
                        </div> <br/>
                        <div className='appdetail' style={containerStyle}>
                        Your digital strategy should complement the overall marketing strategy of the company. 
                        In online marketing, each component will never work in isolation and every business needs a different mix. 
                        We provide a clear concept and strategic overview to find the most efficient model for your business.
                        </div> <br/>
                        <button className='btn2' style={containerStyle}> LEARN MORE </button>
                    </div>
                </Grid>
                <Grid item xs = {1}>
                </Grid>
                <Grid item xs = {4}>
                    <img src={digital} alt='' className='bodyimg' id='bodyimg2'/>
                </Grid>
                <Grid item xs = {1}>
                </Grid>
            </Grid>
            </div>
            <div className='mobile-body'>
                <div className='sub-body'>
                    <img src={app} alt='' className='bodyimg'/>
                        <div className='app' style={appStyle}> 
                            Web & Mobile App Development
                        </div> <br/>
                        <div className='appdetail' style={containerStyle}>
                        Your web and mobile Apps are pieces of the puzzle to grow your business. 
                        We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential 
                        customers who interact with your business online.
                        </div> <br/>
                        <button className='btn2' style={containerStyle}> LEARN MORE </button>
                </div>
                <div className='sub-body'>
                    <img src={digital} alt='' className='bodyimg' id='bodyimg2'/>
                        <div className='app2' id='appdetail2'>
                            <div className='app' style={appStyle}> 
                                Digital Strategy Consulting
                            </div> <br/>
                            <div className='appdetail' style={containerStyle}>
                            Your digital strategy should complement the overall marketing strategy of the company. 
                            In online marketing, each component will never work in isolation and every business needs a different mix. 
                            We provide a clear concept and strategic overview to find the most efficient model for your business.
                            </div> <br/>
                            <button className='btn2' id = 'btn2' style={containerStyle}> LEARN MORE </button>
                        </div>
                    </div>
                    <div>
                </div>
            </div>

            <br/> <br/> 
            <center style={appStyle}>
                <h2 className='faq'> Frequently asked questions </h2>
                <div className='faq1'>
                    <div className='collapsedDetails'>
                    <div className={activeTab === 'collapse1' ? 'faqcollapse' : 'faq1'} id="faqcollapse">
                        <h4> What is Webflow and why is it the best website builder? <button className={activeTab === 'collapse1' ? 'active-tab' : ''} onClick={() => handleTabChange('collapse1')}>{activeTab === 'collapse1' ? <i className='fa fa-minus'></i> : <i className='fa fa-plus'></i>}</button> </h4>
                    </div>
                    </div>

                    {activeTab === 'collapse1' && (
                        <div className='faqexpand'>
                            <p> Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere. </p>
                        </div>
                    )}
                </div> <br/>

                <div className='faq2'>
                    <div className='collapsedDetails'>
                        <div className={activeTab === 'collapse2' ? 'faqcollapse' : 'faq1'} id="faqcollapse">
                            <h4> What is Webflow and why is it the best website builder? <button className={activeTab === 'collapse2' ? 'active-tab' : ''} onClick={() => handleTabChange('collapse2')}>{activeTab === 'collapse2' ? <i className='fa fa-minus'></i> : <i className='fa fa-plus'></i>}</button> </h4>
                        </div>
                    </div>

                    {activeTab === 'collapse2' && (
                        <div className='faqexpand'>
                            <p> Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere. </p>
                        </div>
                    )}
                </div> <br/>

                <div className='faq3'>
                    <div className='collapsedDetails'>
                        <div className={activeTab === 'collapse3' ? 'faqcollapse' : 'faq1'} id="faqcollapse">
                            <h4> What is Webflow and why is it the best website builder? <button className={activeTab === 'collapse3' ? 'active-tab' : ''} onClick={() => handleTabChange('collapse3')}>{activeTab === 'collapse3' ? <i className='fa fa-minus'></i> : <i className='fa fa-plus'></i>}</button> </h4>
                        </div>
                    </div>

                    {activeTab === 'collapse3' && (
                        <div className='faqexpand'>
                            <p> Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere. </p>
                        </div>
                    )}
                </div> <br/>
                
            </center>
            <br/> <br/>
            <Footer/> 
        </div>
    )
}

export default MainContent;