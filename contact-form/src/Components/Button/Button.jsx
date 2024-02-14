import React from 'react'
import './Button.css'
const Button = ({text,icon,isOutline}) => {

  
  return (
    <button className={isOutline?'outline-btn' :'primary-btn'}>
{icon} {text}
    </button>
  )
}

export default Button
