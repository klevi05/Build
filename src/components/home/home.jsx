import React from 'react';
import './home.css';
import Header from '../header/Header';

export default function Home() {
    return(
     <React.Fragment>
       <Header home="#home" about='/about' contact='/contact'  buy='/buy' />
        <div id='home' className='main-body'>
         <div className='main-content'>
           <p className='context'>All the sea lover's can have now a peace of sea with us!</p>
           <p className='subText'>Free shipping world wide!</p>
           <a className='button' href='#cards'> Buy now </a>
         </div> 
       </div>
       </React.Fragment>
    )
};