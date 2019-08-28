import React from 'react'


const CalNumber =(props)=>(

    <div className="CalNumber calButt" onClick={() =>
        props.handleButtonClick(props.value)}>
        {props.value}
    </div>
)

export default CalNumber