import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log('component is mounted')
    })
  return (

    <div>
        <button onClick={()=>{
            setCount
            (count +1)
        }
        }>clicked{count} times</button>
    </div>
  )
}
