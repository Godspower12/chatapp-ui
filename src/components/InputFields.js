import React from 'react';
import '../App.css'

const InputFields = ({type, placeholder, value, styleClass}) => {
  return (
    <div className= {styleClass}>
        <input type= {type} placeholder={placeholder} value = {value}  />
    </div>
  )
}

export default InputFields