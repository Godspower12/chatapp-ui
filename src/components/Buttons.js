import React from 'react'
import '../App.css';

const Buttons = ({type, placeholder, btn, value, onClick}) => {
  
  const handleClick =(e) => {
    const {value} = e.target;
    onClick(value)
  }
  
  return (
    <div className={btn}>
        <button type= {type} value= {value} onClick= {handleClick} >
        <label> {placeholder}
        </label>
        </button>
    </div>
  )
}

export default Buttons