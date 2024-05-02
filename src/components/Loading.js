import React, { useEffect, useState } from 'react'
import './Loading.css'

export default function Loading() {
    const[duration,setDuration]=useState(0)
    const[seconds,setSeconds]=useState(0)
    const[isrunning,setIsrunnig]=useState(false)
    const[istimecomplted,setIstimecomplted]=useState(false)
    const handlechange=(e)=>{
        setDuration(e.target.value)
        setSeconds(e.target.value)

    }
    useEffect(()=>{
        let interval
        if(isrunning && seconds>0){
            interval=setInterval(()=>{
                setSeconds(prev=>prev -1)
            },1000)
        }
        else if(seconds === 0 && isrunning){
            setIstimecomplted(true)
            setIsrunnig(false)
        }
        return()=>{
            clearInterval(interval)
        }
    },[isrunning,seconds])
    const progresswidth=(seconds/duration)*100

  return (
    <div>
        {istimecomplted ?(<h1>HappyBrithday</h1>):(
            <div className='container'>
                <div className='progresser' style={{width:progresswidth + '%'}}>

                </div>

            </div>

        )}
        <br></br>
       
        <input type='number' value={duration} onChange={handlechange} disabled={isrunning}></input>
        {isrunning ? ( <button onClick={()=>{setIsrunnig(false)}}>stop</button>):
        ( <button onClick={()=>{setIsrunnig(true)}}>start</button>)}
       
       
        <button onClick={()=>{  setSeconds(duration)
             setIstimecomplted(false) }}>Reset</button>
    </div>
  )
}
