import React from 'react'
import {exoplanetsQuizdata} from '../Quizdata'
import Quiz from '../Quiz'

const ExoplanetsQuiz = () => {
    return (
        <div className='d-flex flex-column'>
            <h1 className='txt-fnt text-center mt-5'>Exoplanets Quiz</h1>
            <Quiz Quizdata={exoplanetsQuizdata} />
        </div>
    )
}

export default ExoplanetsQuiz