import React, { useState } from 'react'

const Quiz = ({ Quizdata }) => {
    const [quizidx, setQuizIdx] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const currentQuiz = Quizdata[quizidx]
    let datalength = Quizdata.length

    const selectOptions = (idx) => {
        if (quizidx < (datalength - 1)) {
            setQuizIdx(quizidx + 1)
        }
        console.log('answer' + idx);
        console.log('Qustion' + quizidx);
        if (currentQuiz.answer === idx) {
            console.log('answer correct')
            setScore(score + 1)
        }
    }

    return (
        <>{showScore ? (
            <div className='quizstart centered-content'>
                <div className='bg-dark p-5 rounded-3'>
                    <h1 className='txt-fnt text-center'>{`your score is ${score} out of ${datalength}`}</h1>
                </div>
            </div>
        ) : (
            <div className='quizstart centered-content'>
                <div className='bg-dark rounded-3 p-3'>
                    <div className=' d-flex flex-column  mx-auto'>
                        <div className='my-3'>
                            <h4 className='txt-fnt text-center'>{`${quizidx + 1}.`}{currentQuiz.Question}</h4>
                        </div>
                        <div className='quiz-container-options text-center'>
                            {currentQuiz.Options.map((option, index) => (
                                <li key={index} onClick={() => selectOptions(index)} className={`btn btn-primary rounded-3 bg-li text-dark font-monospace list-unstyled`}>{option}</li>
                            ))}
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3 '>
                        <button disabled={quizidx <= 0 ? true : false} onClick={() => setQuizIdx(quizidx - 1)} className='text-light list-unstyled np-li txt-fnt'>previous</button>
                        {quizidx === (datalength - 1) ?
                            (<button onClick={() => setShowScore(true)} className='text-light list-unstyled np-li txt-fnt'>Submit</button>)
                            : (<button onClick={() => setQuizIdx(quizidx + 1)} className='text-light list-unstyled np-li txt-fnt'>Next</button>)}
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Quiz