import React from 'react';
import './home.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
     <React.Fragment>
       <Header home="#home" about='/about' contact='/contact'  buy='/buy' />
        <div id='home' className='main-body'>
         <div className='main-content'>
           <p className='context'>All the sea lover's can have now a peace of sea with us!</p>
           <p className='subText'>Free shipping world wide!</p>
           <Link className='button' to='/buy'> Buy now </Link>
         </div> 
       </div>
       </React.Fragment>
    )
};