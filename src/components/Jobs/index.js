import React from 'react';
import Job from '../Job';

const Jobs = (props) => {
    const jobs=  props.jobs
    console.log('prop in jobs',props);
    const jobList = jobs.map((job)=>{
        return <Job job={job.fields} />
    })
    return(
        <ul className="job-list">
            {jobList}
        </ul>
    )
}
export default Jobs