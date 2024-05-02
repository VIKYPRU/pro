import React, { useContext } from 'react'
import { passwordContext,userContext } from '../App'
import { CounterContext } from '../App'

export default function F() {
    // const user=useContext(userContext)//consumer
    // const password=useContext(passwordContext)//consumer2
    const Counter=useContext(CounterContext)
  return (
    <div>
        {/* {user.name} in F.js{user.age}
        {password} */}
        <div>F
        <button onClick={()=>Counter.dispatch('inc')}>+</button>
        <button onClick={()=>Counter.dispatch('dec')}>-</button>
        <button onClick={()=>Counter.dispatch('res')}>Reset</button>
    </div>
    </div>
  )
}
