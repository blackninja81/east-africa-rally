import React from 'react'
import {Spring} from "react-spring";
import {Button} from 'react-bootstrap';
import AboutDivider from './AboutDivider';

const About = () => {
    return (
        <div className='About-main'>
                    <h1>ABOUT THE SAFARI CLASSIC RALLY</h1>
            <div className='About-container'>
                    <div className='about-image'/>
                    
                <div className='about-text'>
                    <p>First run in 2003, the legendary East Africa Safari Classic Rally is a nine-day rally covering up to 5,000km across the region. Safari Classic rekindles the spirit of the original Safari Rally, which put East Africa on the motorsport map and earned an unassailable reputation as the world's toughest rally</p>
                    <Button variant='primary'>Learn More</Button>
            <AboutDivider/>
                </div>
            </div>
        </div>
    )
}

export default About
