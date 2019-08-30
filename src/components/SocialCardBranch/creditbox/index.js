import React from 'react';

const CreditBox = props => (
    <div className="credit-box">
        <p className="credit-box_name">{props.name}</p>
        <img src={props.creditImageURL} alt="person" className="credt-box_headshot"/>
    </div>
);

export default CreditBox;