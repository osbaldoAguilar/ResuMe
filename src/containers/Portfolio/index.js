import React from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";
import Card from "../../components/PortfolioCard/index.js";
import CalSS from "../../assets/images/calSS.png";
import SociSS from "../../assets/images/socialSS.png";
import TicSS from "../../assets/images/TicTacSS.png"

class Protfolio extends React.Component{
    render(){
        return(
        <nav className="portfolioCard">
            <div className="_pCard">
            <div className="container-fluid d-flex justify-content-cneter">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={CalSS} title="Calculator" 
                        url="http://localhost:3000/Portfolio/calculator"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={SociSS} title="Social Card"
                        url="http://localhost:3000/Portfolio/socialcard"/>
                            {/* <Link to={ROUTES.SOCIALCARD}>routes</Link> */}
                    </div>
                </div><div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={TicSS} title="TicTacToe"
                        url="http://localhost:3000/Portfolio/ticTac"/>
                            {/* <Link to={ROUTES.TICTAC}>TicTacToe</Link> */}
                    </div>
                </div>
            </div>
            </div>



        </nav>)
    }

}
export default Protfolio
