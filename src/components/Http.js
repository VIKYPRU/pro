import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Http() {
     const[list,setList]=useState([])
    const[id,setId]=useState([])
    useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>setList(res.data))
       .catch(err=>{console.log(err)})
    },[id])
  return (
    <div>
        {list.title}
        {/* {list.map(x=><p>{x.title}</p>)} */}
        {/* <input type='number' value={id} onChange={(e)=>{setId(e.target.value)}}></input> */}


    </div>
  )
}
