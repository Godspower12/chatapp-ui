
import React from 'react'
import './Style.css';
import Card from './components/Card';
import Home from './Layouts/Home';
import {useSelector} from "react-redux";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FrontendGroup from './components/FrontendGroup';

const App = () => {
    const {userValue} = useSelector(state => state.user)
  
  return (  
    <Router>
    <div className='main-content'>
    {userValue && <Card />}
    
    <div className='home'>
    <Routes>
    
       <Route path='/' element={ <Home />}/>
          <Route path='/frontend' element = {<FrontendGroup />}/>
         </Routes>
     
    </div>
    </div>
    </Router>
  )
}

export default App








































// import './App.css';
// import GroupChat from './Layouts/GroupChat';
// import SideBars from './Layouts/SideBars';
// import {useState} from 'react';
// import Card from './components/Card';
// import Home from './Layouts/Home';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import FrontendGroup from './components/FrontendGroup';

// function App() {
// const [showForm, setShowForm]= useState(false);

// console.log(showForm)
//   return (
//     <Router>
//     <div className='App'>
//       <div className="menu-wrap">
//         <input type="checkbox"  className='checkbox'/>
//       <div className="hamburger"><div></div></div>
//       {/* </div> */}
      
//       {showForm && <Card/>}
//       <Routes>
    
//      <Route path='/' element={ <Home showForm = {showForm} setShowForm= {setShowForm}/>}/>
//      <Route path='/frontend' element = {<FrontendGroup/>}/>
//     </Routes>
//     </div>
//     </div>
//     </Router>
//   );
// }

// export default App;
