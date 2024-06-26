"use client"
import React, {useEffect, useState} from "react";
import Loader from "@/components/common/Loader";
import Card from "./card"
import API from "@/util/widgets"
import storage from "@/helpers/localstorage"

const Weather = () => {
    const[dataLoading, setDataLoading] = useState<boolean>(true)
    const[location, setLocation] = useState<{lat: Number, long: Number}>({lat:0, long: 0})
    const[cardData, setCardData] = useState<{place: any, weather: any}>({place: {}, weather: {}})

    function successCallback(position) {
        const {coords} = position;
        setLocation({
            lat: coords.latitude,
            long: coords.longitude 
        })
    }

    function failureCallback(error) {
        console.log('error', error)
    }

    function handleResponse({location, current}) {
        let data = {
            place: {
                name: location.name,
                state: location.region,
                country: location.country
            },
            weather: {
                ...current,
                ...current.condition
            }
        }
        
        setCardData(data)
        setDataLoading(false)
        storage.add('weather', data)
    }

    useEffect(() => {
        if (!storage.has('weather')) {
            if(location.lat && location.long){
                const result = API.weather.fetchWeatherApi2(location.lat, location.long)
                    result.then(response => {
                        handleResponse(response)
                    }).catch(err => console.log('error', err))
            }
        } else {
            let data = storage.get('weather')
            setCardData(data)
            setDataLoading(false)
        }
        
    
    }, [location])

    useEffect(() => {
        //Fetch data related to location
        navigator.geolocation.getCurrentPosition(successCallback, failureCallback)
    }, [])
    return (
        <>
            {
                dataLoading ?
                 <Loader />
                 :
                 <Card place={cardData.place} weather={cardData.weather}/>
            }
        </>
    )
}

export default Weather;