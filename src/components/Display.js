import React from 'react'

 function Display(props) {
    console.log(`hell from ${props.name}`)
  return (
    <div>
        {props.name} ---{props.display}
    </div>
  )
}
export default React.memo(Display)//=>TO REDUCE COMPONENTS IN CON.LOG