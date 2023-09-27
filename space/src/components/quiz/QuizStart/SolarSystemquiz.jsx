import React from 'react'
import Quiz from '../Quiz'
import { Quizdata } from '../Quizdata'

const SolarSystem = () => {
  return (
    <>
      <div className='d-flex flex-column'>
        <h1 className='txt-fnt text-center mt-5'>Solarsystem Quiz</h1>
        <Quiz Quizdata={Quizdata} />
      </div>
    </>
  )
}

export default SolarSystem