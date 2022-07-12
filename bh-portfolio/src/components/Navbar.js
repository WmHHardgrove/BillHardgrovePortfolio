import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"



function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className='navbar'  id={expandNavbar ? "open" : "close"}> 
        <div className='toggleButton'>
            <button className='nav-toggle' aria-label="toggle navigation"
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
              <span className='hamburger'></span>
            </button>
        </div>
        <div>
          
        </div>
        <div className='links'>
            <p className="name">Bill Hardgrove</p>
            <Link className="link" to="/"> About </Link>
            <Link className="link" to="/Portfolio"> Portfolio </Link>
            <Link className="link" to="/Resume"> Resume </Link>
            <Link className="link" to="/Contact"> Contact </Link>
        </div>
    </div>
  )
}

export default Navbar
