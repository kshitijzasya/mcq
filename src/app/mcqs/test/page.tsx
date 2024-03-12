"use client"
import React, {useEffect, useState} from "react"
import helpers from "@/helpers/mcq"
import MCQ from "@/app/mcqs/test/Test"
import Loader from "@/components/common/Loader"
// import useLocalStorage from "@/hooks/useLocalStorage"

interface QuestionEntry {
    question: string;
    answers: {key:  string; val: string}[];
    correct: string
}

const convertPropsDataToQuestionsFormat = (questions: any): QuestionEntry[] => {
    var data : QuestionEntry[]= [];
    for(let key in questions) {
        var entry: QuestionEntry = {
            'question': questions[key].question,
            'answers': Object.entries(questions[key].answers)
                            .filter(([_, val]) =>  val)
                            .map(([key, value]) => ({
                                'key': key.split("_")[1],
                                'val': value as string
                                })),
            'correct': (function(answers) {
                for(let k in answers) {
                    if (answers[k] === 'true') {
                        return k.split("_")[1]
                    }
                }
                return "";
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

    const [questions, setQuestions] = useState<QuestionEntry[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        helpers.questions(`tags=${tag || ''}&difficulty=${difficulty || ''}&limit=${level || ''}`)
        .then(values => {
            setQuestions(convertPropsDataToQuestionsFormat(values))
            setLoading(false)
        })
        .catch(err => {
            console.log('no questions provided to me', err)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (loading) {
        return <Loader />
    }
    return <MCQ questions={questions} minutes={level} />
}