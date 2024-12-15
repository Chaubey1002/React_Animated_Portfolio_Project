import React, { useEffect, useRef } from 'react'
import pdf from '../Pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'


function Home() {
    const TypedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: ["Welcome to my profile", " My name is Rakesh chaubey", "I'm Software Engineer", "Frontend developer (React.JS)", "Contact Us:- 7057631066"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }
        const typed = new Typed(TypedRef.current, options)
        return () => {
            typed.destroy();
        }
    }, [])
    return (
        <>
            <div className='container home' id='home'>
                <div className='left' data-aos='fade-up-right'
                    data-aos-duration="1000">
                    <h1 ref={TypedRef}>loremmkkefkejkwwllwlkwe</h1>
                    <a href={pdf} download="resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
                </div>

                <div className='right'>
                    <div className='img' data-aos='fade-up-left'
                        data-aos-duration="2000">
                        <img src={`/asets/${hero.imageSrc}`} alt='' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
