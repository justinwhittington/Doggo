import React, { Component } from "react";
import "./Pawprint.css";

class Pawprint extends Component {
  render() {
    return (
      <div className="paw-print">
        <div class="dot" id="dot1" />
        <div class="dot" id="dot2" />
        <div class="dot" id="dot3" />
        <div class="dot" id="dot4" />
        <div class="heart" />
      </div>
    );
  }
}

export default Pawprint;
