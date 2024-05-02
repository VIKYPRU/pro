import React from 'react'
import updatedComponent from './HOC'


 function Counter11(props) {
   
  return (
    <div>
    
        {props.name}
        <button onClick={props.handleInc}>{props.count}</button>
    </div>
  )
}
export default updatedComponent(Counter11)
