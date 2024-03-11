import "./FooterStyles.css"
import React from 'react'
import { FaHome,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p> 437 Housing Society. </p>
                        <p> East London </p>
                    </div>
                </div>
                <div className="email">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                +44 20 7123 4567 </h4>
                </div>
                <div className="phone">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                jackson.smith255@gmail.com </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>Hey there!👋 I'm Smith Jackson, I'm a freelancer.
                I enjoy discussing new projects and design challenges. Let's create something awesome together! 🚀</p>
                <div className="social">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer