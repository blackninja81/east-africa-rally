import {gsap } from 'gsap';
import {Button} from 'react-bootstrap';
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

    useEffect(() => {

        gsap.fromTo(
            aboutTitle.current,
             { 
                duration: 1,
               opacity:0
             },
             {
             duration: 3,
             delay:.2,
             opacity:1,
             ScrollTrigger:{ 
             trigger:aboutLetters
            }
            })

        gsap.fromTo(aboutImage.current,
             {
               ease:'Expo.easeOut',
               duration:1,
               x: '-100%'
            },{
               duration: 1.5,
               x: '0%'
            })

        gsap.fromTo(aboutText.current, {x: '100%'},{ duration: 1.5,x: '0%'})

        gsap.fromTo(aboutLetters.current,
             {
              delay: 5,
              ease:'slow',
              duration: 5,
              y: '-100%',
              opacity:0
              },{
               ease: "bounce.out",
               duration: 2,
               y: '0%',
               opacity:1
                }),
                gsap.fromTo(
                    aboutButton.current,{
                        y:'2000%',
                    },
                    {
                        y:'0%',
                        delay:1,
                        duration:3.5,
                        ease: "elastic.out(.1, 1)",
                    }
                )
    }, [])
    return (
        <div className='About-main'>
            <h1 ref={aboutTitle}>ABOUT THE SAFARI CLASSIC RALLY</h1>
            <div className='About-container'>
                <div className='about-image'
                    ref={aboutImage}
                />

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
