import React from 'react'
import { Link } from 'react-router-dom'
import ResumeHeader from '../../components/ResumeHeader'
import Jobs from '../../components/Jobs'
import Educations from '../../components/Educations'
import Skills from '../../components/Skills'
import About_Me from '../../components/About_Me'

class Resume extends React.Component{
    constructor(props){
        super(props);
            this.state={
                loading:false,
                jobs:[],
                educations:[],
                skills:[]
            }
    }
/*************************************** */
    componentDidMount(){
        this.getJobs();
        this.getEducation();
        this.getSkills();
    }

/**************************************** */
    getJobs(){
        const url= "https://api.airtable.com/v0/apppHw5AjzAhNzUkY/Jobs%20Had?"
        
            fetch(
                url,
                    {
                        headers:{ Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY } 
                    }

                )
        .then(response=> response.json())
        .then(responseData=>{
            console.log('Job Data',responseData);
                const jobs = responseData.records;
                this.setState({jobs:jobs});
        })
    }//END of getJobs
    /*********************************** */
    getEducation(){
        const url= "https://api.airtable.com/v0/apppHw5AjzAhNzUkY/Education%20Had?"
        
            fetch(
                url,
                    {
                        headers:{ Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY } 
                    }

                )
        .then(response=> response.json())
        .then(responseData=>{
            console.log('Education Data',responseData);
                const educations = responseData.records;
                this.setState({educations:educations});
        })
    }//End of getEducation
    /*************************************************************************** */
    getSkills(){
        const url= "https://api.airtable.com/v0/apppHw5AjzAhNzUkY/Skills%20Had??"
        
            fetch(
                url,
                    {
                        headers:{ Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY } 
                    }

                )
        .then(response=> response.json())
        .then(responseData=>{
            console.log('Skill Data',responseData);
                const skills = responseData.records;
                this.setState({skills:skills});
        })
    }//End of getSkills

    render(){
        

            return(
                <div>
                    <ResumeHeader/>
                        <h6>Work Xp</h6>
                    <Jobs
                        jobs={this.state.jobs}
                        />
                        <br/>
                        <h6>Education</h6>
                    <Educations
                        educations={this.state.educations}
                        />
                    <Skills
                        skills={this.state.skills}
                        />
                        <br/>
                </div>
            )
    } 

};

export default Resume;

/*
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
]*/




/*
const Resume = () => (
    <div className="view-container ">
         <ResumeHeader />
         <h6>Work Xp</h6>
         <Jobs 
         jobs={jobData}
         /*job1="Job(Current): CTD Intern"
         jobDes1="Job Descript: Front-end Developement"
         start1="Start Date: Agust 19 2019"
         end1="End Date: To Be Determeined"
         job2="Job:Fireplace/Mantel/Slate Installer"
         jobDes2="Job Descript: Installed fireplaces, mantels and slates to new construction and renovation both residential and commerical"
         start2="Start: June, 2010"
         end2="End: August 13, 2019"
        />
        <h6>Education</h6>
         <Educations
         educations={educationData}
         />
         <Skills/>
         <About_Me/>
    </div>
)*/

