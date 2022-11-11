import "../index.css"
import {gsap } from 'gsap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useRef, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Casourel = () => {

    let carouselImage = useRef(null);
    let carouselText = useRef(null);

    useEffect(()=> {
        gsap.fromTo(
            carouselImage.current,
            {
                opacity:0,
                duration: 1,
                scale: 1.6,
                EaseIn:'Expo'
            },{
                scale:1,
                opacity:.5,
                duration:2.5,
                EaseIn:'Expo'
            }),
            gsap.fromTo(
                carouselText.current,
                {
                    scale: .1,
                },{
                    scale:1.5,
                    duration: 1,
                }),
                gsap.fromTo(
                    carouselText.current,
                    {
                        scale:1.5,
                    },{
                        duration:1,
                        delay:1,
                        scale:1,
                    }
                )
    },[])
    return (
        <div className='Carousel-container'>
            <Carousel>
                <Carousel.Item interval={500000}>
                    <img ref={carouselImage} className="d-block w-100" src="https://images.pexels.com/photos/2669418/pexels-photo-2669418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"/>
                    <Carousel.Caption>
                        <h1 ref={carouselText}>
                            The World's Greatest Classic Rally
                        </h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/9843281/pexels-photo-9843281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/2437113/pexels-photo-2437113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide"/>
                   
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Casourel
