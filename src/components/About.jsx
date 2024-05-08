import {gsap } from 'gsap';
import {Button} from 'react-bootstrap';
import AboutImage from '../pictures/about-car.png'
import AboutDivider from './AboutDivider';
import {React, useRef, useEffect} from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const About = () => {

    let aboutTitle = useRef(null);
    let aboutImage = useRef(null);
    let aboutText = useRef(null);
    let aboutLetters = useRef(null);
    let aboutButton = useRef(null);

    return (
        <div className='About-main'>
            <h1 ref={aboutTitle}>ABOUT THE SAFARI CLASSIC RALLY</h1>
            <div className='About-container'>
                <div className='about-images'>
                    <img src={AboutImage} alt='rally car'/>
                    </div>

                <div className='about-text'
                    ref={aboutText}>
                    <p ref={aboutLetters}>
                        First run in 2003, the legendary East Africa Safari Classic Rally is a nine-day rally covering up to 5,000km across the region. Safari Classic rekindles the spirit of the original Safari Rally, which put East Africa on the motorsport map and earned an unassailable reputation as the world's toughest rally</p>
                    <Button ref={aboutButton} variant='outline-dark'>Learn More</Button>
                    {/* <AboutDivider/> */}
                </div>
            </div>
        </div>
    )
}

export default About
