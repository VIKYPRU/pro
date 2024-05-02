import React, { useEffect, useRef, useState } from 'react'

export default function UseRef2() {
    const[Timer,setTimer]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            {
                setTimer(prev=>prev+1)
            }
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])

  return (
    <div>
        Timer --{Timer}
        <button onClick={()=>{clearInterval(intervalRef.current)}} >stop</button>
    </div>
  )
}
