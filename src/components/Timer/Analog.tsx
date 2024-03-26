"use client"
import React, { useEffect, useState } from "react"
import Circle from "./Circle";

const AnalogClock: React.FC<{minutes: number,resetClock: boolean, onComplete: Function}> = ({minutes ,resetClock ,onComplete}) => {
    const [minute, setMinutes] = useState<number>(minutes)
    const [seconds, setSeconds] = useState<number>(59)
    const [timeOver, setTimeOver] = useState<boolean>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
                        setSeconds((prevSec) => prevSec === 0 ?  0 : prevSec - 1);
                    }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        if (!timeOver && seconds === 59) {
            setMinutes((prevMin) => prevMin === 0 ?  0 : prevMin - 1);
        }
    }, [seconds, timeOver])
    useEffect(() => { console.log({minute, seconds})
        if(minute === 0 && seconds === 0) {
            setTimeOver(true);
            onComplete(true)
        } else if(minute > 0 && seconds === 0) {
            setMinutes(minute - 1)
            setSeconds(59)
        }
    }, [minute, seconds])

    //Reset the clock to initial state
    useEffect(() => {
        if(resetClock) {
            setSeconds(0)
            setMinutes(0)
        }
    }, [resetClock])
    return (
        <>
            <div className="flex h-full items-center justify-center">
                <div className="flex flex-col">
                    <Circle color="text-[#33bfc0fc]" percentage={minute}/>
                    <Circle color="text-[#5791bafc]" percentage={seconds}/>
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