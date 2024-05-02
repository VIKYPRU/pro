import React from "react";
export default function MethodProps(props){
    return(
        <div>
            <button onClick={()=>props.fn("Adam")}>click from children</button>
        </div>
    )
}