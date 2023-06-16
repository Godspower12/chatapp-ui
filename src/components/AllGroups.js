import React from "react";
import '../Style.css';
import SideBars from "../Layouts/SideBars";
import ChatArea from "./ChatArea";
import Menu from "../Layouts/Menu";

const AllGroups = () => {
   

  return (
    <div className="chat-app-container">
      <div className='menu-wrap'>
    <input type="checkbox" className='toggler' />
    <div className="hamburger"><div></div></div>
    <Menu />
    </div>

      <SideBars />
    
    <ChatArea/>
    </div>
  );
};

export default AllGroups;
