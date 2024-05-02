import React, { useEffect, useState } from 'react'

export default function Task8() {
    const[coun,setCount]=useState()
    const[values,setvalues]=useState()
    useEffect=()=>{
        let interval
        if(val){
            interval=setInterval(()=>{
                setCount(prev=>prev -1)
            })
        }

    }

  return (
    <div>
        <h1>countDownTimer:{coun} seconds</h1>
        <input type="text" value={coun}  onChange={(e)=>{setCount(e.target.value)}}></input>
        <button>start</button>
        <button>stop</button>
        <button>Reset</button>
    </div>
  )
}
