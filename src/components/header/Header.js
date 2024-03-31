import React from 'react'
import './header.css'
import Typed from 'react-typed';
import CV from '../../Assets/MOHAMEDAAQIB_CV.docx'
import ME from '../../Assets/IMG-20221209-WA0078.jpg'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Mohamed Aaqib</h1>
                <h5 className='text-light'><Typed strings={['Web Developer','Fullstack Developer','Blockchain Developer']} typeSpeed={140} backSpeed={150}loop /></h5>
                <div className='cta'>
                    <a className='btn' href={CV} download>Download CV</a>
                    <a className='btn btn-primary' href='#contact'>Let's Talk</a>
                </div>
                <div >
                    <img alt='' className='me' src={ME}/>
                </div>
                <a href='#contact' className='scroll_down'>Scroll Down</a>
                <div className='header_socials'>
                    <a href='https://www.linkedin.com/learning/' target='_blank'><BsLinkedin/></a>
                    <a href='https://twitter.com/' target='_blank'><BsTwitter/></a>
                    <a href='https://github.com/UnknownCoding' target='_blank'><BsGithub/></a>
                </div>
            </div>
        </header>
    )
}

export default Header