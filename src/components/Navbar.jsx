import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header className="navbar-container">
    <Link to='/' className='link'>
    
    <div className="company-title">
        <h1 className="logo">
            BiteBuddy
        </h1>
        </div> </Link>
      <div className="search-container">
        <FaSearch/>
        <input type="search" className="search-bar" placeholder='Search Item'/>
      </div>
      <div className="user-auth">
        <h1 className='login'>Login/SignUp</h1>
      </div>
    </header>
  )
}

export default Navbar