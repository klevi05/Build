import React, { Component } from 'react';
import './buy.css';
import gift from '../images/gift.png';
import product from '../images/bg.jpg';
import Header from '../header/Header';
import axios from 'axios';

export default class Buy extends Component{
    constructor(props){
        super(props)
        this.state={
          title: '',
          description: '',
          price: ''
        }
      };
      componentDidMount(){
        axios({
          method:'GET',
          url:'http://localhost:5000/user/retrive/608af715e72f242067b8741a',
          headers: {'Content-Type': 'application/json'},
        }).then(async (respone)=>{
          if(respone.status === 200){
            this.setState({ 
              title: await respone.data.title,
              description: await respone.data.description,
              price:  await respone.data.price
            });
          }
        })
      }
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
                                <p>{this.state.description}</p>
                                <p className="pricing"> Price : {this.state.price / 100 + '$'}</p>
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
