import React from 'react'
import { Link } from 'react-router-dom'
import git from "../../assets/images/git.png"
import link from "../../assets/images/linkedin.png"
//Template Layout for all other Components
const ResumeHeader = () => (
    <div className="Resume_header ">
        <div className="resume-name">Osbaldo Aguilar</div>
        <div className="email-address">osbaldoaguilar76@gmail.com</div>
        <div className="phone-number">(919) 673-6737</div>
        <div className="Github">
            <a className="gitPic" target="blank" href="https://github.com/osbaldoAguilar"><img src={git}></img></a>
            </div>
            <a className="linkIn" target="blank" href="https://www.linkedin.com/in/osbaldo-aguilar-41ba06182/"><img src={link}></img></a>
        <br/>
    </div>
)

export default ResumeHeader;