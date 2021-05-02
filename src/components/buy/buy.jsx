import React from 'react';
import './buy.css';
import card from '../images/cards.png';
import Header from '../header/Header'
import { useHistory } from 'react-router';

export default function Buy(){
    const histori = useHistory();
    function handleSmallBox(){
        histori.push('/buy/608aec386ff8cc118062b1e2')
    };
    function handleMediumBox(){
        histori.push('/buy/608aedf76ff8cc118062b1e3')
    };
    function handleBigBox(){
        histori.push('/buy/608af715e72f242067b8741a')
    };
    
    return(
        <React.Fragment>
            <div className='box'>
                <Header home='/' about='/about' contact='/contact' buy='/buy'/>
            <div id='cards'>
                <div className='cards'>
                    <img className='card' src={card} alt="card"/>
                    <img className='card2' src={card} alt="card"/>
                </div>
            <div className='boxes'>
                <div className='small-box'>
                <div className='box-contect'>
                      <h1 className='box-title'>Small box</h1>
                      <p className='box-description'>This box has inside 200gr of rocs from the sea and some other suprise elements inside from us as a gift!</p>
                      <button className='box-button' onClick={handleSmallBox}>Buy Now</button>
                    </div>
                </div>
                <div className='medium-box'>
                <div className='box-contect'>
                      <h1 className='box-title-m'>Medium box</h1>
                      <p className='box-description-m'>This box has inside 400gr of rocs from the sea and some other suprise elements inside from us as a gift!</p>
                      <br/>
                      <br/>
                      <button className='box-button-m' onClick={handleMediumBox}>Buy Now</button>
                    </div>
                </div>
                <div className='big-box'>
                    <div className='box-contect'>
                      <h1 className='box-title'>Large box</h1>
                      <p className='box-description'>This box has inside 600gr of rocs from the sea and some other suprise elements inside from us as a gift!</p>
                      <button className='box-button' onClick={handleBigBox}>Buy Now</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </React.Fragment>
    )
}
