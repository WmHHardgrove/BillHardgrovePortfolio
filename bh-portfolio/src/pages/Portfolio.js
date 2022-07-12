import React from 'react';
import ProjectItems from '../components/ProjectItems';
import Wiki from "../assets/TheOneWiki.png";
import Atlas from "../assets/AtlasChefHomePage.png";

import "../styles/Portfolio.css"


function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>My Projects</h1>
      <div className='projectList'>
        <ProjectItems name="The One Wiki" image={Wiki} repo="https://github.com/marcu0912/Lord-of-The-Rings-Character-Search" live="https://marcu0912.github.io/Project-1/" />
        <ProjectItems name="Atlas Chef" image={Atlas} />
      </div>
    </div>
  );
}

export default Portfolio