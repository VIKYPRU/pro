import React, { useEffect, useRef } from 'react'

export default function UseRef1() {
    const inputRef=useRef()
    useEffect(()=>{
        inputRef.current.focus()


    },[])
  return (
    <div>
        <input ref={inputRef}></input>
    </div>
  )
}
