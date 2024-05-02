import React, { useState } from "react";
export default function Task3() {
    const [inr, setInr] = useState(82.35)
    const [usd, setUsd] = useState(1)
    const changeinr = (e) => {
        setInr(e.target.value)
        setUsd(e.target.value / 82.35)
    }
    const changeusd = (e) => {
        setUsd(e.target.value)
        setInr(e.target.value * 82.35)
    }

    return (

        <div>
            <button><label>Inr:</label></button>

            <input type="number" value={inr} onChange={changeinr}></input>

            <br></br>
            <button><label >Usd:</label></button>


            <input type="number" value={usd} onChange={changeusd}></input>


        </div>
    )





}