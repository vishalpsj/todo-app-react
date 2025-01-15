

import { useEffect, useState } from 'react'
import './DateTime.css'

export const DateTime = () => {

    const date = new Date().toLocaleDateString()

    const [time, settime] = useState(new Date().toLocaleTimeString())


    useEffect(() => {
        const intervalId = setInterval(() => {
            settime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(intervalId)

    },[])




    return (
        <>
            <p className="dateTime">{date} - {time}</p>
        </>
    )
}