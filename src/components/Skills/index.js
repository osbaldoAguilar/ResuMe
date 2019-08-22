import React from 'react';
import Skill from '../Skill';

const Skills = (props) => {
    const skills=  props.skills
    console.log('prop in skills',props);
    const skillList = skills.map((skill)=>{
        return <Skill skill={skill.fields} />
    })
    return(
        <ul className="skill-list">
            {skillList}
        </ul>
    )
}
export default Skills;









/*import React from 'react'
import { Link } from 'react-router-dom'
//Template Layout used
const Skills = () => (
    <div className="Skills ">
        <h6>Skills/Languages</h6>
        <div className="Code">Coding: Java,Javascript,React</div>
        <div className="Speak">Spoken: English & Spanish</div>
        <div className="Quality">Focused</div>
        <hr/>
    </div>
)

export default Skills;
*/