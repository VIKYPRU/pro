import React from 'react'
import useCounter from '../Hooks/useCounter'

export default function Counter2() {
    const[count,Inc,Dec,Res]=useCounter(10,5)
  return (
    <div>
        {count}
        <button onClick={Inc}> Increment</button>
        <button onClick={Dec}>Decrement</button>
        <button onClick={Res}>Reset</button>
    </div>
  )
}
