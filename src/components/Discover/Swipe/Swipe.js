import React from "react";
import "./Swipe.css";

const Swipe = props => (
  <div className="swipeButtons">
    <button type="button" className="btn btn-success" onClick={() => props.like()}>
      √
    </button>
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => props.dislike()}
    >
      X
    </button>
    
  </div>
);

export default Swipe;
