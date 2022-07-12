import React from 'react';
import git  from "../assets/github.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import "../styles/Footer.css"




function Footer() {
  return (
    <div className='footer'>
      <div>
        <a href="https://github.com/WmHHardgrove" target="_blank" rel="noreferrer">
          <img
            src= { git }
            alt="git icon"
          />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/bill-hardgrove-27768b53/" target="_blank" rel="noreferrer">
          <img
            src= { linkedin }
            alt="linkedin icon"
          />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/wmhhardgroveiv/" target="_blank" rel="noreferrer">
          <img
            src= { insta }
            alt="instagram icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer

