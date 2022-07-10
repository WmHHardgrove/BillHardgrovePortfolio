import React from 'react'
import logo from '../img/logo2.PNG'
import "../styles/AboutMe.css"

function Experience() {
  return (
    <div>
      <div>
        <img className='avitar' src={ logo } alt= "Avitar of Bill" />
        <h2 className='title'>About Me</h2>
          <h3 className='header'>Brand Statement</h3>
            <p className='paragraph'>Expert people and process manager with a passion for lifelong learning. Looking to utilize new full stack web development certification from The Ohio State University department of Engineering to help organizations problem-solve and improve customer experience through technology.  Pulling experience from varied parts of my background, most notably as a fine dining restaurant manager and as chairperson of the docent council at the Columbus Museum of Art, I have been able to implement my new knowledge of web development to collaborate on a single-page MERN app that allows attendees of conferences to enroll in symposiums and view their schedule.  I am seeking an opportunity to expand my skill set while contributing to a fast-paced, dynamic team that delivers quality user experiences.</p>
          <h3 className='header'>Volunteering</h3>
            <p className='paragraph'>I act as the head of the docent corps of over 100 dedicated volunteers.  I work closely with Columbus Museum of Art (CMA) staff on our Inclusivity, Diversity, Equality and Accessibility (IDEA)  committee modeled  on the works of Harvard's Project  Zero  and  the American Alliance of Museums (AAM) Facing Change, to improve the space for all involved.  Beyond organization, being a docent is about guiding tours with an educators outlook.  We focus far less on art history and try to make personal connections with the visitor to the art they observe.  Socratic questioning, along with thought prompts, excel the experience towards evoked emotions.  Art history, as well as educational technique training, are a necessity to facilitate these experiences.  The end goal is to have each visitor connect to something and have a "WOW" moment.</p>
      </div>
    </div>
  )
}
export default Experience