import React, { useState } from "react";
export default function Counter(){
     const[count,setCount]=useState(0)

    const changecount=()=>{
        if(count!=10){
        setCount(count +1)}

        //count is a varible that store the value 0
    }
    const changecount1=()=>{
        if (count!=0){
        setCount(count -1)}
    }
    return(
        <div>
            Count-{count}
            <button onClick={changecount}>increment</button>
            <button onClick={changecount1}>decrement</button>

        </div>
    )
}
    