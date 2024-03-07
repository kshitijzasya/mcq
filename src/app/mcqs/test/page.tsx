"use client"
import React, {useEffect, useState} from "react"
import helpers from "@/helpers/mcq"
import MCQ from "@/app/mcqs/test/Test"
import useLocalStorage from "@/hooks/useLocalStorage"

const Loading = () => (
    <>
            <h2>Page loading</h2>
            </>
)

const convertPropsDataToQuestionsFormat = questions => {
    var data = [];
    for(let key in questions) {
        var entry = {
            'question': questions[key].question,
            'answers': Object.entries(questions[key].answers)
                            .filter(([_, val]) =>  val)
                            .map(([key, value]) => ({
                                key: key.split("_")[1],
                                'val': value
                                })),
            'correct': (function(answers) {
                for(let k in answers) {
                    if (answers[k] === 'true') {
                        return k.split("_")[1]
                    }
                }
            })(questions[key].correct_answers)
        };
        data.push(entry)
    }
    return data
}

const valueByLevel = {
    "10": "easy",
    "20": "medium",
    "30": "hard"
}

export default function Page() {
    let [
        tag,
        difficulty,
        level = "10"
       ] = [
        localStorage.getItem("tag"),
        localStorage.getItem("level"),
        localStorage.getItem("duration")
    ]

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        helpers.questions(`tag=${tag}&difficulty=${difficulty}&limit=${level}`)
        .then(values => {
            setQuestions(convertPropsDataToQuestionsFormat(values))
            setLoading(false)
        })
    }, []);
    if (loading) {
        return <Loading />
    }
    return <MCQ questions={questions} />
}