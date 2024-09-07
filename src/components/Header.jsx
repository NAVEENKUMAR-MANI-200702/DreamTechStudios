import React from 'react'
import "../styles/components/header.css"
import LogoImg from "../assets/img/Logo.png";

const Header = () => {
  return (
    <>
      <div className='headerContent'>
        <div className='logoImgContent'>
          <img src={LogoImg} alt="LogoImg" className='LogoImg'/>
        </div>
        <div className='contentOptions'>
            <div className='options'>HOME</div>
            <div className='options'>ABOUT US</div>
            <div className='options'>SERVICES</div>
            <div className='options'>CONTACT US</div>
        </div>
      </div>
    </>
  )
}

export default Header