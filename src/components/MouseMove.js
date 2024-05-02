import React, { useEffect, useState } from 'react'

export default function MouseMove() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logpostion=(e)=>{
        console.log('mouse is moving')
        setX(e.clientX)
        setY(e.clientY)
        }
        useEffect(()=>{window.addEventListener('mousemove',logpostion)
        return ()=>{ window.removeEventListener('mousemove',logpostion)}},[''])

  return (
    <div>MouseMove
        x-{x} y-{y}
    </div>
  )
}
