"use client";
import React, {useEffect, useState} from "react"
import BasicLayout from "@/components/Layouts/BasicLayout";
import mcquest from "../../../../public/mcqs/nextjs.json"

export default function Questions() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [answers, setAnswers] = useState({})
    const [score, setScore] = useState(0)

    const handleNext = () => {
        let nextQuestion = activeQuestion + 1;
        if (nextQuestion === mcquest.length){
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
        let correctAnswersCount = mcquest.reduce((acc, entry, index) => {
                let correct = entry.answerOptions.find(v => v?.isCorrect);
                if (correct?.answer === answers[index]){
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
                        <h4 className="mt-10 text-xl text-white/60">Question {activeQuestion + 1} of {mcquest.length}</h4>
                        <div className="mt-4 text-2xl text-white">
                            {/* What type of framework is Next.js? */}
                            {mcquest[activeQuestion].question}
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                    {mcquest[activeQuestion].answerOptions.map((answer, index) => (
                        <div
                            key={index}
                            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
                            onClick={(e) => handleAnswer(answer.answer)}
                            >
                                <input onChange={(e) => handleAnswer(answer.answer)} type="radio" className="w-6 h-6 bg-black" 
                                checked={
                                    answer.answer === answers[activeQuestion]
                                }
                                />
                                <p className="ml-6 text-white">{answer.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between w-full mt-4 text-white">
                        <button onClick={handlePrevious}  className="w-[49%] py-3 bg-indigo-600 rounded-lg">Previous</button>
                        <button onClick={handleNext} className="w-[49%] py-3 bg-indigo-600 rounded-lg">{activeQuestion + 1 === mcquest.length ? 'Submit': 'Next'}</button>
                    </div>
                    </>
                    :
                    <>
                    <h1 className="text-3xl font-semibold text-center text-white">
                    You scored {score} out of {mcquest.length }
                    </h1>
                    </>
                }

            </div>
        </BasicLayout>
    )
}