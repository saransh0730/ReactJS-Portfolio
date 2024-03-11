import "./MainImgStyle.css"
import React from 'react'
// import IntroImg from "../assets/bg2.jpg"
import { Link } from "react-router-dom"
import video from "../assets/vid2.mp4"
function MainImg() {
  return (
    <div className="main">
    <div className="mask">
         {/* <img className="into-img" src={IntroImg} alt="IntroImg"/>          */}
        <video autoPlay loop muted className="into-img">
          <source src={video} type="video/mp4"/>
        </video>
    </div>
    <div className="content">
        <p>HI, I'M SMITH JACKSON</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default MainImg