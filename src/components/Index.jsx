import React from 'react';
import News from './News';
import About from './About';
import Videos from './Videos';
import Footer from './Footer';
import Gallery from './Gallery';
import MainNavbar from './Navbar';
import Casourel from './Casourel';
import Partnership from './Partnership';

const Index = () => {
    return (
        <div>
            <div><MainNavbar/></div>
            <div><Casourel/></div>
            <div><About/></div>
            <div><News/></div>
            <div><Gallery/></div>
            <div><Partnership/></div>
            <div><Videos/></div>
            <div><Footer/></div>
        </div>

    )
}

export default Index
