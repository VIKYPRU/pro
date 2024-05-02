import React from 'react'

// using children props and fragement tags

function Hello(props){
    return(
        <>
        <h1>Welcome{props.name} <h5>His age is {props.age}</h5></h1>
        {props.children}
        </>
    )
}
export default Hello;