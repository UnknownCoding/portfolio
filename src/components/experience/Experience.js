import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';



const Experience = () => {
    return (
        <main id='experience'>
            <h5 className='text-light'>Get to know</h5>
            <h2>About me</h2>
            <div className='container experience_container'>
                <div className='frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience_content'>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>                                
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>    
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>Styled Compo</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='backend'>
                    <h3>backend Development</h3>
                    <div className='experience_content'>
                    <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>    
                                <h4>Node Js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>    
                                <h4>Mongo DB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>    
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>    
                                <h4>Firebase</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>    
                                <h4>GraphQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon'/>
                            <div>
                                <h4>Prisma</h4>
                                <small className='text-light'>Experienced</small>    
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Experience