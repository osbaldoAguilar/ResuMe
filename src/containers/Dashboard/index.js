import React from "react";
import logo from '../../assets/images/myLogo.png'

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
          <p>Welcome</p>
          <div className="logo-wrapper">
            <p>made somewhere in Raleigh</p>
            <img src={logo} />
          </div>
          {/* <div className="cta-wrapper">
            <a target="_blank" href="">View on Github</a> */}
          </div>
        </div>
      // </div>
    );
  }
}


export default Dashboard