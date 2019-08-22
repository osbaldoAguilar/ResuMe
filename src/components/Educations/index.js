import React from 'react';
import Education from '../Education';

const Educations = (props) => {
    const educations= props.educations
    console.log('props in education',props);
    const educationList = educations.map((education)=>{
        return <Education education={education.fields} />
    })
    return(
        <ul className="education-list">
            {educationList}
        </ul>
    )
}
export default Educations;