import React from 'react'
import { Link } from 'react-router-dom'
//Same
const Job = (props) => (
    <div className="Job">
        <div className="Job">{props.job.jobTitle}</div>
        <div className="job-discript">{props.job.company}</div>
        <div className="start">{props.job.dateStart}</div>
        <div className="end">{props.job.dateEnd}</div>
        <br/>
        <div className="Job">{props.job2}</div>
        <div className="job-discript">{props.jobDes2}</div>
        <div className="start">{props.start2}</div>
        <div className="end">{props.end2}</div>
    </div>
)

export default Job;
