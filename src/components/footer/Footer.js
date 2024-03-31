import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <a href='#' className='footerLogo'>AAQIB</a>
            <ul className='mainLinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contacts'>Contacts</a></li>
            </ul>
            <div className='footerSocials'>
                <a href='https://mail.google.com/mail/u/0/#inbox'><FaFacebookF/></a>
                <a href='https://twitterv2.vercel.app/'><IoLogoTwitter/></a>
                <a href='https://www.instagram.com/?hl=en'><FiInstagram/></a>
            </div>
            <div className='footer-copyright'>
                <samall>Mohamed-Aaqib. All rights reserved .</samall>
            </div>
        </footer>
    )
}

export default Footer