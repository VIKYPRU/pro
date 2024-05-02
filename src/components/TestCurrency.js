import React, { useState } from 'react'

export default function TestCurrency() {
    const[inp1,setInp1]=useState(1)
    const[inp2,setInp2]=useState(1)
    const[currency1,setCurrency1]=useState("inr")
    const[currency2,setCurrency2]=useState("usd")
    let currencyValues ={
        inr:{usd:86.35,euro:90.20,ger:95.25,},
        usd:{inr:70.20,euro:90.20,ger:95.25,},
        euro:{usd:86.35,inr:70.20,ger:95.25,},
        ger:{usd:86.35,euro:90.20,inr:70.20,}
    }
  return (
    <div>
        <input type='number' value={inp1} onChange={(e)=>{setInp1(e.target.value);setInp2(e.target.value * currencyValues[currency1][currency2])}}></input>
        <select value={currency1} onChange={(e)=>{setCurrency1(e.target.value)}}>
        <option valu="inr">inr</option>
        <option value="usd">usd</option>
        <option value="euro">euro</option>
        <option value="ger">ger</option>
        </select>
        
        <br></br>
        <input type="number" value={inp2} onChange={(e)=>{setInp2(e.target.value);setInp1(e.target.value / currencyValues[currency1][currency2])}}></input>
        <select value={currency2} onChange={(e)=>{setCurrency2(e.target.value)}}>
        <option value="inr">inr</option>
        <option value="usd">usd</option>
        <option value="euro"> euro</option>
        <option value="ger">ger</option>
        </select>
    </div>
  )
}
 