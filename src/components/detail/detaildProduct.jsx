import React, { Component } from 'react';
import './det.css';
import axios from 'axios';
import logo from '../images/logo.png'
import photo from '../images/bg.jpg';
import {Link} from 'react-router-dom';

export default class Showing extends Component{
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
      url:'http://localhost:5000/user/retrive'+this.props.match.params.id,
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
      <div className='detail-box'>
          <header className='nav-bar'>
          <div className='logo-div'>
            <Link to='/'><img src={logo} alt="logo"/></Link>
          </div>
        </header>
        <div className='text-description'>
          <div className='detail-space'>
            <div className='photos-area-detail'>
              <img src={photo} alt=""/>
            </div>
            <div className='detail-area'>
              <h1>{this.state.title}</h1>
              <p className='more-details'>{this.state.description}</p>
              <p className='price'><span>Price:  </span> {parseInt(this.state.price) / 100} <span>$</span> </p>
              <span className='shiping'>Free Shiping</span>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
        </React.Fragment>
    )}
}