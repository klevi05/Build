import React, { Component } from 'react';
import './buy.css';
import gift from '../images/gift.png';
import product from '../images/bg.jpg';
import Header from '../header/Header';
export default class Buy extends Component{

    render(){
    return(
        <React.Fragment>
            <div className='box'>
                <Header home='/' about='/about' contact='/contact' buy='/buy'/>
                <div className='gift-box'>
                    <div className='gift-box-text'>
                        <div className='suprize-box-title'>
                            <h1>Suprize box, the perfect gift for someone who loves sea and nature</h1>
                        </div>
                        <div className='suprize-box-description'>
                            <div className='suprize-image-area'>
                                <img src={product} alt="Just a random prod"/>
                            </div>
                            <div className='suprize-text-area'>
                                <p>This is a box which has inside natural sea elements.It will come in a beautiful package with the marvelous smell of the sea inside a small box. Everything inside is 100% naturale, even the box itself is all 100% recyclable. Inside the box you will receive 500 grams of beautiful rocks each one selected to be different from the other, a package of sea sand which will give you the sensation of being at the sea side and as a gift from us is included a small package of shells with many different shapes and forms.</p>
                                <p className="pricing"> Price : 89.99 $ </p>
                                <button className='suprize-box-button'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='gift-box-image'>
                        <img src={gift} alt="The perfect gift"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )}
}
