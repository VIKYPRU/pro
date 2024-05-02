import React, { useState } from "react";
export default function Task5() {


    const [values, setValues] = useState('')
    const clear=()=>{
        if(values.length>0){
            setValues(values.slice(0,-1))
        }
    }
    console.log(typeof(values));
    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" value={values} ></input><br></br>
            <button type="button" onClick={() => { setValues(values + '1') }} >1</button>
            <button type="button" onClick={() => { setValues(values + '2') }}>2</button>
            <button type="button" onClick={() => { setValues(values + '3') }}>3</button><br></br>
            <button type="button" onClick={() => { setValues(values + '4') }}>4</button>
            <button type="button" onClick={() => { setValues(values + '5') }}>5</button>
            <button type="button" onClick={() => { setValues(values + '6') }}>6</button><br></br>
            <button type="button" onClick={() => { setValues(values + '7') }}>7</button>
            <button type="button" onClick={() => { setValues(values + '8') }}>8</button>
            <button type="button" onClick={() => { setValues(values + '9') }}>9</button><br></br>
            <button type="button" onClick={() => { setValues(values + '0') }}>0</button><br></br>
            <button type="button" onClick={() => { setValues(values + "+") }}>+</button>
            <button type="button" onClick={() => { setValues(values + '-') }}>-</button>
            <button type="button" onClick={() => { setValues(values + '*') }}>*</button>
            <button type="button" onClick={() => { setValues(values + '/') }}>/</button><br></br>
            <button type="button" onClick={() => { setValues(eval(values)+'') }}>=</button><br></br>
            <button type="button" onClick={clear}>clear</button>
        </div>
    )














}