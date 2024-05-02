import React from 'react'

export default function Product(props) {
    if (props.name === "Samsung"){
        throw new Error('cannot show this product')
    }
  return (
    <div>{props.name}</div>
  )
}
