import React, { useEffect } from 'react'
import Title from '../home/Title'
import Intro from '../home/Intro'
import Whatwehave from '../home/whatwehave'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Alienemail from '../home/Alienemail'

const Homecontent = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className=''>
                <Title />
                <div data-aos="fade-up">
                    <Intro />
                </div>
                <div data-aos="flip-up">
                    <Whatwehave />
                </div>
                <div data-aos="flip-down">
                    <Alienemail />
                </div>
            </div>
        </>
    )
}

export default Homecontent