import React from 'react'
import Card from "../../components/PortfolioCard/index.js";
import CalSS from "../../assets/images/calSS.png";
import SociSS from "../../assets/images/socialSS.png";
import TicSS from "../../assets/images/TicTacSS.png"

class Protfolio extends React.Component{
    render(){
        return(
        <div className="portfolio-wrapper">
           
                        <Card imgsrc={CalSS} title="Calculator" 
                        url="http://localhost:3000/Portfolio/calculator"/>

                        <Card imgsrc={SociSS} title="Social Card"
                        url="http://localhost:3000/Portfolio/socialcard"/>
                            {/* <Link to={ROUTES.SOCIALCARD}>routes</Link> */}

                        <Card imgsrc={TicSS} title="TicTacToe"
                        url="http://localhost:3000/Portfolio/ticTac"/>
                            {/* <Link to={ROUTES.TICTAC}>TicTacToe</Link> */}
     
        </div>)
    }

}
export default Protfolio
