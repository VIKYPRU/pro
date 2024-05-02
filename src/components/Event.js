import React from "react";
import MethodProps from "./MethodProps";
export default function Event(){
    function abc(a){
        console.log(a)
    }
    return(
        <div>
            <MethodProps fn={abc}/>
            <button onClick={abc}>click here</button>
        </div>
    )

}