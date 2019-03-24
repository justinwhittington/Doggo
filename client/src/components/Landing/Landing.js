import React, { Component } from "react";
import Loader from "../Loader";
import Home from "./Home";
import "./Landing.css";

/*
This is the page the user lands on when first accessing the site.

Contains the home component which will be where the user accesses the signup/login features
*/

class Landing extends Component {
  state = {
    load: true,
    data: null
  };

  /* Sets the time which the Loader appears before user gets to landing page */
  componentDidMount() {
    //calls fetch function once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
    console.log(this.state.data);

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

  componentDidUpdate() {
    console.log(this.state.data);
  }

  // // fetches out GET route from the express server
  callBackendAPI = async () => {
    const response = await fetch("/");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(this.state.data);
    return body;
  };

  /* The 'loader' is always rendered first */
  render() {
    return (
      <div id="landingPage">{this.state.load ? <Loader /> : <Home />}</div>
    );
  }
}

export default Landing;
