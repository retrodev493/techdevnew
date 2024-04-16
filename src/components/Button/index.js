import React from 'react'
import './style.css'

const Button = (props) => {
  return (
      <button type={props.type ?? "button"} className={`btn ${props.variant} ${props.outline} `} {...props}> {props.name}</button>
  )
}

export default Button