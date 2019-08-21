import React from 'react';
import Education from '../Education';

const Educations = (props) => {
    const educations= props.educations
    const educationList = educations.map((education)=>{
        return <Education education={education} />
    })
    return(
        <ul className="education-list">
            {educationList}
        </ul>
    )
}
export default Educations;