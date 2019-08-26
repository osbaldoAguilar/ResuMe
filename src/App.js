import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Dashboard from "./containers/Dashboard";
import * as ROUTES from "./constants/routes.js";
import About from "./containers/About";
import Resume from "./containers/Resume";
import ticTac from "./containers/ticTac";



function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Dashboard} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.RESUME} component={Resume} />
            <Route exact path={ROUTES.TICTAC} component={ticTac} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

