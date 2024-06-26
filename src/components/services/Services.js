import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return (
        <main id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>   
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>

                    </ul>
                </article>
                <article className='service'>
                    <div className='service_head'>   
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>

                    </ul>
                </article>
                <article className='service'>
                    <div className='service_head'>   
                        <h3>Blockchain Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>
                        <li>
                            <BiCheck className='serviceicons'/>
                            <p>radnom random random info</p>
                        </li>

                    </ul>
                </article>

            </div>
        </main>
    )
}

export default Services