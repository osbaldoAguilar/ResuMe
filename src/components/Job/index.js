import React from 'react'
import { Link } from 'react-router-dom'
//Same
const Job = (props) => {
    
    console.log('job props', props)
    return (
    <div className="Job">
        <div className="Job">{props.job.jobTitle}</div>
        <div className="jobCompany">{props.job.company}</div>
        <div className="jobDescript">{props.job.descript}</div>
        <div className="start">{props.job.dateStart}</div>
        <div className="end">{props.job.dateEnd}</div>  
    </div>
)
}
/*
<br/>
        <div className="Job">{props.job2}</div>
        <div className="job-discript">{props.jobDes2}</div>
        <div className="start">{props.start2}</div>
        <div className="end">{props.end2}</div>
        */
export default Job;
