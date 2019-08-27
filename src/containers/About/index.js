import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
    <div className="view-container about ">
        <h3>About Osbaldo</h3>
        <p> <div className="About_Me">
        <p>
            Orign: Mexico<br/>
            DACA Recipient<br/>
        </p>
            </div>
        </p>
        <div className="cta-wrapper">
            <div><a target="_blank" href="https://www.codethedream.org/donate/">Donate</a></div>
            <div><a target="_blank" href="https://www.codethedream.org/">Learn More</a></div>
        </div>
    </div>
)

export default About;
