import React from 'react';
import { Data } from "./Data";
import InputFields from "./InputFields";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'; 
import '../Style.css';

const ChatArea = () => {
  return (
    <div className='chatarea'>
<div className="chat-app">
      <header>
        <h1>Front-end Developers</h1>
      </header>
      <div className="container">
        {Data.map((item) => (
          <div className="members-chat" key={item.id}>
            <div className="images">
              <img src={item.image} alt="img" />
            </div>
            <div className="details">
              <div className="nameDate">
                <h4>{item.username}</h4>
                <p>{item.date}</p>
              </div>
            <div className="msgs">
              <p>{item.msg} <span>&#x1F603;</span></p>

            </div>
            </div>
          </div>
        ))}
      
      </div>
        <div className="footerInput">
          <InputFields styleClass = 'footer-input'type= 'text' placeholder= 'Type a message'/>
          

          <div className="send-icon-container">
          <div className="send-icon">
            <FontAwesomeIcon icon = {faLocationArrow} className='icon-send' rotation={90} size='2x' /> 
          </div>

          </div>
        </div>
    </div>

    </div>
  )
}

export default ChatArea