import React from 'react'
import './about.css'
import Homies from '../../Assets/IMG-20221209-WA0023.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <main id='about'>
            <h5 className='text-light'>Get to know</h5>
            <h2>About me</h2>
            <div className='container about_container'>
                <div className='about_image'>
                    <div className='about_backdrop'>
                        <img alt='' className='aboutIMg' src={Homies}/>
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='individual_cards'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='individual_cards'>
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>25+ Worldwide</small>
                        </article>
                        <article className='individual_cards'>
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>10+ completed</small>
                        </article>
                    </div>
                    <p>
                        A random piece of text that has no relation to anything that i have done throughout my life this is 
                        just to throw off some people and waste time and normally use up space to make it look like i have 
                        . I pray that one day im going to rise and bloom on top with my own job that i will earn alot of money 
                        inshallah. For more text please email me or copy for more items its always free!.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </main>
    )
}

export default About