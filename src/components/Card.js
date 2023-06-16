import React from 'react'
import Buttons from './Buttons'
import InputFields from './InputFields'
import '../Style.css';
import {useSelector, useDispatch} from "react-redux";
import { showForm } from '../redux/user';

const Card = () => {
    
const {userValue} = useSelector(state => state.user)
 const dispatch = useDispatch()
    
   
    return (
      <>
      <div  className="background">
      <div onClick={() => dispatch(showForm())} className={`${userValue ? "show-background": "hide-background"}`}>  
           </div> 
      </div>
        <div className='card'>
    <div className='form'> 
        <form>
            <h3>NEW CHANNEL</h3>
         <InputFields styleClass= 'card-input1' type='text'  placeholder= 'Channel Name' onChange = {(e) => e.target.value}/>
         <textarea className= 'card-input2' type='text' placeholder= 'Channel Description' onChange = { (e) => e.target.value}/>
           <div className="card-btn">
         <Buttons onClick = {() => dispatch(showForm())} btn= 'btn-submit' placeholder= 'Save'/>
           </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Card