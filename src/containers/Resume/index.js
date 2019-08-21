import React from 'react'
import { Link } from 'react-router-dom'
import ResumeHeader from '../../components/ResumeHeader'
import Jobs from '../../components/Jobs'
import Educations from '../../components/Educations'
import Skills from '../../components/Skills'
import About_Me from '../../components/About_Me'

const jobData = [
    {
        jobTitle: 'Job:CTD Intern',
        company: 'Company: Code The Dream',
        descript:'Description: Front-end Developement',
        dateStart: 'Start: Agust 19 2019',
        dateEnd: 'End: TBD',
    },
    {
        jobTitle: 'Job: Installer',
        company: 'Company: Dickerson Hearth Products',
        descript:'Job Descript: Installed fireplaces, mantels and slates to new construction and renovation both residential and commerical',
        dateStart: 'Start: June 2010',
        dateEnd: 'End: July 2019',
    },
    { 
        jobTitle: '',
        company: '',
        descript:'',
        dateStart: '',
        dateEnd: '',
    },
]
const educationData = [
    {
        schoolName:'School: South Granville HighSchool',
        courseTitle:'Course: Highschool Diploma',
        educationStart:'Start: 2010',
        educationEnd:'End: 2012'
    },{
        schoolName:'School: Wake Tech Community College',
        courseTitle:'Course: Computer Scince',
        educationStart:'Start: 2015',
        educationEnd:'End: 2016'
    }
]


const Resume = () => (
    <div className="view-container about ">
         <ResumeHeader />
         <Jobs 
         jobs={jobData}
         /*job1="Job(Current): CTD Intern"
         jobDes1="Job Descript: Front-end Developement"
         start1="Start Date: Agust 19 2019"
         end1="End Date: To Be Determeined"
         job2="Job:Fireplace/Mantel/Slate Installer"
         jobDes2="Job Descript: Installed fireplaces, mantels and slates to new construction and renovation both residential and commerical"
         start2="Start: June, 2010"
         end2="End: August 13, 2019"*/
        />
         <Educations
         educations={educationData}
         />
         <Skills/>
         <About_Me/>
    </div>
)
export default Resume;
