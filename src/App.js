import './App.css';
import React, { useState } from 'react'
import SignUp from './Projects.js/SignUp';

import Register from './Projects.js/Register';
import NavBar from './Projects.js/NavBar';
function App() {
  const [currrentform,setcurrentform] = useState('login')
  const toggle=(formname)=> {
    setcurrentform(formname)
  }


  return (

    <div className='App'>
      {currrentform === 'login' ? <SignUp handler={toggle} /> : <Register handler={toggle} />} 
      {/* <NavBar /> */}
    </div>

  )
}

export default App

