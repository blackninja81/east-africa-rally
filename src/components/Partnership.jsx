import React from 'react'
import {Button} from 'react-bootstrap'

const Partnership = () => {
    return (
        <div className='partnership-container'>
            <h1>PARTNERSHIP ORPOTUNITIES</h1>
            <p>Kindly view our sponsorship video and join the greatest Classic rally link</p>
            <div className='sponsors'>
                <div className='commercial'>
                    <h2>Commercial Sponsors</h2>
                    <img src='https://1000logos.net/wp-content/uploads/2020/09/Telegram-logo-thumb.png' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                    <img src='https://1000logos.net/wp-content/uploads/2018/02/Ferrari-logo-tumb.jpg' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                    <img src='https://1000logos.net/wp-content/uploads/2018/09/Honda-logo-500x281.jpg' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                    <img src='https://1000logos.net/wp-content/uploads/2020/03/Pontiac-logo-tumb.jpg' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                    <img src='https://1000logos.net/wp-content/uploads/2021/10/MG-logo-tumb.jpg' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                    <img src='https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-tumb.jpg' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                </div>
                <div className='csr'>
                    <h2>Partnership CSR</h2>
                    <img src='https://1000logos.net/wp-content/uploads/2021/10/MG-logo-tumb.jpg' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                    <img src='https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-tumb.jpg' width="200" height="120" className="d-inline-block align-top" alt='sponsor-name'/>
                </div>
            </div>
            <Button>Learn More</Button>
        </div>
    )
}

export default Partnership
