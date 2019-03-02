import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
// import Logo from "../../Logo";
import Images from "../../../assets/backgroundImages.js";
import "./Home.css";

/*
The main content for the landing page. Here the user will login, signup, and access additional site features 
*/

export default class Home extends Component {
  state = {
    image: "../../../assets/images/dog1.jpg"
  };

  componentDidMount() {
    this.updateBackground();
  }

  // Trying to figure out how to render background image on timer
  updateBackground() {

    for (let i = 0, len = Images.length; i < len; i++) {
      setTimeout(
        () =>
          this.setState(() => {
            return {
              image: Images[i]
            };
          }),
        2000 // Adjusts Loader lenght
      );
    }
  console.log(this.state.image);
  }

  

  render() {

    let divStyle = {
      // backgroundImage: `url(${this.state.image})`,
      // backgroundSize: '100%',
    }

    return (
      <div id="homeContainer">
        <div id="homeContent" style={divStyle}>
          <Header />

          <div className="landingBillBoard">
            <h1>Single is a terrible thing to waste.</h1>
          </div>
          <div className="termsOfService" />
          <div />
          <div className="btnContainer" id="homeSignUp">
            <Link to='/discover' className="button" id="signupBtn" >
              Discover
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
