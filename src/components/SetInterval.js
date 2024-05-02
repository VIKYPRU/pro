import React, { useEffect, useState } from 'react'

export default function SetInterval() {
    const [count, setCount] = useState(0)
    const [intervalid, setIntervalid] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1)

        }, 500);
        setIntervalid(interval)
        return () => {
            clearInterval(intervalid)
        }
    }, [])
    return (
        <div>count-{count}
            <button onClick={() => { clearInterval(intervalid) }}>stop</button>


        </div>
    )
}
