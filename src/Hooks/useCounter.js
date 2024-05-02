import React, { useState } from 'react'

function useCounter(initialvalue=0,incValue) {
    const[count,setCount]=useState(initialvalue)
    const handleInc=()=>{
        setCount(count+incValue)
    }
    const handleDec=()=>{
        setCount(count-incValue)
    }
    const handleReset=()=>{
        setCount(count-incValue)
    }
    return[count,handleInc,handleDec,handleReset]
    
  
}
export default useCounter
