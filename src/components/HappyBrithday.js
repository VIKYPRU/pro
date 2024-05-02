import React, { useEffect, useState } from 'react'

export default function HappyBrithday() {
    const[time,setTime]=useState(new Date())
    const[val,setVal]=useState('')
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date())
        })
        return()=>{
            clearInterval(interval)
        }
    })
    useEffect(()=>{
        const timeString=time.toLocaleTimeString()
        if (timeString === "8:44:00 AM")
        setVal('happy brithday')
    })

  return (
    <div>
        <h1>current time{time.toLocaleTimeString()}</h1>
        <h3>{val}</h3>
    </div>
  )
}
