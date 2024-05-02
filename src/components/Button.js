import React from 'react'

 function Button(props) {
  return (
    <div>
        <button onClick={props.handleClick}>click here</button>
    </div>
  )
}
export default React.memo(Button)