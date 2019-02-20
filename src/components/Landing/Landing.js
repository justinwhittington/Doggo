import React, { Component } from "react";
import Loader from "../Loader";
import Home from './Home';
import "./Landing.css";

/*
This is the page the user lands on when first accessing the site.

Contains the home component which will be where the user accesses the signup/login features
*/

class Landing extends Component {
  state = {
    load: true
  };

  /* Sets the time which the Loader appears before user gets to landing page */
  componentDidMount() {
    if (this.state.load) {
      setTimeout(
        () =>
          this.setState(() => {
            return {
              load: false
            };
          }),
        1000 // Adjusts Loader lenght
      );
    } 
  }

  /* The 'loader' is always rendered first */
  render() {
    return (
      <div id="landingPage">
        {this.state.load ? (
          <Loader />
        ) : (
         <Home />
        )}
      </div>
    );
  }
}

export default Landing;
