import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

const Contact = () => {
    const {handleSignOut}=useContext(AuthContext)

  return (
    <div>Contact

        <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Contact