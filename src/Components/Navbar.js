// navbar


import React from 'react'
import image from "../images/logosensor.png"

import "../CSSfolder/Navbar.css"


const Navbar = () => {
  return (
    <div className="uppernav">
    
      <div className="innernav">
      <ul>
      <li><div>
      <img src={image}></img>
      {/* creating sources of navbar */}
    </div></li>
        <li>Users</li>
        <li>Albums</li>
        <li>Photos</li>
        </ul>


      </div>
    </div>
  )
}

export default Navbar
