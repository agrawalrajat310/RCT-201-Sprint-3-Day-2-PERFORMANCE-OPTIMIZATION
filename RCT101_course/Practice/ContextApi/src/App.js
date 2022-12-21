import {Route, Routes} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import React, {useContext} from 'react'
import { AuthContext } from './Context/AuthContext';

function App() {
  const {auth}=useContext(AuthContext)

  console.log(auth)
  return (
    <div className="App">
      {/* Home
      
      About
      Contact
      */}
<Routes>
<Route element={<Home/>} path="/"></Route>
<Route element={<About/>} path="/about"></Route>
<Route element={<Contact/>} path="/contact"></Route>
</Routes>


    </div>
  );
}

export default App;
