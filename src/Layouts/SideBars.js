import React from 'react';
import '../App.css'
import '../Style.css'
import Buttons from '../components/Buttons';
import GroupLists from '../components/GroupLists';
import InputFields from './../components/InputFields';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faTriangleCircleSquare} from '@fortawesome/free-solid-svg-icons';
import { Data } from '../components/Data';
import {useSelector, useDispatch} from "react-redux";
import { showForm } from '../redux/user';
import { showFooter } from '../redux/footer';

const SideBars = () => { 
  
  const {footerValue} = useSelector(state => state.footer)
  

  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
         <div className="side-bar-contents">
        <h3>Channels</h3>
        <Buttons onClick = {() => dispatch(showForm())} btn='btn' placeholder= '+'/>
        </div>
        <div className='search-icon'>
         <FontAwesomeIcon className =  'icons' icon= {faSearch}/> 
         <InputFields styleClass='inputs' type="text" placeholder='Search...' />
        </div> 
        <GroupLists/>
        
        
      
        <div className="members-footer"> 
          <div className="images"><img src={Data[0].image} alt="img" /></div>
          <span>{Data[0].username}  </span> 
          <i className="fa fa-chevron-down" aria-hidden="true" onClick={() => dispatch(showFooter())}></i>
        {footerValue && <div className="submenu">
          <ul>
           <li><FontAwesomeIcon className =  'icons' icon= {faUser}/> My profile</li>
          <li><FontAwesomeIcon className =  'icons' icon= {faTriangleCircleSquare}/> Tweeter</li>
            <hr/>
             <li  className='logout'><FontAwesomeIcon className =  'icons' icon= {faRightFromBracket}/> Logout</li>
          </ul>
          </div>}
        </div>

        </div>
  )
}

export default SideBars




