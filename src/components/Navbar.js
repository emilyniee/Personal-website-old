import React, { useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { FiMenu } from 'react-icons/fi';
import { IconContext } from "react-icons";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const location = useLocation();

  useEffect(()=> {
    setOpenNavbar(false);
  }, [location])

  return (
    <div className = "navbar" id = {openNavbar ? "open" : "close"}>
        <div className = "menuButton">
        <IconContext.Provider value={{  className: "menuIcon" }}>
          <button onClick = {()=>{setOpenNavbar((prev)=> !prev)}}><FiMenu/></button>
        </IconContext.Provider>
        </div>
        <div className = "pages">
            <div className = "navButton"><Link to = "/"> Home </Link></div>
            <div className = "navButton"><Link to = "/about"> About </Link></div>
            {/*<Link to = "/projects"> Projects </Link>*/}
        </div>
    </div>
  )
}

export default Navbar;