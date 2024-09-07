import React from 'react';
import "../styles/components/footer.css"
import LogoImg from "../assets/img/Logo.png";

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div>
            <h3 className='footerTitle'>Dream Tech Studio</h3>
            <img src={LogoImg} className='footerBrandLogo'/>
        </div>
        <div className='linksContent'>
            <h3 className='footerTitle'>USEFULL LINKS</h3>
            <div>Home</div>
            <div>About us</div>
            <div>Contact us</div>
            <div>Services</div>
        </div>
        <div className='serviceContent'>
            <h3 className='footerTitle'>SERVICES</h3>
            <div>App development</div>
            <div>Web development</div>
            <div>Ui/ux designt</div>
            <div>Graphic design</div>
            <div>Branding</div>
            <div> Social media marketing</div>
            <div>SEO</div>
            <div> Video editing</div>
            <div>Visualdub Ai</div>
        </div>
        <div className='linksContent'>
            <h3 className='footerTitle'>FOLLOW US</h3>
            <div>Call</div>
            <div>whatsapp</div>
            <div>SMS</div>
            <div>Email</div>
        </div>
    </div>
  )
}

export default Footer