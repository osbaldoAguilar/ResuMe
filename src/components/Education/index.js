import React from 'react'
import { Link } from 'react-router-dom'
import { tsPropertySignature } from '@babel/types';
//rewrite from Template
const Education = (props) => (
    <div className="Education">
        <div className="SchoolName">{props.education.schoolName}</div>
        <div className="CourseName">{props.education.courseTitle}</div>
        <div className="SchoolStart">{props.education.educationStart}</div>
        <div className="SchoolEnd">{props.education.educationEnd}</div>
    </div>
)
/*
<div className="Highschool">South Granville Highschool<p>
            Grduated 2012</p></div>
        <div className="College">Wake Tech Community
            <p>Finished a year and a half didn't complete critera for Computer Science 2015-2016</p></div>
        <div className="Continue">OBD II Inspection<p>
            Automotive vehicle and Emissions Certified 2014</p></div>
        <div className="Course">CTD<p>
            Code the Dream Javascript and React Courses</p></div>
            */
export default Education;
