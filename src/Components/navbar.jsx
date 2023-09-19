import React, { useState } from 'react';



const Navbar=()=>{
    const [isopen , Setisopen] = useState(false);
    const togglemenu=()=>{
        Setisopen(!isopen);
    }
    return(
        
        <nav className={`navbar ${isopen ? 'active' : ''}`}>
            <button className="menu-icon" onClick={togglemenu}>
                <span></span>
                <span></span>
                <span></span>
                    </button>
                <div className="navbar-text">
                <div className="logo">
                    {/* <img src="/img/logo4.jpg" alt="logo" /> */}
                </div>
                <ul className={`nav_ul ${isopen ? 'active' : ''}`}>
                    <li>
                        <a href="#home">Home</a>
                        </li>
                    <li>
                        <a href="#cart">Menu</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                        </li>
                    <li>
                        <a href="#client">News</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#footer">Contact</a>       
                 </li>
                </ul>
            </div>
        </nav>
        
    )
}
export default Navbar;