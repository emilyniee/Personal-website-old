import React from 'react'
import '../styles/About.css';
import painting1 from "../images/painting1.png";
import painting2 from "../images/painting2.png";
import painting3 from "../images/painting3.png";

function About() {
  return (
    <div className="AboutMe">
      <h1>About</h1>
      <div className='paintings'>
        <img className='painting' src = {painting1} alt=""/>
        <img className='painting' src = {painting2} alt=""/>
        <img className='painting' src = {painting3} alt=""/>
      </div>
      <p>Hi! My name is Emily Nie and I’m a first year CS student at the University of Waterloo. I’m interested in becoming a full stack developper, and I hope to solve modern healthcare problems through technology. In my spare time, I enjoy dancing, painting and playing a variety of video games.
</p>
    </div>  
  )
}

export default About