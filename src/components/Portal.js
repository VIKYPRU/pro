import React from 'react'
import  ReactDOM  from 'react-dom'

export default function Portal() {
  return ReactDOM.createPortal(
    <div>HELLO WORLD</div>,
    document.getElementById('Portal')
  )
}
