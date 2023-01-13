import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todo from './components/Todo'
import Timer from './components/Timer'

function App() {
 
  return (
    <div className="App">
      <Timer/>
     <Todo/>
    </div>
  )
}

export default App
