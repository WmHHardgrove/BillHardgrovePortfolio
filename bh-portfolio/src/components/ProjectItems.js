import React from 'react';
import Git  from "../assets/github.png";
import Link from "../assets/Link.png";
import repo from "../pages/Portfolio";
import live from "../pages/Portfolio";

function ProjectItems({ image, name, repo, live}) {
  return (
    <div className='projectitems'>
      <div style={{ backgroundImage: `url(${image})`}} className="bImage" >
      <h1 className='projname'> {name} </h1>
        <a className='icons' href={ repo } target="_blank" rel="noreferrer" >
          <img
            src= { Git }
            alt="Git Icon"
          />
        </a>
        <a className='icons' href={ live } target="_blank" rel="noreferrer" >
          <img
            src= { Link }
            alt="Link Icon"
          />
        </a>  
    </div>
    </div>
  );
  } 

export default ProjectItems;