import React from 'react'
import "../styles/components/header.css"

const Header = () => {
  return (
    <>
      <div className='headerContent'>
        <div className='logoImg'>logo will be here</div>
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