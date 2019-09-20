import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Dashboard from "./containers/Dashboard";
import * as ROUTES from "./constants/routes.js";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio"
import Resume from "./containers/Resume";
import ticTac from "./containers/ticTac";
import Calculator from "./containers/Calculator";
import SocialCard from "./containers/SocialCard";
import Contact from "./containers/Contact"
//import Teampicker from "./containers/Teampicker";



function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Dashboard} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.PORTFOLIO} component={Portfolio}/>
            <Route exact path={ROUTES.RESUME} component={Resume}/>
            <Route exact path={ROUTES.TICTAC} component={ticTac} />
            <Route exact path={ROUTES.CALCULATOR} component={Calculator}/>
            <Route exact path={ROUTES.SOCIALCARD} component={SocialCard}/>
            <Route exact path={ROUTES.CONTACT} component={Contact}/>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

