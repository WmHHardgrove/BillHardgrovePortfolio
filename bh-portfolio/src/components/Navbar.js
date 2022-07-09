import React from 'react';
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className='navbar'> 
        <div>
            <button> </button>
        </div>
        <div className='pagelinks'>
            <Link to="/"> Home </Link>
            <Link to="/AboutMe"> AboutMe </Link>
            <Link to="/Portfolio"> Portfolio </Link>
            <Link to="/Resume"> Resume </Link>
        </div>
    </div>
  )
}

export default navbar
