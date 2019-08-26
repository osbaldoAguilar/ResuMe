import React from "react";
import labsLogo from '../../assets/images/ctd-labs-logo.png'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    
  }


  render() {

    return (
      <div className="view-container dashboard">
        <div className="dashboard-content">
          <p>Welcome to the Dashboard</p>
          <div className="logo-wrapper">
            <p>made from Russia with love</p>
            <img src={labsLogo} />
          </div>
          <div className="cta-wrapper">
            <a target="_blank" href="https://github.com/CodeTheDream">View on Github</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard