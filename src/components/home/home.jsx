import React from 'react';
import './home.css';
import Information from '../informaton/Information';
import Buy from "../buy/buy";
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Home() {
    return(
     <React.Fragment>
       <Header />
        <div id='home' className='main-body'>
         <div className='main-content'>
           <p className='context'>All the sea lover's can have now a peace of sea with us!</p>
           <p className='subText'>Free shipping world wide!</p>
           <a className='button' href='#cards'> Buy now </a>
         </div> 
       </div>
       <Information />
       <Buy />
       <Footer />
       </React.Fragment>
    )
};