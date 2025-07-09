import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
               <img src={footer_logo} alt=''></img>
               <p>I am a FrontEnd Developer From India.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''></img>
                    <input type="email" placeholder='Enter your email'></input>
                </div>
                <div className="footer-subscribe">
                   Subscribe
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                © All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Contact With me</p>

            </div>
        </div>
    </div>
  )
}

export default Footer