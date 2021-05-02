import React from 'react';
import './header.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
function Header({ home, about, contact, buy}){
    return(
    <React.Fragment>
    <header className="nav-bar">
        <div className='logo-div'>
            <img src={logo} alt="logo"/>
        </div>
        <nav className='nav-div'>
            <li className='list'><Link to={home}> Home </Link> </li>
            <li className='list'><Link to={about}>About Us</Link></li>
            <li className='list'><Link to={contact}>Contact</Link></li>
            <li className='list-button'><Link className='nav-button'  to={buy}> Buy Now</Link></li>
        </nav>
    </header>
    </React.Fragment>
    )
}


export default Header;