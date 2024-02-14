import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <div className="logo"><img src="brand_logo.png" alt="logo" /></div>
        <ul>
            <a href=""><li>Menu</li></a>
            <a href=""><li>Location</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Contact</li></a>
        </ul>
      
            <button className='nav-button'>Login</button>
        
    </nav>
    </>
  )
}

export default Navbar
