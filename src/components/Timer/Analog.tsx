"use client"
import React, { useEffect, useState } from "react"
import Circle from "./Circle";

const AnalogClock: React.FC<{minutes: number}> = ({minutes}) => {
    const [minute, setMinutes] = useState<number>(minutes)
    const [seconds, setSeconds] = useState<number>(59)
    const [timeOver, setTimeOver] = useState<boolean>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
                        setSeconds((prevSec) => prevSec === 0 ?  59 : prevSec - 1);
                    }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {console.log({
        timeOver,
        seconds
    })
        if (!timeOver && seconds === 59) {
            setMinutes((prevMin) => prevMin === 0 ?  0 : prevMin - 1);
        }
    }, [seconds, timeOver])
    useEffect(() => {
        if(minute < 1) {
            setTimeOver(true)
        }
    }, [minute])
    return (
        <>
            <div className="flex h-full items-center justify-center">
                <div className="flex flex-col">
                    <Circle color="text-[#3F8EF7]" percentage={minute}/>
                    <Circle color="text-[#F7D838]" percentage={seconds}/>
                </div>
                <div></div>
            </div>
        </>
    )
}

// const Clocks = {
//     AnalogClock,
//     // DigitalClock
// };

export default AnalogClock