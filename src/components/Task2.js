import React, { useState } from "react";

export default function Task2(){
    const[name,setName]=useState('NO')
    function changeName1(){
        if(name)
        setName('YES')

    }
    return(
        <div>
            <h1>{name}</h1>
<button onClick={changeName1}>Toggle</button>
        </div>

    )
    

}

