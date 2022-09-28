import React from 'react'
import '../styles/Button.css'

export default function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && props.children !== '.' && props.children !== '='
  }
  return (
    <div 
      className={`buttonContainer ${isOperator(props.children)? 'operator' : ''}`.trimEnd()}
      onClick={()=> props.clickHandler(props.children)}>
      {props.children}
    </div>
  )
}
