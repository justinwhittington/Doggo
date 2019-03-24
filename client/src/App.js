import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Discover from "./components/Discover";
import Landing from "./components/Landing";
import Search from "./components/Search";
import List from "./components/Matches";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="appContainer" className="oneHundredHeight">
          {/* <NavHeader /> */}
          <Switch>
            <Route path="/" exact={true} component={Landing} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/matches" component={List} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
