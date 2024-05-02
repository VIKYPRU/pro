import React from 'react'
import useCounter from '../Hooks/useCounter'

export default function Counter1() {
    const[count,Inc,Dec,Res]=useCounter(0,1)
  return (
    <div>
        {count}
        <button onClick={Inc}>Increment</button>
        <button onClick={Dec}>Decrement</button>
        <button onClick={Res}>Reset</button>
    </div>
  )
}
