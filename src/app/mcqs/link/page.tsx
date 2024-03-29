"use client"
import React, {useEffect, useState} from "react"
import { useRouter, useSearchParams } from 'next/navigation';
import helpers from "@/helpers/mcq"
import MCQ from "@/app/mcqs/test/Test"
import Loader from "@/components/common/Loader"
import Crypto from "@/util/crypto"
// import useLocalStorage from "@/hooks/useLocalStorage"

interface QuestionEntry {
    question: string;
    answers: {key:  string; val: string}[];
    correct: string
}

interface DecryptedData {
    admin?: string;
    duration?: string;
    tags?: string;
    level?: string;
    // Add other properties if needed
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

function Page() {
    const [admin, setAdmin] = useState<string>("") 
    const [duration, setDuration] = useState<string>("") 

    const searchParams = useSearchParams(); 
    const data: string|null = searchParams.get('data')
    const router = useRouter();

    const [questions, setQuestions] = useState<QuestionEntry[]>([])
    const [loading, setLoading] = useState(true);

    const onFormSubmit = () => {
        console.log('clear everything')
        //Send report to admin with user and 
        console.log('send report to admin')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let search = window.location.search;
            if (search[0] === "?") {
                 search = search.slice(1)
            }
            //check types
            if (typeof data === "string" &&  data.length) {
                const decryptedData = (new Crypto).decryptThis(decodeURIComponent(data)) as { tags: string; duration: string; level: string; admin: string };
                if (typeof decryptedData === 'object' && decryptedData !== null) {
                    //Setting properties
                    let url_String = ``;
                    if('admin' in decryptedData) {
                        setAdmin(decryptedData.admin || '')
                    }
    
                    if( 'duration' in decryptedData) {
                        setDuration(decryptedData.duration || '')
                        url_String += `&limit=${decryptedData.duration || 0}`
                    }
    
                    if('tags' in decryptedData) {
                        url_String += `tags=${decryptedData.tags || ''}`
                    }
    
                    if('level' in decryptedData){
                        url_String += `&difficulty=${decryptedData.level || ''}`
                    }
                    setLoading(true)
                    helpers.questions(url_String)
                    .then(values => {
                        setQuestions(convertPropsDataToQuestionsFormat(values))
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log('no questions provided to me', err)
                    })
                }
            } else {
                //@todo show screen for corrupted data 
                console.log('currupted data supplied')
            }
        }
        
    },[])

    

    useEffect(() => {
        setLoading(true)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (loading) {
        return <Loader />
    }
    return <MCQ parent={false} questions={questions} minutes={duration} onSubmit={onFormSubmit}/>
    
}

export default Page;