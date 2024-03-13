"use client";
import React, {useEffect, useState} from "react"
import { useRouter } from "next/navigation"
import GuestLayout from "@/components/Layouts/GuestLayout";
import CheckboxCustom from "@/components/Checkboxes/CheckboxCustom";
import ScoreCard from "../score/Card";
import AnalogClock from "@/components/Timer/Analog"

export default function Test({questions, minutes, onSubmit}) {
    const  router = useRouter();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [answers, setAnswers] = useState({})
    const [score, setScore] = useState(0)
    const [resetClock, setResetClock] = useState(false)

    const handleNext = () => {
        let nextQuestion = activeQuestion + 1;
        if (nextQuestion === questions.length){
            setResetClock(true)
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
        setAnswers({...answers, [activeQuestion]: answer });
        handleNext();
    }

    const timerCompleted = (e) => {
        setResetClock(true) 
        setSubmit(true)
    }

    useEffect(() => {
        
        if (submit){
            let correctAnswersCount = questions.reduce((acc, entry, index) => {
                if (entry.correct === answers[index]){
                    return acc + 1;
                }
                return acc;
        }, 0);
        setScore(correctAnswersCount);

            const redirect = setTimeout(() => {
                onSubmit();
                router.push('/mcqs')
            }, 5000)
            return () => clearTimeout(redirect)
        }
        

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submit])

    // Component
    return (
        <GuestLayout>
            <div className="mx-auto max-w-270">
            {
                            !submit
                            ?
                <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-4 xl:col-span-4">
                        
                            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white text-center">
                                        Question {activeQuestion + 1} of {questions.length}
                                    </h3>
                                </div>
                                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white text-left">
                                        {questions[activeQuestion].question}
                                    </h3>
                                </div>
                                <div className="p-7">
                                {questions[activeQuestion].answers.map((answer, index) => (
                                    <div
                                        key={`${activeQuestion}${index}`}
                                        data-type={`${activeQuestion}${index}`}
                                        className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
                                        // onClick={(e) => handleAnswer(answer.key)}
                                        >
                                            {/* <input onChange={(e) => handleAnswer(answer.key)} type="radio" className="w-6 h-6 bg-black" 
                                            checked={
                                                answer.val === answers[activeQuestion]
                                            }
                                            />
                                            <p className="ml-6 text-black">{answer.val}</p> */}
                                            <CheckboxCustom 
                                                val={`${activeQuestion}${index}`} 
                                                checked={answer.key === answers[activeQuestion]}
                                                answer={answer} 
                                                handleSelected={ansKey => handleAnswer(ansKey)}
                                                />
                                        </div>
                                    ))}
                                    <div className="flex justify-between w-full mt-4 text-white">
                                        <button onClick={handlePrevious}  className="w-[49%] py-3 bg-indigo-600 rounded-lg">Previous</button>
                                        <button onClick={handleNext} className="w-[49%] py-3 bg-indigo-600 rounded-lg">{activeQuestion + 1 === questions.length ? 'Submit': 'Next'}</button>
                                    </div>
                                </div>
                            </div>
                            
                        
                    </div>
                    <div className="col-span-2 xl:col-span-2 bg-white dark:bg-boxdark">
                            <AnalogClock minutes={parseInt(minutes) ?? 10} resetClock={resetClock} onComplete={timerCompleted}/>
                    </div>
                </div>
                :
                    <ScoreCard score={score} total={questions.length}/>
                }
            </div>
        </GuestLayout>
    )
}