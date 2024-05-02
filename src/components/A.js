import React, { useContext } from 'react'
import { CounterContext } from '../App'
export default function A() {
    const Counter=useContext(CounterContext)
  return (
    <div>A
        <button onClick={()=>Counter.dispatch('inc')}>+</button>
        <button onClick={()=>Counter.dispatch('dec')}>-</button>
        <button onClick={()=>Counter.dispatch('res')}>Reset</button>
    </div>
  )
}
