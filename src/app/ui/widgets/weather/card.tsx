"use client"
import React from "react"
import Image from "next/image"

interface CardProps {
    place: {
        name: string,
        state: string,
        country: string
    },
    weather: {
        text: string,
        icon: string,
        wind_kph: number,
        pressure_mb: number,
        humidity: number,
        temp_c: number,
        temp_f: number
    }
}

const Card: React.FC<CardProps> = ({place, weather}) => {
    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
        <div className="mb-3 justify-between gap-4 sm:flex">
          <div>
            <h5 className="text-xl font-semibold text-black dark:text-white">
              Weather Analytics
            </h5>
          </div>
          <div className="flex flex-col">
            <h5>{place.name}</h5>
            <small>({place.state})</small>
          </div>
        </div>
  
        <div className="mb-2 grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex ">
                <img 
                    width={100}
                    alt={weather.text}
                    src={weather.icon}
                />
                <div className="flex flex-col">
                    <span className="text-2xl">{weather.temp_c}&deg;C</span>
                    <span className="text-2xl">{weather.temp_f}&deg;F</span>
                </div>
            </div>
            <h4><b>{weather.text}</b></h4>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
                <Image src="/images/icon/wind.svg" width={30} height={30} alt="Wind" title="Wind"/>
                <small><b>{weather.wind_kph}/kmph</b></small>
            </div>
            <div className="flex flex-row justify-between">
                <Image src="/images/icon/pressure.svg" width={30} height={30} alt="Pressure" title="Pressure" />
                <small><b>{weather.pressure_mb}/mb</b></small>
            </div>
            <div className="flex flex-row justify-between">
                <Image src="/images/icon/humidity.svg" width={30} height={30} alt="Humidity" title="Humidity"/>
                <small><b>{weather.humidity}/mb</b></small>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;