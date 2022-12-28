import React from 'react';
import './App.css';
import {useSelector, useDispatch}  from 'react-redux'
import Todos from './components/Todos';


function App() {

  return (
    <div className="App">
 <Todos/>

    </div>
  );
}

export default App;
