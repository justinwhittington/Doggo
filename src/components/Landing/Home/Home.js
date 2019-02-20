import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Logo from "../../Logo";
import "./Home.css";

/*
The main content for the landing page. Here the user will login, signup, and access additional site features 
*/

export default class Home extends Component {
  state = {
    image: ""
  };

  componentDidMount() {}

  render() {
    return (
      <div id="homeContainer">
        <div id="homeContent">
          <Header></Header>

          <div className='landingBillBoard'>
            
          </div>
          <div className='termsOfService'></div>
          <div className='signUpBtn'></div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
