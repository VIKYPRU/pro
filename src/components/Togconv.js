import React, { useState } from 'react'
import MouseMove from './MouseMove'

export default function Togconv() {
    const[toggle,setToggle]=useState()

  return (
    <div>
        <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
        {toggle && <MouseMove/>}
    </div>
  )
}
