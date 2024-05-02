import React from 'react'

 function Title() {
    console.log("Title page")
  return (
    <div>Welcome to the App</div>
  )
}
export default React.memo(Title)//USED TO REDUCE THE RUNNING UNWATED COMPONENTS (CHECK IN CON.LOG)