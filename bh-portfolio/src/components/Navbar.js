import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function navbar() {
  return (
    <div className='navbar'> 
        <div className='toggleButton'>
            <button> </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/AboutMe"> AboutMe </Link>
            <Link to="/Portfolio"> Portfolio </Link>
            <Link to="/Resume"> Resume </Link>
        </div>
    </div>
  )
}

export default navbar
