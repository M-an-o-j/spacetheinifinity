import React from 'react'
import arrow from '../../assets/svg/arrow.svg'
import { Link } from 'react-router-dom'
import astronaut from '../../assets/images/astronaut.png'
import solarsystem from '../../assets/images/solarsystem.png'


const Whatwehave = () => {
    return (
        <>
            <div className='container-fluid padding-space position-relative'>
                <h2 className='text-light text-center txt-fnt py-1 py-md-3'>what we have ?</h2>
                <div className='d-flex flex-column '>
                    <div className='text-light p-3 p-md-5 bg-dark rounded-3 border border-3 mb-5'>
                        <h3 className='txt-fnt'>Explore</h3>
                        <p className='font-monospace txt-indent'>You can explore our universe in our explore page. We have a clear explanation about the space, galaxies, stars, planet, famous theories etc.., you can read those to gain knowledge.</p>
                        <Link to={'/explore'} className='text-decoration-none'>
                            <div className='d-flex align-items-center justify-content-end '>
                                <h6 className='me-2 text-light'>Explore now</h6>
                                <img className=' arrow' src={arrow} alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className='text-light p-3 p-md-5 bg-dark position-relative rounded-3 border border-3'>
                        <img className='position-absolute end-0 top-0 astronaut rotate-center vibrate-1 top-0 astronaut img-fluid' src={solarsystem} alt="" />
                        <h3 className='txt-fnt'>Quiz</h3>
                        <p className='font-monospace txt-indent'>You can test your knowledge with interesting way that is Quiz. By attending quiz you can know about your understanding in space which is help you to level up your knowldege in cosmos</p>
                        <Link to={'/quiz'} className='text-decoration-none'>
                            <div className='d-flex align-items-center justify-content-end '>
                                <h6 className='me-2 text-light'>Quiz here</h6>
                                <img className=' arrow' src={arrow} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <img className='position-absolute start-0 astronaut vibrate-1 top-0 astronaut img-fluid' src={astronaut} alt="" />
            </div>
        </>
    )
}

export default Whatwehave