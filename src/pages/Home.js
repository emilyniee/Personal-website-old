import React from 'react'
import '../styles/Home.css';
import MyPhoto from "../images/website-photo.png";
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { IconContext } from "react-icons";

function Home() {
  return (
    <div className = "home">
      <img className = "pfp" src = {MyPhoto} alt=""/>
      <h1 className = "intro">Hi! I'm Emily Nie</h1>
      <div>
        <IconContext.Provider value={{  className: "menuIcon", size: 30 }}>
          <a href="https://github.com/latiu">
            <button><AiOutlineGithub/></button>
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{  className: "menuIcon", size: 30 }}>
            <a href="https://www.linkedin.com/in/emily-nie-279a021b2/">
              <button><AiFillLinkedin/></button>
            </a>
        </IconContext.Provider>
        </div>
    </div>  
    
  )
}

export default Home