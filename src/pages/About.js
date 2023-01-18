import React from 'react'
import '../styles/About.css';
import me from "../images/me.JPG";

function About() {
  return (
    <div className="aboutMe">
      <h1>About Me</h1>
      <img className='myphoto' src = {me} alt=""/>
      <p className='description'>
      Hi! My name is Emily Nie and I’m a first-year Computer Science student at the University of Waterloo. I strive to not just code, but code with the purpose of transforming the world around me. I hope to develop innovative technology with stunning UI/UX design, allowing for people around me to live easier and happier lives. In my spare time, you’ll catch me in a dance studio or at a gaming PC.
      </p>
      
      
    </div>  
  )
}

export default About