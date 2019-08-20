import React from 'react';
import Job from '../Job';

const Jobs = (props) => {
    const jobs= props.jobs
    const jobList = jobs.map((job)=>{
        return <Job job={job} />
    })
    return(
        <ul className="job-list">
            {jobList}
        </ul>
    )
}
export default Jobs