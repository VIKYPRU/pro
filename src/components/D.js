import React ,{useContext}from 'react'
import { CounterContext } from '../App'
export default function D() {
    const Counter=useContext(CounterContext)
  return (
    <div>D
        <button onClick={()=>Counter.dispatch('inc')}>+</button>
        <button onClick={()=>Counter.dispatch('dec')}>-</button>
        <button onClick={()=>Counter.dispatch('res')}>Reset</button>
    </div>
  )
}
