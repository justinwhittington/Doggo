import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Discover from "./components/Discover";
import Landing from "./components/Landing";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div id='appContainer' className="oneHundredHeight">
          {/* <NavHeader /> */}
          <Route path="/" exact={true} component={Landing} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    ); 
  }
}

export default App;
 