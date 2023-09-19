import React from 'react'
import Navbar from './navbar';

const Header = () => {
  return (
    <div className='banner' id='home'>
        <Navbar/>
        <div className="banner-content">
            <div className='container'>
                <div className="banner-text">
                <h3>Delivery</h3>
                <h1>Burger Delicious</h1>
                <p>Our juicy burgers are always a winner. Satisfaction guaranteed. Get the real taste of burgers from us. </p>
           <div className="banner-btn"><a href="#cart" className='btn btn-smart'>DELVERY NOW</a></div>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Header;