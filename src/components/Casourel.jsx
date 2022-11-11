import "../index.css"
import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Casourel = () => {
    return (
        <div className='Carousel-container'>
            <Carousel>
                <Carousel.Item interval={50000}>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/2669418/pexels-photo-2669418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"/>
                    <Carousel.Caption>
                        <h1>
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
