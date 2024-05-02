import React, { useState } from "react";
export default function Task4(){
    //there are four states =>currency1,currency2,inp1,inp2.
    const[currency1,setCurrency1]=useState('inr')
    const[currency2,setCurrency2]=useState('inr')
    const[inp1,setInp1]=useState(0)
    const[inp2,setInp2]=useState(0)
    let values={
        'inr to inr':1,
        'usd to usd':1,
        'euro to euro':1,
        'inr to usd':0.012,
        'inr to euro':0.044,
        'usd to inr':83.41,
        'usd to euro':3.67,
        'euro to inr':22.71,
        'euro to usd':0.27,



    }



    const changeCurrency1=(e)=>{
        setCurrency1(e.target.value)

    }
    const changeCurrency2=(e)=>{
        setCurrency2(e.target.value)
    }
    const changeInp1=(e)=>{
        setInp1(e.target.value)
        setInp2(e.target.value*values[`${currency1} to ${currency2}`])

    }   
    const changeInp2=(e)=>{
        setInp2(e.target.value)
        setInp1(e.target.value/values[`${currency1} to ${currency2}`])
        

    } 

    return(
        <div>
            <button>
                <select onChange={changeCurrency1}>
                    <option value="inr">Inr</option>
                    <option value="usd">USD</option>
                    <option value="euro">EURO</option>
                </select>
                

            </button>
            <input type="number" value={inp1} onChange={changeInp1}></input>
            <br></br>
            <button>
                <select onChange={changeCurrency2}>
                    <option value="inr">Inr</option>
                    <option value="usd">USD</option>
                    <option value="euro">EURO</option>
                </select>

            </button>
            
            <input type="number" value={inp2} onChange={changeInp2}></input>
            

        </div>
    )





}