import React from 'react'
import {Button} from 'react-bootstrap'
import GalleryDivider from './GalleryDivider'

const Gallery = () => {
    return (
        <div className='Gallery-main'>
            <div className='Gallery-container'>

                <div className='gallery-text'>
                    <h2>ABOUT THE SAFARI CLASSIC RALLY</h2>
                    <p>First run in 2003, the legendary East Africa Safari Classic Rally is a nine-day rally covering up to 5,000km across the region. Safari Classic rekindles the spirit of the original Safari Rally, which put East Africa on the motorsport map and earned an unassailable reputation as the world's toughest rally</p>
                    <Button variant='primary'>View Gallery</Button>
                </div>
                <div className='gallery-image'>
                    {/* <img src='http://eastafricansafarirally.com/images/background_bg.jpg'/> */}
                </div>
            </div>
            <GalleryDivider/>
        </div>
    )
}

export default Gallery
