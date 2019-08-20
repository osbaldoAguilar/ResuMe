import React from 'react'
import { Link } from 'react-router-dom'
import ResumeHeader from '../../components/ResumeHeader'
import Job from '../../components/Job'
import Education from '../../components/Education'
import Skills from '../../components/Skills'
import About_Me from '../../components/About_Me'

const Resume = () => (
    <div className="view-container about ">
         <ResumeHeader />
         <Job/>
         <Education/>
         <Skills/>
         <About_Me/>
    </div>
)
export default Resume;
