import React from 'react'
import './footer.css';
import Header from '../header/Header';
import { IoLogoTiktok } from 'react-icons/io5';
import {IoLogoFacebook} from 'react-icons/io5';
import {IoLogoInstagram} from 'react-icons/io5';

export default function Footer(){
    return(
        <React.Fragment>
        <div id='footer' className='footer-div'>
        <Header home="/" about='/about' contact='/contact' buy='/buy' />
            <div className='cover'>
            <div className='contact-box'>
                <div className='contact-info-div'>
                    <h2 className='contact-title'>Follow us on our social medias</h2>
                    <i><IoLogoTiktok/></i>
                    <a className='social-media' href="https://vm.tiktok.com/ZMeC8wRpS/" target='_blank' rel='noreferrer'>
                        <span>Tik Tok</span>
                    </a>
                    <br/>
                    <br/>
                    <i ><IoLogoInstagram/></i>
                    <a className='social-media' href=" https://instagram.com/aquatary.shop?igshid=141enpz7ycgt9" target='_blank' rel='noreferrer'>
                        <span>Instagram</span>
                    </a>
                    <br/>
                    <br/>
                    <i ><IoLogoFacebook/></i>
                    <a className='social-media' href="https://www.facebook.com/Aquatary-111697017726050/" target='_blank' rel='noreferrer'>
                    <span>Facebook</span>
                    </a>
                    <br/>
                    <p className='contact-inf'>Here you will find more photos and videos of our buisness, and please follow us as well!</p>
                </div>
                <div className='email-div'>
                    <h2 className='email-title'>Or send us an email</h2>
                    <label className='label'>Email</label>
                    <br/>
                    <input type="email" placeholder='Email'/>
                    <br/>
                    <label className='label2'>Message</label>
                    <br/>
                    <textarea type="message" placeholder='Message' rows='8' cols='25' required />
                    <br/>
                    <button className='send-button' type='submit'>Send</button>
                </div>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
};