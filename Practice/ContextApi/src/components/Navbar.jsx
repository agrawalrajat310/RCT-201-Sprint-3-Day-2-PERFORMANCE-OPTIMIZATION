import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        {/* Home, About, contact */}

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar