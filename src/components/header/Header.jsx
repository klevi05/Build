import React from 'react';
import './header.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
function Header({ home, about, footer}){
    return(
    <React.Fragment>
    <header className="nav-bar">
        <div className='logo-div'>
            <img src={logo} alt="logo"/>
        </div>
        <nav className='nav-div'>
            <li className='list'><Link to={home}> Home </Link> </li>
            <li className='list'><Link to={about}>About Us</Link></li>
            <li className='list'><Link to={footer}>Contact</Link></li>
            <li className='list-button'><a className='nav-button'  href="#cards"> Buy Now</a></li>
        </nav>
    </header>
    </React.Fragment>
    )
}


export default Header;