import React from 'react'
import { Link } from 'react-router-dom'
import ResumeHeader from '../../components/ResumeHeader'
import Job from '../../components/Job'

const Resume = () => (
    <div className="view-container about ">
         <h3>Resume Page</h3>
         <ResumeHeader />
        <Job/>
       
    </div>
)

export default Resume;
