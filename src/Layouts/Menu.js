import React from 'react'
import Buttons from '../components/Buttons'
import '../Style.css';
import InputFields from './../components/InputFields';
import { Link } from 'react-router-dom';
import { Data } from '../components/Data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faTriangleCircleSquare} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from "react-redux";
import { showForm } from '../redux/user';
import { showFooter } from '../redux/footer';

const Menu = () => {

  const {footerValue} = useSelector(state => state.footer)
  

  const dispatch = useDispatch();

  
  return (
    <div className="menu">
    <div>
      <div>
          <div className='menu-header'>
          <Link to = '/'><h3>All Channels</h3></Link>
          <Buttons className= 'frontend-btn' onClick = {() => dispatch(showForm())} btn='btn' placeholder= '+'/>
          </div>
          <div className='search-icon'>
        <i className="fa fa-search" aria-hidden="true"></i>
        <InputFields styleClass='inputs' type="text" placeholder='Search...' />
        </div>
      
   {/* <GroupLists/> */}
   <div className="group-list">
   <Link to= './frontend'><div className="group1"><div className='acrn'>
    <p>FD</p></div><span>FRONTEND-DEVELOPERS</span></div></Link>
   
    <div className="group2"><div className="acrn"><p>R</p></div><span>RANDOM</span></div> 
       <div className="group3"><div className="acrn"><p>B</p></div><span>BACK-END</span> </div>
       <div className="group4"><div className="acrn"><p>CD</p></div><span>CATS AND DOGS</span></div>
       <div className="group5"><div className="acrn"><p>W</p></div><span>WELCOME</span></div>
      

   </div>

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

    </div>
    
  </div>
  )
}

export default Menu