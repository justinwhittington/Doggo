import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "../../Logo";
import Images from "../../../assets/backgroundImages.js";
import "./Home.css";

/*
The main content for the landing page. Here the user will login, signup, and access additional site features 
*/

export default class Home extends Component {
  state = {
    image: ""
  };

  render() {
    return (
      <div id="homeContainer">
        <div id="homeContent">
          <Header />

          <div className="landingBillBoard">
            <h1>Single is a terrible thing to waste.</h1>
          </div>
          <div className="termsOfService" />
          <div />
          <div className="btnContainer" id='homeSignUp'>
            <div className='button' id="signupBtn" >Sign Up</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
