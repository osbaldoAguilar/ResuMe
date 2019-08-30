import React from 'react'
//import Skills from "../Skills";
 


//Same
const  Skill= (props) => {
    
    console.log('skill props', props)
    return (
    <div className="Skill">
        <div className="Skill">{props.skill.Skill}</div>
        <div className="Info">{props.skill.Info}</div>
    </div>
)
}
export default Skill;
