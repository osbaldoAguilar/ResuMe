import React from 'react'
import { Link } from 'react-router-dom'
import ResumeHeader from '../../components/ResumeHeader'
import Jobs from '../../components/Jobs'
import Education from '../../components/Education'
import Skills from '../../components/Skills'
import About_Me from '../../components/About_Me'

const jobData = [
    {
        jobTitle: 'Human',
        company: 'Human Co',
        dateStart: '??',
        dateEnd: '??',
    },
    {
        jobTitle: 'Super-Human',
        company: 'Super-Human Co',
        dateStart: '??',
        dateEnd: '??',
    }
]


const Resume = () => (
    <div className="view-container about ">
         <ResumeHeader />
         <Jobs jobs={jobData}
         /*job1="Job(Current): CTD Intern"
         jobDes1="Job Descript: Front-end Developement"
         start1="Start Date: Agust 19 2019"
         end1="End Date: To Be Determeined"
         job2="Job:Fireplace/Mantel/Slate Installer"
         jobDes2="Job Descript: Installed fireplaces, mantels and slates to new construction and renovation both residential and commerical"
         start2="Start: June, 2010"
         end2="End: August 13, 2019"*/
        />
         <Education/>
         <Skills/>
         <About_Me/>
    </div>
)
export default Resume;
