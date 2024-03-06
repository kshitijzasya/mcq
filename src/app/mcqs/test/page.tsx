"use client"
import React, {useEffect, useState} from "react"
import helpers from "@/helpers/mcq"
import MCQ from "@/app/mcqs/test/Test"

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
            'answers': Object.entries(questions[key].answers).reduce((acc, e) => {
                if (e[1]) {
                    acc.push({
                        key: e[0].split("_")[1],
                        val : e[1]
                    })
                }
                return acc;
            }, []),
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

export default function Page() {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        helpers.questions()
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