import React, { useState } from 'react'

const Counter = () => {
const [state, setstate] = useState(0);

  return (
    <div>
    <h1> {state}</h1> 
      
      <button onClick={()=>setstate(state+1)}>Add</button>
      <button  onClick={()=>setstate(state+1)}>Sub</button>
      
      </div>
  )
}

export default Counter