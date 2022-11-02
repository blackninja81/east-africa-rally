import "../index.css"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Casourel = () => {
    return (
        <div className='Carousel-container'>
            <Carousel>
                <Carousel.Item interval={50000}>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/2669418/pexels-photo-2669418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"/>
                    <Carousel.Caption>
                        <h3>
                            The World's Greatest
                            Classic Rally
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src="https://rally-admin.eastafricansafarirally.com/uploads/large_Block_EASC_22_02_rk0052_500fa38c58.jpg" alt="Second slide"/>

                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src="https://rally-admin.eastafricansafarirally.com/uploads/large_Bamrah_CEASC_22_06_rk0161_c61046f7db.jpg" alt="Third slide"/>
                   
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Casourel
