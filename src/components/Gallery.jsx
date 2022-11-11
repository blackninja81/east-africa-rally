import React from 'react'
import {Button} from 'react-bootstrap'
import GalleryDivider from './GalleryDivider'

const Gallery = () => {

    return (
        <div className='Gallery-main'>
            <h1>Gallery</h1>
            <div className='Gallery-container'>
                <div className='gallery-image'>
                    <img className='g-image' src='https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <img className='g-image' src='https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                </div>
            <Button>View More In The Gallery</Button>
            </div>
            <GalleryDivider/>
        </div>
    )
}

export default Gallery
