"use client";
import React, {useEffect, useState} from "react"
import BasicLayout from "@/components/Layouts/BasicLayout";


export default function Test({questions}) {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [answers, setAnswers] = useState({})
    const [score, setScore] = useState(0)

    const handleNext = () => {
        let nextQuestion = activeQuestion + 1;
        if (nextQuestion === questions.length){
            setSubmit(true)
        } else {
            setActiveQuestion(nextQuestion)
        }
    }

    const handlePrevious = () => {
        let lastQuestion = activeQuestion - 1;
        if (lastQuestion <= 0) {
            lastQuestion = 0
        }
        setActiveQuestion(lastQuestion)
    }

    const handleAnswer = answer => {
        setAnswers({...answers, [activeQuestion]: answer })
        handleNext();
    }

    useEffect(() => {
        let correctAnswersCount = questions.reduce((acc, entry, index) => {
                if (entry.correct === answers[index]){
                    return acc + 1;
                }
                return acc;
        }, 0);
        setScore(correctAnswersCount)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submit])

    // Component
    return (
        <BasicLayout>
            <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
                {
                    !submit
                    ?
                    <>
                    <div className="flex flex-col items-start w-full">
                        <h4 className="mt-10 text-xl text-white/60">Question {activeQuestion + 1} of {questions.length}</h4>
                        <div className="mt-4 text-2xl text-white">
                            {/* What type of framework is Next.js? */}
                            {questions[activeQuestion].question}
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                    {questions[activeQuestion].answers.map((answer, index) => (
                        <div
                            key={index}
                            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
                            onClick={(e) => handleAnswer(answer.key)}
                            >
                                <input onChange={(e) => handleAnswer(answer.key)} type="radio" className="w-6 h-6 bg-black" 
                                checked={
                                    answer.val === answers[activeQuestion]
                                }
                                />
                                <p className="ml-6 text-white">{answer.val}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between w-full mt-4 text-white">
                        <button onClick={handlePrevious}  className="w-[49%] py-3 bg-indigo-600 rounded-lg">Previous</button>
                        <button onClick={handleNext} className="w-[49%] py-3 bg-indigo-600 rounded-lg">{activeQuestion + 1 === questions.length ? 'Submit': 'Next'}</button>
                    </div>
                    </>
                    :
                    <>
                    <h1 className="text-3xl font-semibold text-center text-white">
                    You scored {score} out of {questions.length }
                    </h1>
                    </>
                }

            </div>
        </BasicLayout>
    )
}