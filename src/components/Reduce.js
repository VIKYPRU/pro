import React, { useReducer } from 'react'

export default function Reduce() {
    const intialstate=0
    const reducer=(state,action)=>{
        switch(action){
            case'Increment':return state+1
            case'Decrement':return state+1
            case'Reset':return intialstate
            default:return state
        }
       

    }
    const[count,dispatch]=useReducer( reducer,intialstate)
    
  return (
    <div>
        {count}
        <button onClick={()=>dispatch('Increment') }>Increment</button>
        <button onClick={()=>dispatch('Decrement')}>Decrement</button>
        <button onClick={()=>dispatch('Reset')}>Reset</button>
        <br></br>
        <button onMouseOver={()=>dispatch('Increment') }>Increment</button>
        <button onMouseOver={()=>dispatch('Decrement')}>Decrement</button>
        <button onMouseOver={()=>dispatch('Reset')}>Reset</button>

    </div>
  )
}
