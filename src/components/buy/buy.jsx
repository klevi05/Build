import React, { Component } from 'react';
import './buy.css';
import gift from '../images/gift.png';
import shell from '../images/shell.png';
import product from '../images/bg.jpg';
import backgound from '../images/background.jpg';
import Header from '../header/Header';
export default class Buy extends Component{
    constructor(props){
        super(props)
        this.state={
            grams: 200,
            shellprice: 2999,
            rocksprice: 2499
        }
    }
    handleIncrement = () =>{
        let newPrice = 0;
        let newGram = 0;
        if(this.state.grams < 1000){
            newPrice = this.state.shellprice + 500
            newGram = this.state.grams + 50
        }else if(this.state.grams === 1000){
            newGram = this.state.grams + 0
            newPrice = this.state.shellprice + 0
        }
        this.setState({
            grams: newGram,
            shellprice: newPrice
        })
    };
    handleDecrement = () =>{
        let newPrice = 0;
        let newGram = 0;
        if(this.state.grams > 200){
            newPrice = this.state.shellprice - 500
            newGram = this.state.grams - 50
        }else if(this.state.grams === 200){
            newGram = this.state.grams - 0
            newPrice = this.state.shellprice - 0
        }
        this.setState({
            grams: newGram,
            shellprice: newPrice
        })
    };
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
                <div className='shell-box'>
                    <div className='shell-box-devider'>
                        <div className='shell-image'>
                            <img src={shell} alt="The shell"/>
                        </div>
                        <div className='shell-text'>
                        <div className='shell-box-title'>
                            <h1>We offer you to buy diferent types of shells,perfect for aquariums and for decoration</h1>
                        </div>
                        <div className='shell-box-description'>
                            <div className='shell-image-area'>
                                <img src={backgound} alt="Just a random prod"/>
                            </div>
                            <div className='shell-text-area'>
                                <p>This is a box which has inside natural sea elements.It will come in a beautiful package with the marvelous smell of the sea inside a small box. Everything inside is 100% naturale, even the box itself is all 100% recyclable. Inside the box you will receive 500 grams of beautiful rocks each one selected to be different from the other, a package of sea sand which will give you the sensation of being at the sea side and as a gift from us is included a small package of shells with many different shapes and forms.</p>
                                <div className='gram'>
                                    <button onClick={this.handleIncrement.bind(this)} className='plus'>+</button>
                                    <p className='grams'>{this.state.grams + 'gr'}</p>
                                    <button onClick={this.handleDecrement.bind(this)} className='plus'>-</button>
                                </div>
                                <p className="pricing"> Price : {this.state.shellprice /100 + '$'} </p>
                                <button className='shell-box-button'>Buy Now</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )}
}
