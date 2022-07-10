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
            <Link class="link" to="/"> About </Link>
            <Link class="link" to="/Portfolio"> Portfolio </Link>
            <Link class="link" to="/Resume"> Resume </Link>
            <Link class="link" to="/Contact"> Contact </Link>
        </div>
    </div>
  )
}

export default Navbar
