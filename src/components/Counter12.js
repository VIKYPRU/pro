import React from 'react'
import updatedComponent  from './HOC'
function Counter12(props){
    return(
        <div>
             <button onMouseOver={props.handleInc}>{props.count}</button>
           
        </div>
    )

}
export default updatedComponent(Counter12)