import React from 'react';
import './information.css';
import aobutImage from '../images/about.jpg';

export default function Information() {
    return(
    <React.Fragment>
        <div id='aboutUs' className='information-div'>
            <div className='about'>
                <div className='informativ-text'>
                <p>Thank you for visiting our website!</p>
                <p>We are a new family small business called “Aquatary”. We created this business to ship worldwide natural sea products for everyone to have in their home. We compose a few elements in a small box which in the moment you open it up will release all the sea aromes that everyone loves. Everything is created with natural elements, even the box itself is recyclable. The boxes will be in three sizes: small, medium and large. Our products are perfect as a present for a birthday or for someone that loves nature and the sea.</p> 
                </div>
                <div className='about-image'>
                    <img className='rocks' src={aobutImage} alt="aboutImage"/>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}