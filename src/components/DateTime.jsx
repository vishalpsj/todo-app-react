

import { useEffect, useState } from 'react'
import './DateTime.css'
import '../responsive.css'

export const DateTime = () => {

    const dateFormat = {
        weekday: "long", // Shows the full name of the week (e.g., Monday)
        year: "numeric",
        month: "long",  // Full month name (e.g., January)
        day: "numeric"  // Day of the month
    }

    // const date = new Date().toLocaleDateString(undefined, dateFormat)

    const [date, setdate] = useState(new Date().toLocaleDateString(undefined, dateFormat))
    const [time, settime] = useState(new Date().toLocaleTimeString())


    useEffect(() => {
        const intervalId = setInterval(() => {
            setdate(new Date().toLocaleDateString(undefined, dateFormat))
            settime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(intervalId)

    }, [])




    return (
        <>
            <div className ="dateTime">
                <div className="dateis">
                    {date}
                </div>
                <div className="timeis">
                    {time}
                </div>
            </div>
        </>
    )
}