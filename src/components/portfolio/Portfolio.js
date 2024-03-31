import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/logicTEST.jpg'
import IMG2 from '../../Assets/Mirissa_beach_Sri_Lanka.jpg'
import IMG3 from '../../Assets/testimage.jpg'
import IMG4 from '../../Assets/IMG-20221209-WA0058.jpg'
import IMG5 from '../../Assets/Hand-Luggage-Only-7.jpg'
import IMG6 from '../../Assets/logicANothaoNE.jpg'
import IMG7 from '../../Assets/Jakarta_Rizky-Maharani_Wikimedia-Commons.webp'


const Portfolio = () => {

    const ProfileItmes = [
        {
            image:IMG1,
            title:'Logic is legit the craziest man!',
            github:'https://github.com/UnknownCoding',
            demo:'https://twitterv2.vercel.app/',
        },{
            image:IMG2,
            title:'Sri lanka is a crazy place!',
            github:'https://github.com/UnknownCoding',
            demo:'https://twitterv2.vercel.app/',
        },{
            image:IMG3,
            title:'Metro boomin make it boom!',
            github:'https://github.com/UnknownCoding',
            demo:'https://twitterv2.vercel.app/',
        },{
            image:IMG4,
            title:'Fello twizzler upon command!',
            github:'https://github.com/UnknownCoding',
            demo:'https://twitterv2.vercel.app/',
        },{
            image:IMG5,
            title:'That one overwtach two map!',
            github:'https://github.com/UnknownCoding',
            demo:'https://twitterv2.vercel.app/',
        },{
            image:IMG6,
            title:'Logic is the best in the history siuuu!',
            github:'https://github.com/UnknownCoding',
            demo:'https://twitterv2.vercel.app/',
        },{
            image:IMG7,
            title:'Jakkarta in indonasia very beautiful i must say!',
            github:'https://github.com/UnknownCoding',
            demo:'https://twitterv2.vercel.app/',
        },
    ]

    return (
        <main id='portfolio'>
            <h3>My Recent Work</h3>
            <h2>Portfolio</h2>
            <div className='container port_container'>
                {ProfileItmes.map((pT,i)=>(
                    <article className='portItem'>
                        <div className='portfolio_image'>
                            <img className='portIMG' alt='' src={pT.image}/>
                        </div>
                        <h3>{pT.title}</h3>
                        <a href={pT.github} target='_blank' className='btn patek-prim'>Code</a>
                        <a href={pT.demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                    </article>
                ))}
            </div>
        </main>
    )
}

export default Portfolio