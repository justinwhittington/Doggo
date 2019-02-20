import React, { Component } from "react";
import "./Header.css";

/* This component will contain the Log In button, as well as an additional nav menu */
export default class Header extends Component {
  render() {
    return (
      <header id="homeHeader">
        <div className="logo-login">
          <div className="headerLeft">DOGGO</div>
          <div className="btnContainer">
            <div className="loginBtn">LOG IN</div>
          </div>
        </div>
      </header>
    );
  }
}
