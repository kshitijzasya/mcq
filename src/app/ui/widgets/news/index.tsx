"use client"
import React, {useEffect, useState} from "react";
import Loader from "@/components/common/Loader";
import Card from "./card"
import API from "@/util/widgets"
import storage from "@/helpers/localstorage";

const News = () => {
    const[dataLoading, setDataLoading] = useState<boolean>(true)
    const[cardData, setCardData] = useState([])


    useEffect(() => {
        let today = (new Date)
        let key = `${today.getDate()}-${today.getMonth()}`;
        //Fetch data related to news
        if (!storage.has(key)){
            const news = API.news.fetchShareNews()
            news.then(res => {
                if (res.code === 200 && res.data.length) {
                    setCardData(res.data.slice(0, 10))
                    setDataLoading(false)
                    storage.add(key, res.data)
                }
            })
            .catch(err => console.log('errpr', err))
        } else {
            let data = storage.get(key);
            setCardData(data)
            setDataLoading(false)
        }
    }, [])
    return (
        <>
            {
                dataLoading ?
                 <Loader />
                 :
                 <Card news={cardData}/>
            }
        </>
    )
}

export default News;