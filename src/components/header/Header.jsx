import React from 'react';
import './header.css';
import logo from '../images/logo.png'
function Header() {
    return(
    <React.Fragment>
    <header className="nav-bar">
        <div className='logo-div'>
            <img src={logo} alt="logo"/>
        </div>
        <nav className='nav-div'>
            <li className='list'><a href="#home">Home</a></li>
            <li className='list'><a href="#aboutUs">About Us</a></li>
            <li className='list'><a href="#footer">Contact</a></li>
            <li className='list-button'><a className='nav-button'  href="#cards"> Buy Now</a></li>
        </nav>
    </header>
    </React.Fragment>
    )
}


export default Header;