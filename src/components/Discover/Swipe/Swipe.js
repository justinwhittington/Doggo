import React from "react";
import "./Swipe.css";

const Swipe = props => (
  <div className="swipeButtons">
    <button type="button" class="btn btn-success" onClick={() => props.like()}>
      √
    </button>
    <button
      type="button"
      class="btn btn-danger"
      onClick={() => props.dislike()}
    >
      X
    </button>
    
  </div>
);

export default Swipe;
