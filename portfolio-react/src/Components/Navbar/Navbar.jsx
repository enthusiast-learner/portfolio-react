import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo img"></img>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar