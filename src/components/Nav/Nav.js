import React, { Component } from "react";
import "./Pawprint.css";

class Pawprint extends Component {
  render() {
    return (
      <div className="paw-print">
        <div className="paw-toe" id="paw1" />
        <div className="paw-toe" id="paw2" />
        <div className="paw-toe" id="paw3" />
        <div className="paw-toe" id="paw4" />
        <div className="paw-pad" />
      </div>
    );
  }
}

export default Pawprint;
