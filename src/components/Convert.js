import React, { useEffect, useState } from 'react'
export default function Convert() {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('hi vicky')

    },[name])//=>[]this symbol is used to give value in the console

    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>clicked{count}times </button>
            <button onClick={()=>{setCount1(count1 +1)}}>clicked{count1}times1</button>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value) }}></input>
        </div>
    )
}
