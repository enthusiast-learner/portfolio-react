import React, { useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

const[menu, setMenu]= useState("home");
const menuRef = useRef();
const openMenu =()=>{
  menuRef.current.style.right="0";
}
const closeMenu =()=>{
  menuRef.current.style.right="-350px";
}

  return (
    <div className='navbar'>
        <img src={logo} alt="logo img"></img>
        <img src={menu_open} onClick={openMenu} alt='menuicon' className='nav-mob-open'></img>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'> <p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="img"/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt="img"/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu("service")}>Services</p></AnchorLink>{menu==="service"?<img src={underline} alt="img"/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="img"/> : <></>}</li>
        </ul>
    <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar