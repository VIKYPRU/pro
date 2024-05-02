import React, { useState } from "react";
export default function State() {
    const [name, setName] = useState('vicky')
    function changeName() {
        setName(' vignesh')
        //SETNAME IS USED TO CHANGE THE NAME
    }
    return (
        <div>
            <h1>Welcome{name}</h1>
            <button onClick={changeName}>change</button>
        </div>
    )




}