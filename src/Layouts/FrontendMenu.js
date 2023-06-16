import React from 'react'
import '../Style.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { Data } from '../components/Data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faTriangleCircleSquare} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from "react-redux";
import { showFooter } from '../redux/footer';




const FrontendMenu = () => {

  const {footerValue} = useSelector(state => state.footer)

  const dispatch = useDispatch();
  return (
    <div className="menu1">
    <div>
      <div>
      <div className="side-bar-contents">
          <div className="all-channels">
          <Link to ='/'><span>&#10094;</span>
          <h3>All Channels </h3></Link>
          </div>
        
        </div>
        <div className="side-bar-header">
        <h2>Frontend-Developers</h2>
        <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit.
           Dolores earum quisquam dignissimos
            nulla officia consectetur vel pariatur 
            sunt veniam. Rem!</p>
        </div>


        <div className="contents">
            <div>
          <div className="member">MEMBERS</div>
         <div className='Frontend-memb' >
        {Data.map((item) => (
          <div className="members-profile" key={item.id}> 
              <div className="memberList"><div className="images"><img src={item.image} alt="img" /></div><span>{item.username}</span></div>
         </div>
       )) }
       </div>

         
             
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
  </div>
  )
}

export default FrontendMenu