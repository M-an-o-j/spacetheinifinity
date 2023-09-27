import React from 'react'
import solarsystem from '../../assets/images/SolarSystem.jpg'
import Exoplanets from '../../assets/images/exoplanet.jpg'
import Galaxies from '../../assets/images/galaxy.jpg'
import { Link } from 'react-router-dom'

const QuizLayout = () => {
    return (
        <div className='quizlayout my-4'>
            <div className='mt-5 text-center mb-3'>
                <h1 className='txt-fnt'>Welcome to the Quiz</h1>
            </div>
            <div className='row row-cols-2 gap-2 w-full flex justify-content-center'>
                <div className='col-5 p-4 bg-dark rounded-3 d-flex flex-column '>
                    <div className='x'>
                        <h2 className='txt-fnt'>solarsystem</h2>
                        <p className='text-light font-monospace'>This Quiz is all about solarsystem. You can gain knowledge about solarsystem by attending this quiz</p>
                        <div>
                            <h4 className='text-light font-monospace '><Link to={'/quiz/quizsolarsystem'} className='text-decoration-none text-light'>Click here</Link></h4>
                        </div>
                    </div>
                    <div className='rounded-3'>
                        <img src={solarsystem} className='img-fluid quiz-img rounded-3 object-fit-cover' alt="" />
                    </div>
                </div>
                <div className='col-5 p-4 bg-dark rounded-3 d-flex flex-column '>
                    <div className=''>
                        <h2 className='txt-fnt'>ExoPlanets</h2>
                        <p className='text-light font-monospace'>This Quiz is all about ExoPlanets. You can gain knowledge about ExoPlanets by attending this quiz</p>
                        <div>
                            <h4 className='text-light font-monospace'><Link to={'/quiz/quizexoplanet'} className='text-decoration-none text-light'>Click here</Link></h4>
                        </div>
                    </div>
                    <div className='rounded-3'>
                        <img src={Exoplanets} className='img-fluid quiz-img rounded-3 object-fit-cover' alt="" />
                    </div>
                </div>
                <div className='col-5 p-4 bg-dark rounded-3 d-flex flex-column '>
                    <div className='x'>
                        <h2 className='txt-fnt'>Galaxies</h2>
                        <p className='text-light font-monospace'>This Quiz is all about Galaxies. You can gain knowledge about Galaxies by attending this quiz</p>
                        <div>
                            <h4 className='text-light font-monospace'><Link to={'/quiz/quizstart'} className='text-decoration-none text-light'>Click here</Link></h4>
                        </div>
                    </div>
                    <div className='rounded-3'>
                        <img src={Galaxies} className='img-fluid quiz-img rounded-3 object-fit-cover ' alt="" />
                    </div>
                </div>
                <div className='col-5 p-4 bg-dark rounded-3 d-flex flex-column  justify-content-between'>
                    <div className='x'>
                        <h2 className='txt-fnt'>solarsystem</h2>
                        <p className='text-light font-monospace'>This Quiz is all about solarsystem. You can gain knowledge about solarsystem by attending this quiz</p>
                        <div>
                            <h4 className='text-light font-monospace'><Link to={'/quiz/quizstart'} className='text-decoration-none text-light'>Click here</Link></h4>
                        </div>
                    </div>
                    <div className='rounded-3'>
                        <img src={solarsystem} className='img-fluid quiz-img rounded-3 object-fit-cover' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizLayout