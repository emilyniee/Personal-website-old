import React from 'react'
import '../styles/GraphicDesign.css';

import r2acLogo from "../images/r2aclogo.png";
import bloomRedLogo from "../images/bloomredlogo.webp";
import medlifeLogo from "../images/medlifelogo.png";

import painting1 from "../images/painting1.png";
import painting2 from "../images/painting2.png";
import painting3 from "../images/painting3.png";

import { AiOutlineInstagram , AiOutlineGlobal } from 'react-icons/ai';
import { IconContext } from "react-icons";

function GraphicDesign() {
    return (
      <div className="graphicDesign">
        <h1>Graphic Design</h1>

        <div className='experience'>
        <h2>Visual Arts</h2>
        <img src = {painting1} alt=""/>
        <img src = {painting2} alt=""/>
        <img src = {painting3} alt=""/>
        <p className='paragraph'>
          It's been 10 years since I picked up my first sketchbook. Since then, I've expanded my skills to include not just sketching, but acrylic painting, clay modelling and digital art. From there I went into the field of graphic design, learning softwares such as Figma, Adobe, Inkscape and Canva and working for various nonprofits. That eventually led me to explore frontend development, and work towards becoming a full stack developer. I believe art is a universal language, and that beautiful user interfaces greatly affect a person’s daily experience.
        </p>
      </div>
        
        <div className='experience'>
            <h2>Race to a Cure </h2>
            <h3>Social Lead</h3>
            <h4>Sept 2020 - Aug 2022</h4>
            <img src = {r2acLogo} alt=""/>
            <br></br>
            <IconContext.Provider value={{  className: "menuIcon", size: 30 }}>
              <a href="https://www.instagram.com/racetoacure/">
                <button><AiOutlineInstagram/></button>
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{  className: "menuIcon", size: 30 }}>
              <a href="https://www.racetoacure.org/">
                <button><AiOutlineGlobal/></button>
              </a>
            </IconContext.Provider>
            <p className='paragraph'>
              Race to a Cure is a national platform that strives to spread positivity admist the Covid-19 pandemic through reliable news, vaccine updates, research studies, webinars, and virtual camps. I joined Race to a Cure near its formation as one of the sole graphic designers. I worked overtime to kickstart the organization, creating logos, banners, color schemes, everything you can think of. I actively contributed and watched as my efforts led to results, which led to my promotion to Social Lead, where I lead a department of 30 people. During my time there, I was able to grow our follower base from 100 to 7000, and gain proficient graphic design skills.
            </p>
        </div>
  
        <div className='experience'>
            <h2>The Bloom Red Project</h2>
            <h3>Graphics Head</h3>
            <h4>Sept 2020 - July 2022</h4>
          <img src = {bloomRedLogo} alt=""/>
          <br></br>
            <IconContext.Provider value={{  className: "menuIcon", size: 30 }}>
              <a href="https://www.instagram.com/thebloomredproject/">
                <button><AiOutlineInstagram/></button>
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{  className: "menuIcon", size: 30 }}>
              <a href="https://www.thebloomredproject.org/">
                <button><AiOutlineGlobal/></button>
              </a>
            </IconContext.Provider>
          <p className='paragraph'>
          The Bloom Red Project is an organization that works to provide menstrual products to those in need and eradicate period stigma through educational campaigns. I worked as the Graphics Head and helped brand the organization, creating the logo using Inkscape and regularly working on promotional posts using Canva. Through public donation events in partnership with the City of Mississauga, we successfully raised over 5000 menstrual products to give to those in need.
          </p>
        </div>

        <div className='experience'>
          <h2>MEDLIFE</h2>
          <h3>Social Media Coordinator</h3>
          <h4>Sept 2021 - June 2022</h4>
          <img src = {medlifeLogo} alt=""/>
          <br></br>
            <IconContext.Provider value={{  className: "menuIcon", size: 30 }}>
              <a href="https://www.instagram.com/medlifejfss/?hl=en">
                <button><AiOutlineInstagram/></button>
              </a>
            </IconContext.Provider>
          <p className='paragraph'>
          MEDLIFE is a non-profit organization that aids low-income communities in Latin America and Africa. I worked at my school’s chapter as the Social Media Coordinator, leading a team of over 30 general members in creating promotional material. One of our most successful events would have been MEDLIFE week, a week-long fundraising event that raised over 1000 USD.
          </p>
        </div>
        
        
      </div>  
    )
  }
  
  export default GraphicDesign