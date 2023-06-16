import React from 'react'
import { Link } from 'react-router-dom'
import { Data } from './Data';

const GroupLists = () => {
  return (
    <div className="main-group">
    <div className='groups' >
    
    <Link to= './frontend'><div className="group1"><div className="acrn"><p>FD</p></div><span>FRONTEND-DEVELOPERS</span></div></Link>
       <div className="group2"><div className="acrn"><p>R</p></div><span>RANDOM</span></div> 
       <div className="group3"><div className="acrn"><p>B</p></div><span>BACK-END</span> </div>
       <div className="group4"><div className="acrn"><p>CD</p></div><span>CATS AND DOGS</span></div>
       <div className="group5"><div className="acrn"><p>W</p></div><span>WELCOME</span></div>
       
    </div>


    

    </div>
  )
}

export default GroupLists