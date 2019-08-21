import React from 'react'
import { Link } from 'react-router-dom'
//Template Layout for all other Components
const ResumeHeader = () => (
    <div className="Resume_header ">
        <div className="resume-name">Osbaldo Aguilar</div>
        <div className="email-address">osbaldoaguilar76@gmail.com</div>
        <div className="phone-number">(919) 673-6737</div>
        <div className="Github">
            <a target="blank" href="https://github.com/osbaldoAguilar">github Repository</a>
            </div>
        <hr/>
    </div>
)

export default ResumeHeader;