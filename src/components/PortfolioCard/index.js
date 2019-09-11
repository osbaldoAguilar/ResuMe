import React from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes.js"
//import img1 from '../../../assets/images/IMG_0003.jpg'

const Card = props =>{
    return(
        <div className='pcard text-center shadow'>
            <div className="overflow">
                <img src={props.imgsrc} alt="image 1" className='card-img-top'/>
            </div>
            <div className="pcard-body text-dark">
                <h4 className="pcard-title">{props.title}</h4>
                <p className="pcard-text text-secondary">
                    {props.text}
                </p>
               <a href={props.url} className="btn btn-outline-success">Go to React App</a>
            </div>
        </div>
    );
}

export default Card;