import React from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes.js"

const Protfolio =()=>(
    <nav className="portfolio">
        <div className="portflio-content">
            <ul>
                <li>
                    <Link to={ROUTES.CALCULATOR}>CALCULATOR</Link>
                </li>
                <li>
                    <Link to={ROUTES.SOCIALCARD}>SOCIALCARD</Link>
                </li>
                <li>
                    <Link to={ROUTES.TICTAC}>TICTACTOE</Link>
                </li>
            </ul>
        </div>
    </nav>
)
export default Protfolio