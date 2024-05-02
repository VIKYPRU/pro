import React, { useState } from 'react'
//HOC and updatedComponent are same

const updatedComponent=(OriginalComponent)=>{
    function NewComponent(prosp){
        const[count,setCount]=useState(0)
        const handleInc=()=>{
            setCount(count+1)
        }
        return<OriginalComponent count={count}
        handleInc={handleInc}{...prosp}/>
    }
    return NewComponent
}
export default updatedComponent

