import React from 'react'
import '../styles/Clear.css'

export default function Clear(props) {
  return (
    <div
    className='clearBtn'
    onClick={props.clickHandler}>Clear</div>
  )
}
