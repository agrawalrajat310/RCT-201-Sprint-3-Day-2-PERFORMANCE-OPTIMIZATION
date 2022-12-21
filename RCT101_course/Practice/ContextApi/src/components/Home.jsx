import React, {useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

const Home = () => {

    const {auth, handleSignIn, handleSignOut}=useContext(AuthContext)

  return (
    <div>Home

        <button onClick={handleSignIn}> Login</button>

        <h1>{auth ? "True" : "False" }</h1>
        <button onClick={handleSignOut}> Logout</button>

    </div>
  )
}

export default Home